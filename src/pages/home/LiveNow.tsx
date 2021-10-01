import React, { Component } from 'react';
import {
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
  Alert,
  DeviceEventEmitter,
  AppState,
  BackHandler 
} from 'react-native';

import RtcEngine, {
  ChannelProfile,
  ClientRole,
  RtcEngineConfig,
  RtcLocalView,
  VideoFrameRate,
  VideoOutputOrientationMode,
  VideoRenderMode,
  AudienceLatencyLevelType,
  RtcRemoteView,
} from 'react-native-agora';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../components/Item';

const config = require('../../../agora.config.json');

interface State {
  role?: ClientRole;
  channelId?: string;
  isJoin: boolean;
  remoteUid?: number;
  isLowAudio: boolean;
}

 class LiveStreaming extends Component<{}, State, any> {
  _engine?: RtcEngine;

  constructor(props: {}) {
    super(props);
    this.state = {
      isJoin: false,
      isLowAudio: true,
    };
  }

  UNSAFE_componentWillMount() {
    Alert.alert('Pick Role', 'Please choose role', [
      {
        text: 'Broadcaster',
        onPress: () => this.setState({ role: ClientRole.Broadcaster }),
      },
      {
        text: 'Audience',
        onPress: () => this.setState({ role: ClientRole.Audience }),
      },
    ]);
  }

  componentWillUnmount() {
    this._destroyEngine()
    // this.appStateSubscription.remove();
    this.routeSubscription.remove();
  }

  _destroyEngine = (route) => {
    this.setState({isJoin: false})
    this._engine?.destroy();
  }

  componentDidMount() {
    this.appStateSubscription = AppState.addEventListener("change",  this._destroyEngine);
    this.routeSubscription = DeviceEventEmitter.addListener('routeStateChanged', this._destroyEngine);
  }

  _initEngine = async () => {
    const { role } = this.state;
    const { userInfo } = this.props
    console.log('userInfo.user.id',typeof parseInt(userInfo.user.id), parseInt(userInfo.user.id), role)
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
    this._engine = await RtcEngine.createWithConfig(
      new RtcEngineConfig(config.appId)
    );
    this._addListeners();

    // enable video module and set up video encoding configs
    await this._engine.enableVideo();

    // make this room live broadcasting room
    await this._engine.setChannelProfile(ChannelProfile.LiveBroadcasting);
    await this._updateClientRole(role!);

    // Set audio route to speaker
    await this._engine.setDefaultAudioRoutetoSpeakerphone(true);

    // start joining channel
    // 1. Users can only see each other after they join the
    // same channel successfully using the same app id.
    // 2. If app certificate is turned on at dashboard, token is needed
    // when joining channel. The channel name and uid used to calculate
    // the token has to match the ones used for channel join
    await this._engine.joinChannel(
      config.token,
      config.channelId,
      null,
      0,
      undefined
    );
  };
  _addListeners = () => {
    this._engine?.addListener('RtcStats', RTcStats => {
      // console.info('RTcStats',  RTcStats,  this.state.role == ClientRole.Broadcaster ? "Broadcaster" : "Audience")
    })
    this._engine?.addListener('Warning', (warningCode) => {
      console.info('Warning', warningCode, this.state.role == ClientRole.Broadcaster ? "Broadcaster" : "Audience");
    });
    this._engine?.addListener('Error', (errorCode) => {
      console.log('Error', errorCode, this.state.role == ClientRole.Broadcaster ? "Broadcaster" : "Audience");
    });
    this._engine?.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.info('JoinChannelSuccess', channel, uid, elapsed);
      // RtcLocalView.SurfaceView must render after engine init and channel join
      this.setState({ isJoin: true });
    });
    this._engine?.addListener('UserJoined', async (uid, elapsed) => {
      console.info('UserJoined', uid, elapsed, this.state.role == ClientRole.Broadcaster ? "Broadcaster" : "Audience");
      this.setState({ remoteUid: uid });
    });
    this._engine?.addListener('LeaveChannel', (e) => {
      console.info('UserOffline', e, this.state.role == ClientRole.Broadcaster ? "Broadcaster" : "Audience");
      this.setState({ remoteUid: undefined });
    });
    this._engine?.addListener('ConnectionLost', (e) => {
      console.info('ConnectionLost', e, this.state.role == ClientRole.Broadcaster ? "Broadcaster" : "Audience");
      this.setState({ remoteUid: undefined });
    });
  };

  _updateClientRole = async (role: ClientRole) => {
    const { isLowAudio } = this.state;
    let option;
    if (role === ClientRole.Broadcaster) {
      await this._engine?.setVideoEncoderConfiguration({
        dimensions: {
          width: 640,
          height: 360,
        },
        frameRate: VideoFrameRate.Fps30,
        orientationMode: VideoOutputOrientationMode.Adaptative,
      });
      // enable camera/mic, this will bring up permission dialog for first time
      await this._engine?.enableLocalAudio(true);
      await this._engine?.enableLocalVideo(true);
    } else {
      // You have to provide client role options if set to audience
      option = {
        audienceLatencyLevel: isLowAudio
          ? AudienceLatencyLevelType.LowLatency
          : AudienceLatencyLevelType.UltraLowLatency,
      };
    }
    await this._engine?.setClientRole(role, option);
  };
  onPressToggleRole = () => {
    const role =
      this.state.role === ClientRole.Audience
        ? ClientRole.Broadcaster
        : ClientRole.Audience;
    this.setState({ role }, () => {
      this._updateClientRole(this.state.role!);
    });
  };
  onPressToggleLatencyLevel = async () => {
    this.setState({ isLowAudio: !this.state.isLowAudio }, async () => {
      await this._engine?.setClientRole(ClientRole.Audience, {
        audienceLatencyLevel: this.state.isLowAudio
          ? AudienceLatencyLevelType.LowLatency
          : AudienceLatencyLevelType.UltraLowLatency,
      });
    });
  };

  render() {
    const { isJoin, role, remoteUid } = this.state;

    return (
      <View style={styles.container}>
        {!isJoin && <Button onPress={this._initEngine} title="Join channel" />}
        {isJoin && this._renderVideo()}
      </View>
    );
  }

  _renderVideo = () => {
    const { role, remoteUid } = this.state;
    return (
      <View style={styles.container}>
        {role === ClientRole.Broadcaster ? (
          // RtcLocalView.SurfaceView must render after engine init and channel join
          <RtcLocalView.SurfaceView
            style={styles.surfaceView}
            renderMode={VideoRenderMode.Hidden}
          />
        ) : (
          !!remoteUid && (
            // RtcRemoteView.SurfaceView must render after uid have value
            <RtcRemoteView.SurfaceView
              style={styles.surfaceView}
              uid={remoteUid}
            />
          )
        )}
        <View style={styles.float}>
          {role === ClientRole.Audience && (
            <Item
              title="Toggle Audience Latency Level"
              isShowSwitch
              isShowSlider={false}
              titleColor="white"
              onSwitchValueChange={this.onPressToggleLatencyLevel}
            />
          )}
          <Item
            title="Toggle Role"
            isShowSwitch
            isShowSlider={false}
            titleColor="white"
            onSwitchValueChange={this.onPressToggleRole}
          />
        </View>
      </View>
    );
  };
}

const mapStateToProps = state => {
  return {
    userInfo: state.user.userData
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LiveStreaming)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ffffff",
    paddingBottom: 40,
  },
  float: {
    position: 'absolute',
    left: 50,
    bottom: 100,
    backgroundColor: 'gray',
  },

  surfaceView: {
    flex: 1,
  },
});
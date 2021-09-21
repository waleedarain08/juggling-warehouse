import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native'
// Load the module
import Video from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

export const VideoPlayer = () => {

    const [orientation, setOrientation] = React.useState('landscape')

    React.useEffect(() => {
        Dimensions.addEventListener('change', detectOrientation);
        return () => {
            Dimensions.removeEventListener("change", detectOrientation);
        };
    }, []);

    const isPortrait = () => {
        const dim = Dimensions.get('screen');
        return dim.height >= dim.width;
      };

    
    const detectOrientation = () => {
        let orientation = isPortrait() ? 'portrait' : 'landscape'
        setOrientation(orientation)
    }

    console.log("orientation", orientation)
     
    return(
            <Video source={{uri: "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"}}   // Can be a URL or a local file.
                ref={(ref) => {
                    // this.player = ref
                }}                                      // Store reference
                // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                // onError={this.videoError}               // Callback when video cannot be loaded
                style={styles.backgroundVideo}
                controls
                fullscreen
                fullscreenOrientation="landscape"
                resizeMode={orientation == "landscape" ? "contain" : "cover"}                                   // Store reference
                onBuffer={(e) => {console.log("BUFFFER", e)}}                // Callback when remote video is buffering
                onError={(e) => {console.log("onError", e)}}         // Callback when video cannot be loaded
                style={styles.backgroundVideo}
                onLoadStart={() => console.log("ONLOAD START")}
                controls
                onVideoEnd={(status) => {
                    console.log("end", status)
                    this.setState({ progress: 0, buttons: true })

                }}
            />
    )
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 60,
    right: 0,
  },
});
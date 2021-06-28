import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
// import {BlurView} from '@react-native-community/blur';
import {Input, Button, Card} from 'react-native-elements';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userLogout} from '../../redux/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

function HomeScreen({navigation, user, userLogout}) {
  const [reason, setReason] = useState([
    {title: 'abc', image: require('../../assets/vedio.png')},
    {title: 'def', image: require('../../assets/vedio.png')},
    {title: 'ghi', image: require('../../assets/vedio.png')},
  ]);
  const [reason1, setReason1] = useState([
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
  ]);
  const [reason2, setReason2] = useState([
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
    {title: 'abc', image: require('../../assets/01-tile.png')},
    {title: 'abc', image: require('../../assets/02-tile.png')},
    {title: 'abc', image: require('../../assets/03-tile.png')},
  ]);
  const [reason3, setReason3] = useState([
    {title: 'abc', image: require('../../assets/serial1.jpg')},
    {title: 'abc', image: require('../../assets/serial2.jpg')},
    {title: 'abc', image: require('../../assets/serial1.jpg')},
    {title: 'abc', image: require('../../assets/serial2.jpg')},
  ]);

  const [modalVisible, setModalVisible] = useState(0);

  goNext = () => {
    navigation.navigate('DetailScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cate}>
        <Text style={styles.categores}>Livestreaming</Text>
        <Text style={styles.categores}>Vlogs</Text>
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.categores}>Categories</Text>
          <Image
            style={styles.drop}
            source={require('../../assets/drop-down.png')}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{height: 700}}>
        <View style={{flex: 1, flexGrow: 1}}>
          <View style={styles.box2}>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => goNext()}
                    style={{width: 290}}>
                    <Image
                      style={styles.live}
                      source={require('../../assets/live.png')}
                    />
                    <Image
                      style={{
                        width: '100%',
                        height: '100%',
                        marginLeft: 0,
                        resizeMode: 'contain',
                      }}
                      source={item.image}
                    />
                  </TouchableOpacity>
                );
              }}></FlatList>
          </View>
          <View style={styles.box3}>
            <Text style={styles.trending}>Trending Now</Text>
            <FlatList
              data={reason1}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={styles.carddv}>
                    <View style={{flex: 2}}>
                      <Image style={styles.tile} source={item.image} />
                    </View>
                    <View style={styles.rowdv}>
                      <View
                        style={{
                          flex: 2,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Image
                          style={styles.mark}
                          source={require('../../assets/ex-mark.png')}
                        />
                        <View style={{width: 5}}></View>
                        <Text style={styles.worddv}>1h 56m</Text>
                      </View>
                      <Image
                        style={styles.dots}
                        source={require('../../assets/3-dots.png')}
                      />
                    </View>
                  </View>
                );
              }}></FlatList>
          </View>
          <View style={styles.box4}>
            <Text style={styles.top}>Top Searches</Text>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason2}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={{width: 100}}>
                    <Image style={styles.search} source={item.image} />
                  </View>
                );
              }}></FlatList>
          </View>
          <View style={styles.box5}>
            <Text style={styles.recomend}>Recommended</Text>
            <FlatList
              data={reason3}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <View style={{width: 240, position: 'relative', padding: 0}}>
                    <Image style={styles.untitled} source={item.image} />
                  </View>
                );
              }}></FlatList>
          </View>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          {/* <BlurView
            style={styles.absolute}
            blurType="light"
            blurAmount={10}
            reducedTr
            ansparencyFallbackColor="white"
          /> */}
          <View style={styles.categories}>
            <Text style={style.homecategory}>Home</Text>
            <Text style={style.listcategory}>My List</Text>
            <Text style={style.availablecategory}>Available for Download</Text>
            <Text style={style.actioncategory}>Action</Text>
            <Text style={style.animecategory}>Anime</Text>
            <Text style={style.childrencategory}>Children & Family</Text>
            <Text style={style.documentcategory}>Documentaries</Text>
            <Text style={style.fantasycategory}>Fantasy</Text>
            <Text style={style.realitycategory}>Reality</Text>
            <Text style={style.stanupcategory}>Stan-up</Text>
            <Text style={style.audiocategory}>Audio Description</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = state => {
  return {user: state?.user};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({userLogout}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e101f',
    paddingHorizontal: 10,
  },
  // absolute: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
  drop: {
    width: 10,
    height: 20,
    resizeMode: 'contain',
  },
  menupng: {
    width: 14,
    height: 12,
    marginLeft: 16,
  },
  home: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    paddingLeft: 20,
  },
  cate: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: '2%',
  },
  categores: {
    color: '#fffffd',
    fontSize: 14,
    fontWeight: '500',
  },
  box2: {
    flex: 4,
  },
  carddv: {
    flex: 1,
    backgroundColor: '#181a33',
    marginLeft: 7,
    marginTop: 10,
  },
  trending: {
    paddingLeft: 8,
    paddingTop: 4,
    color: '#fffffd',
    fontSize: 14,
    fontWeight: '500',
  },
  tile: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  mark: {
    width: 12,
    height: 12,
    paddingLeft: 6,
  },
  worddv: {
    color: '#fffffd',
    paddingRight: 6,
    fontSize: 10,
  },
  dots: {
    width: 3,
    height: 12,
  },
  rowdv: {
    flex: 0,
    padding: 10,
    paddingHorizontal: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  live: {
    width: 65,
    height: 65,
    position: 'absolute',
    right: 18,
    zIndex: 10,
    resizeMode: 'contain',
  },
  box3: {
    flex: 4,
  },
  box4: {
    flex: 4,
  },
  top: {
    paddingLeft: 6,
    paddingVertical: 10,
    color: '#fffffd',
    fontSize: 14,
    fontWeight: '500',
  },
  search: {
    height: 100,
    width: '80%',
    resizeMode: 'stretch',
    marginLeft: 6,
  },
  box5: {
    flex: 7,
  },
  untitled: {
    width: 230,
    height: 150,
    marginLeft: 10,
  },
  recomend: {
    color: '#fffffd',
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 12,
  },

  centeredView: {
    flex: 1,
    backgroundColor: '#0e101f99',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    elevation: 2,
    // marginHorizontal:18
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginHorizontal: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  modalText: {
    textAlign: 'center',
    color: '#fff',
  },
  tick: {
    width: 15,
    height: 15,
    marginRight: 12,
  },
  soundgb: {
    paddingLeft: 44,
    color: '#b2b1b6',
    fontSize: 12,
  },
  hihtdv: {
    color: '#b2b1b6',
    fontSize: 12,
  },
  rate: {
    color: '#b2b1b6',
    paddingLeft: 4,
    fontSize: 12,
  },
  popup: {
    width: 30,
    height: 30,
    marginLeft: 30,
    marginBottom: 8,
  },
});

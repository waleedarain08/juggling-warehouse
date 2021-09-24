import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';
import { getCategory, getDownloadFilesCount } from '../../redux/actions/content';
import { getDeviceToken } from '../../helper/utils';
import { TrendingCard } from '../../components/Card/trendingCard';
import { getStoragePermission } from '../../helper/requestPermission';

function HomeScreen({ navigation, user, userLogout, state, route, getCategory, categories, getDownloadFilesCount }) {
  const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/vedio.png') }, { title: "def", image: require('../../assets/vedio.png') }, { title: "ghi", image: require('../../assets/vedio.png') },]);
  const [reason1, setReason1] = useState([{ title: "abc", image: require('../../assets/050.png') }, { title: "abc", image: require('../../assets/030.png') }, { title: "abc", image: require('../../assets/040.png') }, { title: "abc", image: require('../../assets/020.png') }, { title: "abc", image: require('../../assets/050.png') }, { title: "abc", image: require('../../assets/030.png') }]);
  const [reason2, setReason2] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }]);
  const [reason3, setReason3] = useState([{ title: "abc", image: require('../../assets/images05.png') }, { title: "abc", image: require('../../assets/images06.png') }, { title: "abc", image: require('../../assets/images05.png') }, { title: "abc", image: require('../../assets/images06.png') }]);
  const [modalVisible, setModalVisible] = useState(false);
  const [listhome, setlisthome] = useState([  { title: "jkl", Text: "Action" }, { title: "mno", Text: "Anime" }, { title: "pqr", Text: "Children & Family" }, { title: "stu", Text: "Documentaries" }, { title: "vwx", Text: "Fantasy" }, { title: "yza", Text: "Reality" }]);
  goNext = () => {
    navigation.navigate("AboutMotivation");
  }

  useEffect(() => {
    getCategory()
    getDownloadFilesCount()
    getStoragePermission()
    // getDeviceToken()
    // .then(token => console.log("HOMESCREEN token", token))
    // .catch(err => console.log("HOMESCREEN err", err))
  }, [])
  
  console.log("categories", categories)
  return (
    <View style={styles.container}>
      <View style={styles.cate}>
        <Text style={styles.categores}>Livestreaming</Text>
        <Text style={styles.categores}>Vlogs</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: "row",alignItems:"center" }}>
          <Text style={styles.categores}>Categories</Text>
          <Image style={styles.drop} source={require('../../assets/drop-down.png')} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ height: 700 }}  showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, flexGrow: 1 }}>

          <View style={styles.box2}>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate("AboutMotivation")} style={{ width: 290 }}>
                    <Image style={styles.live} source={require('../../assets/live.png')} />
                    <Image
                      style={{ width: "100%", height: "100%", marginLeft: 3, resizeMode: "contain" }}
                      source={item.image} />
                  </TouchableOpacity>
                )
              }}>
            </FlatList>
          </View>
          <View style={styles.box3}>
            <Text style={styles.trending}>Trending Now</Text>
            <FlatList
              showsVerticalScrollIndicator="none"
              data={reason1}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return <TrendingCard displayImage={item.image} />
              }}>
            </FlatList>
          </View>
          <View style={styles.box4}>
            <Text style={styles.top}>Top Searches</Text>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason2}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <Image style={styles.search} source={item.image} />
                )
              }}>
            </FlatList>
          </View>
          <View style={styles.box5}>
            <Text style={styles.recomend}>Recommended</Text>
            <FlatList
              data={reason3}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View style={{ width: 240, position: "relative", padding: 0, }}>
                    <Image
                      style={styles.untitled}
                      source={item.image} />
                  </View>
                )
              }}>
            </FlatList>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <BlurView style={styles.blurView}
            blurType="dark"
            blurAmount={15}
          />
          <View style={{flex:1, justifyContent:"center"}}>
            <Text onPress={() => setModalVisible(false)} style={styles.firstHeading}>Home</Text>
            <Text onPress={() => setModalVisible(false)} style={styles.firstHeading}>My List</Text>
            <Text onPress={() => setModalVisible(false)} style={styles.homelist}>Available for Download</Text>
            {/* <FlatList
              style={{backgroundColor: 'red'}}
              data={listhome}
              keyExtractor={(item, index) => index}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{backgroundColor: 'red'}}
              renderItem={({ item, index }) => {
                return (
                  <Text onPress={() => setModalVisible(false)}
                    style={styles.homelist}>{item.Text}</Text>
                )
              }}>
              </FlatList> */}
              {categories.map((item, index) => {
                return (
                  <Text onPress={() => setModalVisible(false)}
                    style={styles.homelist}>{item.Text}</Text>
                )
              })}
              <Text onPress={() => setModalVisible(false)} style={styles.firstHeading}>Stan-up</Text>
              <Text onPress={() => setModalVisible(false)} style={styles.firstHeading}>Audio Description</Text>
          </View>

        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = state => {
  return { 
    user: state?.user,
    categories: state.content.categories
   };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogout, getCategory, getDownloadFilesCount }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e101f",
    paddingHorizontal: 10
  },
  drop: {
    width: 10,
    height: 20,
    resizeMode: "contain",
    marginLeft: 7,
    marginTop:4
  },
  menupng: {
    width: 14,
    height: 12,
    marginLeft: 16
  },
  home: {
    fontSize: 12,
    fontWeight: '600',
    color: "white",
    paddingLeft: 20,
  },
  cate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingVertical:14
  },
  categores: {
    color: "#fffffd",
    fontSize: 14,
    fontWeight: '500',
    fontFamily:'Raleway-Regular'
  },
  box2: {
    flex: 4,
  },
  trending: {
    paddingLeft: 9,
    color: "#fffffd",
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily:'Raleway-Regular',
    paddingTop:8
  },
  tile: {
    width: 80,
    height: 90,
    resizeMode: "cover",
  },
  live: {
    width: 65,
    height: 65,
    position: "absolute",
    zIndex: 10,
    resizeMode: 'contain',
    left: 18
  },
  box3: {
    flex: 4,
  },
  box4: {
    flex: 4,
  },
  top: {
    paddingLeft: 9,
    paddingVertical: 14,
    color: "#fffffd",
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily:'Raleway-Regular'
  },
  search: {
    height: 110,
    width: 80,
    resizeMode: "cover",
    marginLeft: 10,
  },
  box5: {
    flex: 7,
  },
  untitled: {
    width: 230,
    height: 130,
    marginLeft: 10,
  },
  recomend: {
    color: "#fffffd",
    fontSize: 12,
    paddingLeft: 10,
    paddingTop: 14,
    marginBottom: 15,
    fontWeight:"bold",
    fontFamily:'Raleway-bold'
  },

  centeredView: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems:"center",
    justifyContent:"center",
    // paddingVertical: "20%",
  },
  homelist: {
    textAlign: "center",
    color: "#d7d7d9",
    fontWeight: "bold",
    fontSize: 14,
    paddingVertical: 20,
    fontFamily:'Raleway-Regular',
  },
  firstHeading: {
    textAlign: "center",
    color: "#d7d7d9",
    fontWeight: "bold",
    paddingVertical: 20,
    fontSize: 12.5,
    opacity:0.5,
    fontFamily:'Raleway-Regular',
  },
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
   backgroundColor:"#0e101f70"
  },
  
})
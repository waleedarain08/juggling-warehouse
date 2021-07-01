import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, Pressable, TouchableOpacity, Modal } from 'react-native';
import { BlurView } from "@react-native-community/blur";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';


function HomeScreen({ navigation, user, userLogout }) {
  const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/vedio.png') }, { title: "def", image: require('../../assets/vedio.png') }, { title: "ghi", image: require('../../assets/vedio.png') },]);
  const [reason1, setReason1] = useState([{ title: "abc", image: require('../../assets/050.png') }, { title: "abc", image: require('../../assets/030.png') }, { title: "abc", image: require('../../assets/040.png') }, { title: "abc", image: require('../../assets/020.png') }, { title: "abc", image: require('../../assets/050.png') }, { title: "abc", image: require('../../assets/030.png') }]);
  const [reason2, setReason2] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }]);
  const [reason3, setReason3] = useState([{ title: "abc", image: require('../../assets/images05.png') }, { title: "abc", image: require('../../assets/images06.png') }, { title: "abc", image: require('../../assets/images05.png') }, { title: "abc", image: require('../../assets/images06.png') }]);
  const [modalVisible, setModalVisible] = useState(false);
  const [listhome, setlisthome] = useState([{ title: "abc", Text: "Home" }, { title: "def", Text: "My List" }, { title: "ghi", Text: "Available for Download" }, { title: "jkl", Text: "Action" }, { title: "mno", Text: "Anime" }, { title: "pqr", Text: "Children & Family" }, { title: "stu", Text: "Documentaries" }, { title: "vwx", Text: "Fantasy" }, { title: "yza", Text: "Reality" }, { title: "bcd", Text: "Stan-up" }, { title: "efg", Text: "Audio Description" }]);
  goNext = () => {
    navigation.navigate("About Motivation");
  }

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

      <ScrollView contentContainerStyle={{ height: 700 }}>
        <View style={{ flex: 1, flexGrow: 1 }}>

          <View style={styles.box2}>
            <FlatList
              keyExtractor={(item, index) => index}
              data={reason}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity activeOpacity={0.9} onPress={() => goNext()} style={{ width: 290 }}>
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
                return (
                  <View style={styles.carddv}>
                    <View style={{ flex: 2 }}>
                    <Image style={styles.play01} source={require('../../assets/play01.png')} />
                      <Image style={styles.tile} source={item.image} />
                    </View>
                    <View style={styles.rowdv}>
                      <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
                        <Image style={styles.mark} source={require('../../assets/ex-mark.png')} />
                        <View style={{ width: 5 }}></View>
                        <Text style={styles.worddv}>1h 56m</Text>
                      </View>
                      <Image style={styles.dots} source={require('../../assets/3-dots.png')} />
                    </View>
                  </View>
                )
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
          <FlatList
            data={listhome}
            keyExtractor={(item, index) => index}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <Text onPress={() => setModalVisible(false)}
                  style={(index === 0 || index === listhome.length - 1) || (index === 1 || index === listhome.length - 2) ? styles.firstHeading : styles.homelist}>{item.Text}</Text>
              )
            }}>
          </FlatList>
        </View>
      </Modal>
    </View>
  );
}

const mapStateToProps = state => {
  return { user: state?.user };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogout }, dispatch);

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
    paddingBottom: "2%",
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
  carddv: {
    flex: 1,
    backgroundColor: "#181a33",
    marginLeft: 10, marginTop: 10,
  },
  trending: {
    paddingLeft: 9,
    paddingTop: 4,
    color: "#fffffd",
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily:'Raleway-Regular'
  },
  tile: {
    width: 80,
    height: 90,
    resizeMode: "cover",
  },
  play01:{
    width:20,
    height:20,
    resizeMode:"contain",
    position:"absolute",
    zIndex:1,
    left:28
    ,
    top:35,
  },
  mark: {
    width: 12,
    height: 12,
    paddingLeft: 6,
  },
  worddv: {
    color: "#fffffd",
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
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical:5,
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
    paddingVertical: 10,
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
    paddingTop: 8,
    marginBottom: 10,
    fontWeight:"bold",
    fontFamily:'Raleway-bold'
  },

  centeredView: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: "20%",
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
    fontFamily:'Raleway-Regular'
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
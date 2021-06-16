import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';


function HomeScreen({ navigation, user, userLogout }) {
  const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/vedio.png') }, { title: "def", image: require('../../assets/vedio.png') }, { title: "ghi", image: require('../../assets/vedio.png') },]);
  const [reason1, setReason1] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }]);
  const [reason2, setReason2] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }, { title: "abc", image: require('../../assets/01-tile.png') }, { title: "abc", image: require('../../assets/02-tile.png') }, { title: "abc", image: require('../../assets/03-tile.png') }]);
  const [reason3, setReason3] = useState([{ title: "abc", image: require('../../assets/serial1.jpg') }, { title: "abc", image: require('../../assets/serial2.jpg') }, { title: "abc", image: require('../../assets/serial1.jpg') }, { title: "abc", image: require('../../assets/serial2.jpg') }]);


  return (
    <View style={styles.container}>
      <View style={styles.cate}>
        <Text style={styles.categores}>Livestreaming</Text>
        <Text style={styles.categores}>Vlogs</Text>
        <Text style={styles.categores}>Categories</Text>
        <Image style={styles.drop} source={require('../../assets/drop-down.png')} />
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
                  <View style={{ width: 280 }}>
                    <Image style={styles.live} source={require('../../assets/live.png')} />
                    <Image
                      style={{ width: "100%", height: "100%", marginLeft: 0, resizeMode: "contain", }}
                      source={item.image} />
                  </View>
                )
              }}>
            </FlatList>
          </View>
          <View style={styles.box3}>
            <Text style={styles.trending}>Trending Now</Text>
            <FlatList
              data={reason1}
              keyExtractor={(item, index) => index}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  // <View style={{ flex:1}}>
                  <View style={styles.carddv}>
                    <View style={{ flex: 2 }}>
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
                  // </View>
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
                  <View style={{ width: 100 }}>
                    <Image style={styles.search} source={item.image} />
                  </View>
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
  box1: {
    // flex: 1,
  },
  setdv: {
    height: 350,
    flexGrow: 1,
    backgroundColor: "blue"
  },
  manu: {
    flexDirection: "row",
    marginTop: 34,
  },
  logo: {
    width: 12,
    height: 12,
  },
  drop: {
    width: 10,
    height: 20,
    resizeMode: "contain"
  },
  menupng: {
    width: 14,
    height: 12,
    marginLeft: 16
  },
  home: {
    fontSize: 12,
    fontWeight: '500',
    color: "white",
    paddingLeft: 20,
  },
  cate: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  categores: {
    color: "#fffffd",
    fontSize: 14,
    fontWeight: '500',
  },
  box2: {
    flex: 4,
  },
  carddv: {
    flex: 1,
    backgroundColor: "#181a33",
    marginLeft: 7,
    marginTop: 10,
  },
  trending: {
    paddingLeft: 8,
    paddingTop: 4,
    color: "#fffffd",
    fontSize: 14,
    fontWeight: '500',
  },
  tile: {
    width: 90,
    height: 90,
    resizeMode: "contain"
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
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  live: {
    width: 65,
    height: 65,
    position: "absolute",
    right: 18,
    zIndex: 10,
    resizeMode: 'contain'
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
    color: "#fffffd",
    fontSize: 14,
    fontWeight: '500',
  },
  search: {
    height: 100,
    width: "80%",
    resizeMode: "stretch",
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
    color: "#fffffd",
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 12,
  }
})
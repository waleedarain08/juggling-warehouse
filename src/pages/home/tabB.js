import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export function TabB({ navigation }) {
  const [reason4, setReason4] = useState([{ title: "abc", image: require('../../assets/01-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/02-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/03-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/01-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/02-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/03-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/01-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/02-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/03-tile.png'), image1: require('../../assets/downloadded.png') }]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.down}>Downloads</Text>
      </View>
      <View>
        <Image style={styles.search} source={require('../../assets/search.png')} />
        <Input style={styles.vlogers} placeholder="Vlogers" />
      </View>
        <FlatList
          keyExtractor={(item, index) => index}
          data={reason4}
          vertical={true}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
                <View style={styles.card}>
                  <View style={{ flex: 1 ,flexWrap:"wrap"}}>
                    <Image style={styles.tile} source={item.image} />
                  </View>
                  <View style={{ flex: 3 }}>
                    <Text style={styles.about}>About Motivation <Text style={styles.epi}>Episode 1</Text> </Text>
                    <Text style={styles.may}>23 May 2019</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Image style={styles.downpng} source={item.image1} />
                  </View>
                </View>
            )
          }}>
        </FlatList>
        <View style={{height:70,}}></View>

    </View>
  );
}

export function TabBDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tab B Details</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e101f",
    paddingHorizontal: 14,
    
  },
  down: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 26,
    paddingLeft: 6,
  },
  vlogers: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    height: 50,
    marginTop: 14,
    borderWidth: 1,
    borderColor: "#495058",
  },
  search: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 30,
    left: "85%",
  },
  tile: {
    width:60,
    height: 60,
    resizeMode:"cover"
  },
  card: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#171928",
    marginVertical: 8,
  },
  may: {
    color: "#a8a8aa",
    paddingLeft: 10,
    fontSize: 10,
  },
  about: {
    color: "#ffffff",
    paddingLeft: 12,
    paddingTop: 16,
    fontSize: 12,
  },
  epi: {
    color: "#717171",
  },
  downpng: {
    width: 30,
    height: 30,
    marginVertical: 10,
    marginLeft: 30,
    marginTop: 18,
  },
})

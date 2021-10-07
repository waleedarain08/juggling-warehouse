import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actions';
import { searchContent } from '../../redux/actions/content';



export default function search({ navigation }) {
    const dispatch = useDispatch()
    const searchContentArr = useSelector(state => state.content.searchContent)
    const [search, setSearch] = useState("");

    const onSearch = async (text) => {
        setSearch(text)
        const result =  dispatch(searchContent(text))
    }

    console.log("searchContent", searchContentArr)
    return (
        <View style={styles.container}>
            {/* <View style={styles.searchbar}>
                <Text style={styles.serc}>Search</Text>
            </View> */}
            <View>
                <SearchBar
                    platform="ios"
                    placeholder="Enter keyword"
                    placeholderTextColor="#fff"
                    searchIcon={{ iconStyle: { color: "#fff" } }}
                    inputStyle={{ color: "#fff", fontSize: 12 }}
                    containerStyle={{ backgroundColor: "#0e101f" }}
                    inputContainerStyle={{
                        backgroundColor: "#0e101f", shadowColor: "#aeaeae",
                        shadowOffset: {
                            width: 0.5,
                            height: 0.5,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 1.12,
                        elevation: 6
                    }}
                    onChangeText={onSearch}
                    value={search}
                    // onCancel={() => setSearch('')}
                />
            </View>

            {searchContentArr.length <= 0 ? <View style={{flex: 1 ,justifyContent: 'center', alignItems: 'center', bottom: 25}}>
                <Image source={require('../../assets/searchplaceholder.png')} style={{bottom: 10}} />
                <View style={{paddingVertical: 10, flexDirection: 'row'}}>
                    <Text style={{color: "#fff", fontSize: 20, fontWeight: 'bold'}}>Search what you love to watch!</Text>
                    {/* <Image source={require('../../assets/04.png')} style={{height: 30, width: 30, marginHorizontal:10}} /> */}
                </View>
            </View>
            :
            <FlatList
              keyExtractor={(item, index) => index}
              data={searchContentArr}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                  console.log('searchContent item._source', item._source)
                return (
                  <TouchableOpacity  onPress={() => navigation.navigate("AboutMotivation", {data: item._source})}>
                      <Image style={styles.search} source={{uri: item._source.contentImage.url}} />
                  </TouchableOpacity>
                )
              }}/>}
        </View>
    );
}

// export function TabBDetails() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Tab B Details</Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e101f",
        paddingHorizontal: 10
    },
    searchbar: {
        paddingHorizontal: 8,
        paddingVertical: 25,
    },
    serc: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
    },
    logo: {
        width: 18,
        height: 18,
        position: "absolute",
        top: 22,
        left: "85%",
    },
    vlogers: {
        paddingTop: 12,
        paddingLeft: 15,
        paddingBottom: 12,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#495058",
        fontSize: 12,
        color: "white"
    },
    volages: {
        paddingHorizontal: 2,
        paddingVertical: 25,
    },
    textdv: {
        color: "#ffffff",
        paddingLeft: 6,
        fontWeight: "bold",
    },
    picture: {
        flexDirection: "row",
    },
    moviepng: {
        flex: 1,
        height: 130,
        resizeMode: "stretch",
        marginHorizontal: 6,
        marginVertical: 8,
    },
    programmer: {
    },
    search: {
        height: 110,
        width: 80,
        resizeMode: "cover",
        marginLeft: 10,
      },
})

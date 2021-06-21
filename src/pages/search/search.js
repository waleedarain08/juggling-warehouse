import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export default function search({ navigation }) {
    const [search, setSearch] = useState("");
    return (
        <View style={styles.container}>
            {/* <View style={styles.searchbar}>
                <Text style={styles.serc}>Search</Text>
            </View> */}
            <View>
                <SearchBar
                    platform="ios"
                    placeholder="Vlogers"
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
                    onChangeText={setSearch}
                    value={search}
                />
            </View>
            <View style={styles.volages}>
                <Text style={styles.textdv}>Volages</Text>
                <View style={styles.picture}>
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                </View>
            </View>
            <View style={styles.programmer}>
                <Text style={styles.textdv}>Programmers</Text>
                <View style={styles.picture}>
                    <Image style={styles.moviepng} source={require('../../assets/01-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/02-tile.png')} />
                    <Image style={styles.moviepng} source={require('../../assets/03-tile.png')} />
                </View>
            </View>
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
    }
})

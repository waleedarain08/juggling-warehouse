import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TextInput } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions';



export default function download({ navigation }) {
    const [reason4, setReason4] = useState([{ title: "abc", image: require('../../assets/01-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/02-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/03-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/01-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/02-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/03-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/01-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/02-tile.png'), image1: require('../../assets/downloadded.png') }, { title: "abc", image: require('../../assets/03-tile.png'), image1: require('../../assets/downloadded.png') }]);
    const [search, setSearch] = useState("");

    return (
        <View style={styles.container}>
            <View style={{ flex: 0.5 }}>
                <SearchBar
                    platform="ios"
                    placeholder="Vlogers"
                    placeholderTextColor="#fff"
                    searchIcon={{ iconStyle: { color: "#fff" } }}
                    inputStyle={{ color: "#fff", fontSize: 12,fontFamily:'Raleway-Regular' }}
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
            <View style={{ flex: 3.5 }}>
                {/* <FlatList
                    keyExtractor={(item, index) => index}
                    data={reason4}
                    vertical={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <View style={{ flex: 1, flexWrap: "wrap" }}>
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
                </FlatList> */}
                <SwipeListView
            data={reason4}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            renderItem={ ({item} ) => (
                <View style={styles.card}>
                <View style={{ flex: 1, flexWrap: "wrap" }}>
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
            )}
            renderHiddenItem={ (data, rowMap) => (
                <View style={styles.rowBack}>
                   
                </View>
            )}
            ListFooterComponent={()=> (
                <View style={{height: 100}}></View>
            )}
            // leftOpenValue={75}
            rightOpenValue={-75}
        />
            </View>
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
        fontFamily:'Raleway-Regular'
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
        width: 50,
        height: 60,
        resizeMode: "contain",
        marginLeft:6
    },
    card: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
        backgroundColor: "#171928",
        marginVertical: 8,
    },
    may: {
        color: "#a8a8aa",
        paddingLeft: 1,
        fontSize: 10,
    },
    about: {
        color: "#ffffff",
        paddingLeft: 1,
        paddingTop: 16,
        fontSize: 12,
        fontFamily:'Raleway-Regular'
    },
    epi: {
        color: "#717171",fontFamily:'Raleway-Regular'
    },
    downpng: {
        width: 30,
        height: 30,
        marginVertical: 10,
        marginLeft: 20,
        marginTop: 18,
    },
})

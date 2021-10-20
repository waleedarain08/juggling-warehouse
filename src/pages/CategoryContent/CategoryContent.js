import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { ContentCard } from '../../components/Card/contentCard';
import { TrendingCard } from '../../components/Card/trendingCard';
import Loader from '../../components/loader/loader';


export default function CategoryContent({ navigation, route }) {
    const [search, setSearch] = useState("");
    const [files, setFiles] = useState([]);

    const loading = useSelector(state => state.content.loading)
    const categoryContents = useSelector(state => state.content.categoryContents)

    useEffect(() => {
        if (route.params?.categoryName) {
            navigation.setOptions({ title: `Category: ${route.params?.categoryName}` })
   
        }
      }, [route.params?.categoryName]);

    const data =  [
        {
            "id": "k2fOcMV7tK76k4q0Ee3b",
            "user": {
                "id": "gjqHZ8v0ExScCa9dgR75YyNtC9Z2",
                "userName": "aikshk akhkf",
                "userProfile": "https://firebasestorage.googleapis.com/v0/b/jugglingwherehouse-126be.appspot.com/o/profiles%2Fpexels-photo-771742.jpeg?alt=media&token=bc5fc378-a53a-42fd-b2a4-2f8310acbf08"
            },
            "category": {
                "categoryName": "comedy",
                "id": "86xLrttAYTeVtUnobnPp"
            },
            "contentName": "The Bread",
            "contentDescription": "Short animated film of The Bread",
            "contentImage": {
                "url": "https://firebasestorage.googleapis.com/v0/b/jugglingwherehouse-126be.appspot.com/o/contentImages%2Fthe_bread.PNG?alt=media&token=ce2c62ec-9c78-48ea-a387-74e56b272667"
            },
            "contentFile": {
                "url": "https://firebasestorage.googleapis.com/v0/b/jugglingwherehouse-126be.appspot.com/o/contentFiles%2Fthe_bread.mp4?alt=media&token=fca2f59c-2381-49ac-bdf8-9115de6557b2"
            },
            "isTrending": false,
            "isRecommended": true,
            "contentTimeDuration": 3.4,
            "createdOnDate": 1632748627105
        },
        
      ]
    
  return (
    <View style={styles.container}>
        <Loader visible={loading} />
        {/* <FlatList 
            keyExtractor={(item, index) => index}
            data={[1,2,3,4,5,6,7,8,9,10, 11]}
            numColumns={3}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                return <ContentCard displayImage={data[0].contentImage.url} timeLength={data[0].contentTimeDuration} data={data[0]} navigation={navigation}/>
            }}
        /> */}
        <FlatList 
            style={{
                flex: 1,
            }}
            keyExtractor={(item, index) => index}
            data={categoryContents}
            numColumns={3}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
                return <ContentCard displayImage={item.contentImage.url} timeLength={item.contentTimeDuration} data={item} navigation={navigation}/>
            }}
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                   {!loading && <Text style={styles.emptyText}>
                        Content not found!
                    </Text>}
                </View>
            }
        />
        <View style={{height:60}}></View>
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
        flexGrow: 1,
        backgroundColor: "#0e101f",
        paddingHorizontal: 10
    },
    list: {
        height: 55
    },
    mylist:{
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        paddingTop: 26,
        paddingLeft: 6,
        fontFamily:'Raleway-Regular'
    },
    searchopt: {
        height: 68
    },
    vlogers: {
        paddingTop: 12,
        paddingLeft: 15,
        paddingBottom:12,
        marginTop:12,
        borderWidth:1,
        borderColor:"#495058",
        fontSize:12,
        color:"white",
        fontFamily:'Raleway-Regular'

    },
    search:{
        width:18,
        height:18,
        position:"absolute",
        top:25,
        left:"85%",
    },
    movie: {
        flexDirection:"row",
    },
    moviepng:{
        flex:1,
        height:130,
        resizeMode: "stretch",
        marginHorizontal:6,
        marginVertical:8,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "60%",
    },
    emptyText: {
        color: '#fff'
    }
})

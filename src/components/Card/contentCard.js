import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, } from 'react-native'

export const ContentCard = ({
    displayImage,
    timeLength = "1h 50m",
    data,
    navigation
}) => {

    return (
        <View style={styles.main}>
            <TouchableOpacity activeOpacity={.9} style={styles.displayImageContainer} onPress={() => navigation.navigate("AboutMotivation", { data: data })}>
                <Image style={styles.play01} resizeMode="contain" source={require('../../assets/play01.png')} />
                <Image style={styles.tile} source={{ uri: displayImage }} />
            </TouchableOpacity>
            <View style={styles.rowdv}>
                <View style={{ alignItems: "center" }}>
                    <Text numberOfLines={1} style={styles.worddv} >{data.contentName}</Text>
                </View> 

                <View style={{flexDirection: "row", alignItems: "center" }}>
                    <Image style={styles.mark} source={require('../../assets/ex-mark.png')} />
                    <View style={{ width: 5 }}></View>
                    <Text style={styles.worddv}>{timeLength} hrs</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#181a33",
        marginLeft: 10, 
        marginTop: 10,
    },
    play01:{
        width:20,
        height:20,
        position:"absolute",
        zIndex:1,
      },
    displayImageContainer: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    tile: {
        width: '100%',
        height: 110,
        resizeMode: "cover",
      },
    rowdv: {
        paddingHorizontal: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
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
        width: 65
      },
    dots: {
        // width: 30,
        height: 12,
      },
})

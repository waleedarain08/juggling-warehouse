import React from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'


export const TrendingCard = ({
    displayImage,
    timeLength="1h 50m",
    data,
    navigation
}) => {

    return (
        <View style={styles.carddv}>
          <TouchableOpacity activeOpacity={.9} onPress={() => navigation.navigate("AboutMotivation", {data: data})} style={{ flex: 2 }}>
          <Image style={styles.play01} source={require('../../assets/play01.png')} />
            <Image style={styles.tile} source={{uri :displayImage}} />
          </TouchableOpacity>
          <View style={styles.rowdv}>
            <View style={{ flex: 2, flexDirection: "row", alignItems: "center" }}>
              <Image style={styles.mark} source={require('../../assets/ex-mark.png')} />
              <View style={{ width: 5 }}></View>
              <Text style={styles.worddv}>{timeLength} hrs</Text>
            </View>
            {/* <TouchableOpacity activeOpacity={.9} onPress={() => alert('three dots')}>
                <Image style={styles.dots} source={require('../../assets/3-dots.png')} />
            </TouchableOpacity> */}
          </View>
        </View>
      )
}


const styles = StyleSheet.create({
    carddv: {
        flex: 1,
        backgroundColor: "#181a33",
        marginLeft: 10, marginTop: 10,
      },
    play01:{
        width:20,
        height:20,
        resizeMode:"contain",
        position:"absolute",
        zIndex:1,
        left:28,
        top:35,
      },
    tile: {
        width: 80,
        height: 90,
        resizeMode: "cover",
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
})
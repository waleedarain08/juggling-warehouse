import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Modal, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { userLogout } from '../redux/actions';
import { downloadFile } from '../../helper/downloadFile';



function DetailScreen({ navigation, state, route }) {

    const [reason, setReason] = useState([{ title: "abc", image: require('../../assets/01-tile.png') }, { title: "def", image: require('../../assets/02-tile.png') }, { title: "ghi", image: require('../../assets/03-tile.png') }, { title: "ghi", image: require('../../assets/01-tile.png') }, { title: "ghi", image: require('../../assets/02-tile.png') }, { title: "ghi", image: require('../../assets/03-tile.png') }]);
    const [modalVisible, setModalVisible] = useState(false);
    const [checked, setChecked] = useState(true);
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [data, setData] = useState(route.params ? route.params.data: {})

    const recommendedContent = useSelector((state) => state.content.recommendedContent)

    const handleCheckBox = (checkBox) => {
        setChecked(1);
        setChecked1(0);
        setChecked2(0);
    }

    const handleCheckBox1 = (checkBox) => {
        setChecked(0);
        setChecked1(1);
        setChecked2(0);
    }

    const handleCheckBox2 = (checkBox) => {
        setChecked(0);
        setChecked1(0);
        setChecked2(1);
    }

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:1,flexGrow:1}}>
                <View style={styles.box2}>
                    <Image
                        style={{ width: "100%", height: 200 }}
                        source={{uri: data.contentImage.url}} />
                </View>
                <View style={styles.box3}>
                    <View style={styles.downsec}>
                        <View style={{ flex: 3, }}>
                            <Text style={styles.motivation2}>{data.contentName}</Text></View>
                        <View style={{ flex: 1.5, alignItems: "flex-end", paddingLeft: 1, }}>
                            <Image style={styles.list} source={require('../../assets/list.png')} />
                        </View>
                        <View style={{ flex: 1, alignItems: "center", paddingLeft: 3, }}>
                            <Pressable onPress={() => downloadFile(data.contentFile.url)}>
                                <Image style={styles.download} source={require('../../assets/downloadicon.png')} />
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.rating}>
                        <Text style={styles.rats}>2021</Text>
                        <Image style={styles.star} source={require('../../assets/rating.png')} />
                        <Text style={styles.rats}>20.5</Text>
                        <Image style={styles.star} source={require('../../assets/loading.png')} />
                        <Text style={styles.rats}>{data.contentTimeDuration} hrs</Text>
                        <Text style={styles.hdsc}>HD</Text>
                    </View>
                </View>
                <View style={styles.box4}>
                    <Text style={styles.para}>{data.contentDescription}</Text>
                </View>
                <View  style={styles.box5}>
                <Image style={styles.play} source={require('../../assets/playicon.png')} />
                    <Button
                        onPress={() => navigation.navigate('Video', {url: data.contentFile.url})}
                        title="Watch Now"
                    />
                </View>
                <View style={styles.box6}>
                    <View style={styles.video}>
                        <Text style={styles.related}>Related Videos</Text>
                        <Text style={styles.viewall}>View All</Text>
                    </View>
                    <FlatList
                        keyExtractor={(item, index) => index}
                        data={recommendedContent}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ height: 100, width: 100 }}>
                                    <Image style={styles.tile} source={{uri: item.contentImage.url}}  />
                                </View>
                            )
                        }}>
                    </FlatList>
                </View>
                </View>
            </ScrollView>
            <View style={{height:30}}></View>
        </View>
    );
}



const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
};

export default connect(mapStateToProps)(DetailScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0e101f",
        paddingHorizontal: 10
    },
    box1: {
        flex: 1,
        // backgroundColor: "green",
    },
    back: {
        height: 17,
        width: 20,
    },
    about: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 25,
        paddingHorizontal: 14,
    },
    motivation: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily:'Raleway-Regular'
    },
    dots: {
        width: 4, height: 16,
    },
    box2: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap"
    },
    box3: {
        flex: 1.5,
        paddingTop: 10,
    },
    motivation2: {
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "bold",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 8,
        fontFamily:'Raleway-Regular',
        paddingTop:0
    },
    downsec: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    rating: {
        flexDirection: "row",
        paddingHorizontal: 3,
    },
    rats: {
        color: "#ffffff",
        paddingLeft: 6,
        paddingRight: 6,
        fontSize: 12,
    },
    hdsc: {
        color: "#ffffff",
        fontSize: 10,
        borderWidth: 1,
        borderColor: "#ffffff",fontFamily:'Raleway-Regular',
        padding:1.5

    },
    list: {
        width: 24,
        height: 24,
        marginTop: 10,
        resizeMode:"contain",
    },
    star: {
        width: 12,
        height: 12,
        marginTop: 2,
    },
    download: {
        width: 17,
        height: 17,
        marginVertical: 10,
        resizeMode:"contain",
    },
    box4: {
        // flex: 1,
        paddingVertical: 5,
        marginTop: 15
    },
    para: {
        color: "#ffffff",
        paddingHorizontal: 10,
        lineHeight:20,
    },
    box5: {
        // flex: 0.8,
        paddingTop: 12,
        // position:"relative",
    },
    play:{
        // position:"absolute",
        zIndex:1,
        height:10,width:10,
        left:"35%",
        top:"50%",
        resizeMode:"contain"
    },
    btn: {
        color: "#ffffff",
    },
    box6: {
        flex: 3,
        paddingTop: 10,
    },
    video: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 6,
        paddingVertical: 10
    },
    tile: {
        width: 85,
        height: 110,
        resizeMode: "cover",
        marginVertical: 6,
        marginHorizontal: 4,
    },
    related: {
        color: "#ffffff",
    },
    viewall: {
        color: "#1971b8",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0e101f90",

    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        // alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 8,
        elevation: 2,
        marginTop:10,
        // marginHorizontal:18
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
        marginHorizontal: 20,
        marginVertical:8
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        padding: 10,
    },
    modalText: {
        textAlign: "center",
        color: "#fff"
    },
    tick: {
        width: 15,
        height: 15,
        marginRight: 12,
    },
    soundgb: {
        paddingLeft: 44,
        color: "#b2b1b6",
        fontSize: 12,
    },
    hihtdv: {
        color: "#b2b1b6",
        fontSize: 12,
        fontFamily:'Raleway-Regular',
        paddingRight:5
    },
    rate: {
        color: "#b2b1b6",
        paddingLeft: 2,
        fontSize: 12,
    },
    popup: {
        width: 30,
        height: 33,
        marginLeft: 32,
        marginBottom: 8,
    },
    cancel:{
        marginLeft:"45%",
        top:22,
        zIndex:1
    },
    cancel02:{
        width: 10,
        height: 10,
        resizeMode:"contain",
    }
})

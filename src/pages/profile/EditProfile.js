import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Input, Button, Card, SearchBar } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions';


export default function EditProfile({ navigation }) {
    
    const dispatch = useDispatch()
    const userData = useSelector((state) => state.user.userData)

    console.log("userData.user", userData.user.email, typeof userData)
    
     const [toggleUser, setToggleUser] = useState(0)
     const [toggleUser1, setToggleUser1] = useState(0)
     const [toggleUser2, setToggleUser2] = useState(0)
     const [toggleUser3, setToggleUser3] = useState(0)
     const [toggleUser4, setToggleUser4] = useState(0)
     const [fullName, setFullName] = useState(userData.user ? userData.user.name : '')
     const [Email, setEmail] = useState(userData.user ? userData.user.email : '')
     const [Phone, setPhone] = useState('')
     const [Dob, setDob] = useState('')
     const [Address, setAddress] = useState('')


     const submit = () => {
        dispatch(updateProfile({fullName: fullName, email: Email, contact: Phone, dob: Dob, address: Address}))
     }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.backicon}>
                <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
                    <Image style={styles.back} source={require('../../assets/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.profilpage}>
                <Image style={styles.man} source={require('../../assets/02-tile.png')} />
                <Image style={styles.camera} source={require('../../assets/editcamera02.png')} />
            </View>
            <View style={styles.field}>
                <KeyboardAwareScrollView style={styles.MainContainer} showsVerticalScrollIndicator={false}>
                <View style={{height:Platform.OS==="ios"?540:"70%"}}>
                    <View>
                        <Image style={toggleUser?styles.userActive:styles.user} source={require('../../assets/nameicon.png')} />
                        <Input
                        inputContainerStyle={toggleUser?styles.emailActive:styles.borderdv}
                        onFocus={()=>setToggleUser(1)}
                        onBlur={()=>setToggleUser(0)}
                        style={styles.email}
                        labelStyle={styles.label}
                            label="Full Name"
                            placeholder='Donatella Nobatti'
                        onChangeText={(e) => setFullName(e)}
                        value={fullName}
                        />
                    </View>
                    <View>
                        <Image style={toggleUser1?styles.mailActive:styles.emailadd}  source={require('../../assets/mailIcon.png')} />
                        <Input
                            inputContainerStyle={toggleUser1?styles.emailActive:styles.borderdv}
                            onFocus={()=>setToggleUser1(1)}
                            onBlur={()=>setToggleUser1(0)}
                            style={styles.email}
                            labelStyle={styles.label}
                            label="Email Address"
                            placeholder='Donatella-Nobatti@gmail.com'
                            onChangeText={(e) => setEmail(e)}
                            value={Email}

                        />
                    </View>
                    <View>
                        <Image style={toggleUser2?styles.userActive:styles.user} source={require('../../assets/contactIcon.png')} />
                        <Input
                        inputContainerStyle={toggleUser2?styles.emailActive:styles.borderdv}
                           onFocus={()=>setToggleUser2(1)}
                           onBlur={()=>setToggleUser2(0)}
                        style={styles.email}
                        labelStyle={styles.label}
                            label="Phone Number"
                            placeholder='2545426532'
                        onChangeText={(e) => setPhone(e)}

                        />
                    </View>
                    <View>
                        <Image style={toggleUser3?styles.userActive:styles.user} source={require('../../assets/calendarIcon.png')} />
                        <Input
                        inputContainerStyle={toggleUser3?styles.emailActive:styles.borderdv}
                         onFocus={()=>setToggleUser3(1)}
                        onBlur={()=>setToggleUser3(0)}
                        style={styles.email}
                        labelStyle={styles.label}
                            label="Date of Birth"
                            placeholder='March 08,1987'
                        onChangeText={(e) => setDob(e)}

                        />
                    </View>
                    <View>
                    <Image style={toggleUser4?styles.userActive:styles.user} source={require('../../assets/adress.png')} />
                        <Input
                        inputContainerStyle={toggleUser4?styles.emailActive:styles.borderdv}
                         onFocus={()=>setToggleUser4(1)}
                         onBlur={()=>setToggleUser4(0)}
                        style={styles.email} 
                        labelStyle={styles.label}
                            label="Address"
                            placeholder='Boston,MA 02101'
                        onChangeText={(e) => setAddress(e)}

                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "center", paddingTop: 25 }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.CancelButton}
                        >
                            <Text style={styles.CancelButtonInside}>CANCEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.SaveButton}
                            onPress={submit}
                        >
                            <Text style={styles.SaveButtonInside}>SAVE</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                    <View style={{height:60}}></View>
                </KeyboardAwareScrollView>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0e101f'
    },
    back: {
        height: 17,
        width: 23, marginTop: 15,
    },
    MainContainer:{
        flex:1,
        flexGrow:1
    },
    backicon: {
        flex: 0.8,
        paddingLeft: "5%",
    },
    profilpage: {
        flex: 0.5,
        justifyContent: "center",
        alignItems: "center",
    },
    myprofile: {
        flexDirection: "row",
    },
    man: {
        width: 90,
        height: 90,
        borderRadius: 8,
        position: "relative",
    },
    camera: {
        width: 20,
        height: 20,
        resizeMode: "contain",
        position: "absolute",
        right: "38%",
        bottom:-22
    },
    logo02: {
        height: 15,
        width: 14,
        position: "absolute",
        top: 16,
        left: 20,
        resizeMode: "contain"
    },
    email: {
        paddingLeft: 35,
        fontSize: 12,
        color: "#57585d",
        color:"#fff"
    },
    emailActive: {
        borderBottomColor:"#1b74b8"
    },
    borderdv:{
        borderBottomColor:"#57585d"
    },
    emailadd: {
        width: 16,
        height: 14, resizeMode: "contain",
        position: "absolute",
        top: 28,
        left: 20,
    },
    user: {
        width: 13,
        height: 15,
        resizeMode: "contain",
        position: "absolute",
        top: 26,
        left: 20,
    },
    userActive: {
        width: 19,
        height: 21,
        resizeMode: "contain",
        position: "absolute",
        top: 26,
        left: 20,
        tintColor:"#1b74b8"
    },
    mailActive:{
        width: 18,
        height: 19, resizeMode: "contain",
        position: "absolute",
        top: 26,
        left: 20,
        tintColor:"#1b74b8"
    },
    field: {
        flex: 6,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: "#0d0f1c",
        marginTop: "15%",
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    label:{
        color:"#1b74b8",
        paddingLeft:35,
        fontSize:12
    },
    CancelButtonInside: {
        color: "#1974ba",
        fontWeight: "bold",
        fontSize: 12,
        fontFamily: 'Raleway-Regular'
    },
    CancelButton: {
        alignItems: "center",
        backgroundColor: "#fff",
        marginHorizontal: 10,
        borderRadius: 3,
        paddingVertical: 12,
        paddingHorizontal: 30,
    },
    SaveButtonInside: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 12,
        fontFamily: 'Raleway-Regular'
    },
    SaveButton: {
        alignItems: "center",
        backgroundColor: "#1974ba",
        marginHorizontal: 10,
        borderRadius: 3,
        paddingVertical: 12,
        paddingHorizontal: 40,
    },
})
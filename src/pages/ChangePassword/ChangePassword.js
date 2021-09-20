import { Text, View, StyleSheet, Image, ActivityIndicator, Alert,TouchableOpacity, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Input } from 'react-native-elements';
import auth from '@react-native-firebase/auth';



export default function ChangePassword({ navigation }) {
    // Ask signed in user for current password.
    const [currentPassword, setcurrentPassword] = useState(null);
    const [newPassword, setnewPassword] = useState(null);

    // ResetPassword = () => {
    //     const emailCred = auth.EmailAuthProvider.credential(
    //         auth().currentUser, currentPassword);
    //         auth().currentUser.reauthenticateWithCredential(emailCred)
    //         .then((msg) => {
    //             console.log(msg);
    //             return auth().currentUser.updatePassword(newPassword);
    //         })
    //     .catch((error) => {
    //       console.log(error)
    //     });
    // }

    reauthenticate = () => {
        var user = auth().currentUser;
        var cred = auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
      }

    changePassword = () => {
        reauthenticate().then(() => {
          var user = auth().currentUser;
          user.updatePassword(newPassword).then(() => {
            Alert.alert(
                "Congratulations!",
                "Password Updated Successfully.",
                [
                  { text: "OK", onPress: () => navigation.navigate("Home") }
                ]
              );
          }).catch((error) => { console.log(error); });
        }).catch((error) => { Alert.alert("Sorry!"," The password is invalid or the user does not have a password.") });
      }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.backicon}>
                <TouchableOpacity onPress={() => navigation.goBack()} hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}>
                    <Image style={styles.back} source={require('../../assets/back.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.juggling}>
                <Image style={styles.TitleLogo} source={require("../../assets/juggling.png")} />
            </View>
            <View style={{ flex: 2, paddingHorizontal: 30 }}>
                <Text style={styles.forgat}>Reset Password</Text>
                <View>
                    <Image style={styles.logo022} source={require('../../assets/lock.png')} />
                    <Input style={styles.email} onChangeText={(password) => setcurrentPassword(password)} placeholder="Current Password" secureTextEntry={true} />
                </View>
                <View>
                    <Image style={styles.logo022} source={require('../../assets/lock.png')} />
                    <Input style={styles.email} onChangeText={(password) => setnewPassword(password)} placeholder="New Password" secureTextEntry={true} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => changePassword()}
                    style={styles.LoginButton}
                >
                    <Text style={styles.LoginButtonInside}>CHANGE PASSWORD</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0e101f'
    },
    backicon: {
        flex: 0.5,
        paddingLeft: "5%",
    },
    back: {
        height: 17,
        width: 23, marginTop: 15
    },
    TitleLogo: {
        height: "80%",
        width: "70%",
        resizeMode: "contain"
    },
    juggling: {
        flex: 0.6,
        alignItems: "center",
    },
    forgat: {
        color: "#fff",
        textAlign: "center",
        paddingVertical: 15
    },
    logo022: {
        height: 13,
        width: 13,
        resizeMode: "contain",
        position: "absolute",
        top: 19,
        left: 20,

    },
    email: {
        paddingTop: 10,
        paddingLeft: 35,
        fontSize: 12,
        fontFamily: 'Raleway-Regular',
        color: "#fff",
    },
    message: {
        fontFamily: 'Raleway-Regular',
        color: "#fff",
        textAlign: "center",
        paddingHorizontal: 25,
        lineHeight: 20,
    },
    LoginButtonInside: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 12,
        fontFamily: 'Raleway-Regular'
    },
    LoginButton: {
        alignItems: "center",
        backgroundColor: "#1974ba",
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 3,
    },
})
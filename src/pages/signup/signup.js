import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

function Signup({ navigation, userInfo, userLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
             <KeyboardAwareScrollView style={styles.MainContainer}>
             <View style={{ height: 700 }}>
            <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={{flex:1}}> */}
                <View style={styles.box1}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.back} source={require('../../assets/back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.logo} source={require('../../assets/juggling.png')} />
                    <Text style={styles.logindv}>SignUp</Text>
                    <View style={styles.loginline}></View>
                </View>
                <View style={styles.box3}>
                    <View>
                        <Image style={styles.logo02} source={require('../../assets/user.png')} />
                        <Input style={styles.email} placeholder="First Name" />
                    </View>
                    <View>
                        <Image style={styles.logo02} source={require('../../assets/user.png')} />
                        <Input style={styles.password} placeholder="Last Name" />
                    </View>
                    <View>
                        <Image style={styles.logo022} source={require('../../assets/email.png')} />
                        <Input style={styles.email} placeholder="Email Address" />
                    </View>
                    <View>
                        <Image style={styles.logo02} source={require('../../assets/phone.png')} />
                        <Input style={styles.password} placeholder="Phone No." />
                    </View>
                    <View>
                        <Image style={styles.logo02} source={require('../../assets/lock.png')} />
                        <Input style={styles.email} placeholder="Password" secureTextEntry={true} />
                    </View>
                    <View>
                        <Image style={styles.logo02} source={require('../../assets/lock.png')} />
                        <Input style={styles.password} placeholder="Comfirm Password" secureTextEntry={true} />
                    </View>
                </View>
                <View style={styles.box4}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.LoginButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.LoginButtonInside}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.box5}>
                    <View style={styles.loginhere}>
                        <Text style={styles.account}> Already have an account</Text>
                        <Text onPress={() => navigation.goBack()} style={styles.singup}>LOGIN HERE</Text>
                    </View>
                    <View style={styles.line}>
                        <View style={styles.singupline}>
                        </View>
                    </View>
                </View>
                {/* </View> */}
            </ScrollView>
            </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
  
    );
}


const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0e101f'
    },
    container: {
        flexGrow:1,
    },
    logindv: {
        fontSize: 13,
        paddingTop: 30,
        fontWeight: 'bold',
        color: "white",
        borderBottomColor: "white",
        fontFamily:'Raleway-Regular'
    },
    loginline: {
        width: 24,
        height: 1,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom: 10,
    },
    logo: {
        height: 100,
        width: 200,
    },
    back: {
        height: 17,
        width: 23,

    },
    box1: {
        flex: .5,
        paddingLeft: "5%",
        paddingTop: "1%",
    },
    box2: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    email: {
        paddingTop: 12,
        paddingLeft: 35,
        fontSize: 12,
        fontFamily:'Raleway-Regular',
        color:"#fff"
    },
    box3: {
        flex: 3,
        paddingHorizontal: 27,
    },
    password: {
        paddingTop: 12,
        paddingLeft: 35,
        fontSize: 12,
        fontFamily:'Raleway-Regular',
        color:"#fff"
    },
    logo02: {
        height: 14,
        width: 10,
        position: "absolute",
        top: 16,
        left: 20,
    },
    logo022: {
        height: 13,
        width: 13,
        resizeMode:"contain",
        position: "absolute",
        top: 17,
        left: 18,
    },
    box4: {
        flex: 0.5,
        justifyContent:"center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1974ba",
        padding: 18,
        textAlign: "center",
        color: "#ffffff",
        marginLeft: 36,
        marginRight: 36,
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily:'Raleway-Regular'
    },
    LoginButtonInside: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 12,
        fontFamily:'Raleway-Regular'
    },
    LoginButton: {
        alignItems: "center",
        backgroundColor: "#1974ba",
        padding: 16,
        marginHorizontal: 40,
        borderRadius: 3,
    },
    box5: {
        flex: 1.2,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:8,
    },
    account: {
        textAlign: "center",
        color: "#dedee0",
        fontSize: 10,
        fontFamily:'Raleway-Regular'
    },
    singup: {
        textAlign: "center",
        color: "#1b73bd",
        fontWeight: 'bold',
        fontSize:12,
        fontFamily:'Raleway-Regular',
    },
    singupline: {
        width: 82,
        height: 2,
        backgroundColor: "#17619c",
    },
    loginhere: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    line: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    }

})

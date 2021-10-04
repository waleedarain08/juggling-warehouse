import { Text, TextInput, View, ActivityIndicator, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userRegister } from '../../redux/actions';
import Icon from 'react-native-vector-icons/Entypo';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { useForm, Controller } from "react-hook-form";
import auth from '@react-native-firebase/auth';



function Signup({ navigation, userInfo, userRegister }) {
    const { loading } = userInfo;
    const [isLoading, setIsLoading] = useState(false);
    const [hidePass1, setHidePass1] = useState(true);
    const [hidePass2, setHidePass2] = useState(true);
    const { control, handleSubmit, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    //  onPress={() => navigation.goBack()}

    const onSubmit = (data) => {
        setIsLoading(true);
        auth()
            .createUserWithEmailAndPassword(data.Email, data.Password, data.firstName, data.LastName, data.Phone)
            .then(async (res) => { 
                var userObj = {
                    "fullName": `${data.firstName} ${data.LastName}`,
                    "contact": data.Phone,
                    "email": data.Email,
                    "dob": "",
                    "profilePicture": "",
                    "address": {
                        "complete_address": "",
                        "country": "",
                        "state": "",
                        "city": "",
                        "zipcode": 0,
                        "latitude": 0,
                        "longitude": 0
                    }
                }
                setIsLoading(true);
                let token = await res.user.getIdToken()
                let { status } = await userRegister(userObj, token)
                console.log("status userRegister", status)
                if(status) {
                    navigation.navigate('Login')
                }
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setIsLoading(false);
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    setIsLoading(false);
                    alert('That email address is invalid!');
                }
                setIsLoading(false);
            });
    };
    console.log("loading", loading, "errors", errors)
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.box1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.back} source={require('../../assets/back.png')} />
                </TouchableOpacity>
            </View>
            <KeyboardAwareScrollView style={styles.MainContainer} showsVerticalScrollIndicator={false}>
                <View style={{ height: Platform.OS === "ios" ? 750 : "70%" }}>
                    <View style={styles.box2}>
                        <Image style={styles.logo} source={require('../../assets/juggling.png')} />
                        <Text style={styles.logindv}>SignUp</Text>
                        <View style={styles.loginline}></View>
                    </View>
                    <View style={styles.box3}>
                        <View>
                            <Image style={styles.logo02} source={require('../../assets/user.png')} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                    minLength:7,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input style={styles.email}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="First Name" />
                                )}
                                name="firstName"
                                defaultValue=""
                            />
                            {errors.firstName && <Text style={{ color: "#d73a49", paddingLeft: 10, bottom: 10 }}>Enter First Name</Text>}
                        </View>
                        <View>
                            <Image style={styles.logo02} source={require('../../assets/user.png')} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input style={styles.password}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Last Name" />
                                )}
                                name="LastName"
                                defaultValue=""
                            />
                            {errors.LastName && <Text style={{ color: "#d73a49", paddingLeft: 10, bottom: 10 }}>Enter Last Name</Text>}
                        </View>
                        <View>
                            <Image style={styles.logo022} source={require('../../assets/email.png')} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input style={styles.email}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        placeholder="Email Address" />
                                )}
                                name="Email"
                                defaultValue=""
                            />
                            {errors.Email && <Text style={{ color: "#d73a49", paddingLeft: 10, bottom: 10 }}>Enter Email</Text>}
                        </View>
                        <View>
                            <Image style={styles.logo02} source={require('../../assets/phone.png')} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input style={styles.password}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        keyboardType="phone-pad"
                                        placeholder="Phone No." />
                                )}
                                name="Phone"
                                defaultValue=""
                            />
                            {errors.Phone && <Text style={{ color: "#fff", paddingLeft: 10, bottom: 10 }}>Enter Phone No</Text>}
                        </View>
                        <View>

                            <Image style={styles.logo02} source={require('../../assets/lock.png')} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input style={styles.email}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        color="#fff"
                                        placeholder="Password"
                                        autoCompleteType="password"
                                        secureTextEntry={hidePass1 ? true : false} />
                                )}
                                name="Password"
                                defaultValue=""
                            />
                            {errors.Password && <Text style={{ color: "#d73a49", paddingLeft: 10, bottom: 10 }}>Enter Password</Text>}
                            <Icon style={styles.eyeicon}
                                name={hidePass1 ? 'eye-with-line' : 'eye'}
                                size={15}
                                color="#fff"
                                onPress={() => setHidePass1(!hidePass1)} />
                        </View>
                        <View >
                            <Image style={styles.logo02} source={require('../../assets/lock.png')} />
                            <Controller
                                control={control}
                                rules={{
                                    required: true,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Input style={styles.email}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                        color="#fff"
                                        placeholder="Confirm Password"
                                        autoCompleteType="password"
                                        secureTextEntry={hidePass2 ? true : false} />
                                )}
                                name="Password"
                                defaultValue=""
                            />
                            {errors.Password && <Text style={{ color: "#d73a49", paddingLeft: 10, bottom: 10 }}>Enter Confirm Password</Text>}

                            <Icon style={styles.eyeicon}
                                name={hidePass2 ? 'eye-with-line' : 'eye'}
                                size={15}
                                color="#fff"
                                onPress={() => setHidePass2(!hidePass2)} />
                        </View>
                    </View>
                    <View style={styles.box4}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.LoginButton}
                            // onPress={() => navigation.goBack()}
                            onPress={handleSubmit(onSubmit) }

                        >
                            {loading ? <ActivityIndicator size="small" color="#0000ff" /> : <Text style={styles.LoginButtonInside}>SIGN UP</Text>}
                            {/* <Text style={styles.LoginButtonInside}>SIGN UP</Text> */}
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box5}>
                        <View style={styles.loginhere}>
                            <Text style={styles.account}> Already have an account</Text>
                            <Text onPress={() => navigation.goBack()} style={styles.singup}>LOGIN HERE</Text>
                            <View style={styles.singupline}>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
}


const mapStateToProps = state => {
    return { 
        userInfo: state?.user,

    };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ userRegister }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#0e101f"
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#0e101f'
    },
    container: {
        flexGrow: 1,
    },
    logindv: {
        fontSize: 12,
        paddingTop: 30,
        fontWeight: 'bold',
        color: "white",
        borderBottomColor: "white",
    },
    loginline: {
        width: 22,
        height: 1,
        backgroundColor: "white",
        marginTop: 6,

    },
    logo: {
        height: 100,
        width: 200,
    },
    back: {
        height: 17,
        width: 23, marginTop: 15
    },
    box1: {
        flex: 0,
        paddingLeft: "5%",
    },
    box2: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center",
    },
    email: {
        paddingTop: 12,
        paddingLeft: 35,
        fontSize: 12,
        fontFamily: 'Raleway-Regular',
        color: "#fff"
    },
    box3: {
        flex: 0.6,
        paddingHorizontal: 27,
    },
    password: {
        paddingTop: 12,
        paddingLeft: 35,
        fontSize: 12,
        fontFamily: 'Raleway-Regular',
        color: "#fff"
    },
    logo02: {
        height: 15,
        width: 14,
        position: "absolute",
        top: 16,
        left: 20,
        resizeMode: "contain"
    },
    logo022: {
        height: 13,
        width: 13,
        resizeMode: "contain",
        position: "absolute",
        top: 17,
        left: 18,
    },
    box4: {
        flex: 0.1,
        justifyContent: "flex-start",
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
        fontFamily: 'Raleway-Regular'
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
        padding: 16,
        marginHorizontal: 40,
        borderRadius: 3,
    },
    box5: {
        flex: 0.09,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 8,
    },
    account: {
        textAlign: "center",
        color: "#dedee0",
        fontSize: 10,
        fontFamily: 'Raleway-Regular'
    },
    singup: {
        textAlign: "center",
        color: "#1b73bd",
        fontWeight: 'bold',
        fontSize: 12,
        fontFamily: 'Raleway-Regular',
    },
    singupline: {
        width: 75,
        height: 2,
        backgroundColor: "#17619c",
    },
    loginhere: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },

    eyeicon: {
        position: "absolute",
        left: "83%",
        bottom: "39%",
        paddingHorizontal: "6%",
        paddingVertical: "2%",
        backgroundColor: "#0e101f",
    },

})

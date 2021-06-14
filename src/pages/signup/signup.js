import { Text, View, StyleSheet, Image, TouchableOpacity,ScrollView,SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';

function Signup({navigation, userInfo, userLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
      <SafeAreaView style={{flex:1}}>
    <ScrollView contentContainerStyle={styles.container}>
                    <View onPress={()=>alert("hello")} style={styles.box1}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
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
                            <Input style={styles.email} placeholder="First Name"/>
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
            onPress={() => userLogin(username, password)}
          >
            <Text style={styles.LoginButtonInside}>LOGIN</Text>
          </TouchableOpacity>
                    </View>
                    <View style={styles.box5}>
                    <View style={styles.loginhere}>
                    <Text style={styles.account}> Already have an account</Text>
                        <Text onPress={()=>navigation.goBack()} style={styles.singup}>LOGIN HERE</Text>
                        </View>
                        <View style={styles.line}>
                            <View style={styles.singupline}>
                            </View>
                        </View>
                    </View>
            </ScrollView>
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
    container: {
        flex: 1,
        backgroundColor: "#0e101f",
    },
    logindv: {
        fontSize: 13,
        paddingTop: 30,
        fontWeight: 'bold',
        color: "white",
        borderBottomColor: "white",
    },
    loginline: {
        width: 24,
        height: 1,
        backgroundColor: "white",
        marginTop: 10,
        marginBottom:10,
    },
    logo: {
        height: "50%",
        width: "45%",
    },
    back: {
        height: 17,
        width: 23,

    },
    box1: {
        flex: .7,
        paddingLeft:"5%",
        paddingTop:"1%"
    },
    box2: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    email: {
        paddingTop: 30,
        paddingLeft: "18%",
        paddingBottom: 10,
    },
    box3: {
        flex: 5,
    },
    password: {
        paddingTop: 30,
        paddingLeft: "18%",
        paddingBottom: 10,
    },
    logo02: {
        height: 20,
        width: 15,
        position: "absolute",
        top: 31,
        left: 41,
    },
    logo022: {
        height: 16,
        width: 22,
        position: "absolute",
        top: 34,
        left: 36,
    },
    box4: {
        flex: 0.9,
        paddingBottom: 25,
        paddingTop: 25,
        backgroundColor:"red"
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
    },
    LoginButtonInside: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 12,
      },
    LoginButton: {
        alignItems: "center",
        backgroundColor: "#1974ba",
        padding: 16,
        marginHorizontal: 40,
        borderRadius: 3,
      },
    box5: {
        flex: 2,
        paddingVertical:20,
    },
    account: {
        textAlign: "center",
        color: "#dedee0",
        fontSize: 18,
    },
    singup: {
        textAlign: "center",
        color: "#1b73bd",
        fontWeight: 'bold',
    },
    singupline: {
        width: 82,
        height: 2,
        backgroundColor: "#17619c",
    },
    loginhere:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
    },
    line:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
    }

})

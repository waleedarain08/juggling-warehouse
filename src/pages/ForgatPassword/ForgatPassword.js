import { Text, View, StyleSheet,Alert,ActivityIndicator, Image, TouchableOpacity, KeyboardAvoidingView, Platform,SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import { Input, } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import auth from '@react-native-firebase/auth';





function ForgatPassword({ navigation, userInfo, userLogin }) {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState(null);

    recoverPassword = () => {
        setIsLoading(true);
        auth().sendPasswordResetEmail(email).then((userCredential) => {
            setIsLoading(false);
            navigation.navigate('Login');
          })
          .catch(error => {
            if (error.code === 'auth/user-not-found') {
              setIsLoading(false);
              Alert.alert('Sorry','That email address is already in use!');
            }
    
            if (error.code === 'auth/invalid-email') {
              setIsLoading(false);
              Alert.alert('Sorry','That email address is invalid!');
            }
            setIsLoading(false);
            console.error(error);
          });
    }
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.backicon}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.back} source={require('../../assets/back.png')} />
              </TouchableOpacity>
              </View>
              <View style={styles.juggling}>
              <Image style={styles.TitleLogo} source={require("../../assets/juggling.png")} />
              </View>
              <View style={{flex:2,paddingHorizontal:30}}>
              <Text style={styles.forgat}>Forget Password</Text>
              <View>
                        <Image style={styles.logo022} source={require('../../assets/email.png')} />
                        <Input style={styles.email} onChangeText={(email)=> setEmail(email)} placeholder="Email Address" />
             </View>
             <Text style={styles.message}>A message will be sent to your address with further instructions</Text>
             <TouchableOpacity
             onPress={()=>recoverPassword()}
            activeOpacity={0.8}
            style={styles.LoginButton}>
                {isLoading ?<ActivityIndicator size="small" color="#0000ff" /> :<Text style={styles.LoginButtonInside}>RECOVER PASSWORD</Text>}
            
          </TouchableOpacity>
             </View>
        </SafeAreaView>
    )
}

const mapStateToProps = state => {
    return { userInfo: state?.userInfo };
  };
  
  const mapDispatchToProps = dispatch =>
    bindActionCreators({ userLogin }, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(ForgatPassword);


  const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#0e101f'
    },
    backicon:{
        flex:0.5,
        paddingLeft: "5%",
    },
    back: {
        height: 17,
        width: 23,marginTop:15
    },
    TitleLogo: {
        height: "50%",
        width: "66%",
        resizeMode: "contain"
      },
      juggling:{
          flex:1,
          alignItems:"center",
      },
      forgat:{
          color:"#fff",
          textAlign:"center",
          paddingBottom:24
      },
      logo022: {
        height: 13,
        width: 13,
        resizeMode:"contain",
        position: "absolute",
        top: 19,
        left: 20,
       
    },
    email: {
        paddingTop: 10,
        paddingLeft: 35,
        fontSize: 12,
        fontFamily:'Raleway-Regular',
        color:"#fff",
    },
    message:{
        fontFamily:'Raleway-Regular',
        color:"#fff",
        textAlign:"center",
        paddingHorizontal:25,
        lineHeight:20,
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
        marginVertical:25
    },
  })
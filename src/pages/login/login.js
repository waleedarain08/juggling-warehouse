import { Text, View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Input, CheckBox } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { userLogin } from '../../redux/actions';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

function Login({ navigation, userInfo, userLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(true);

 

  return (
    <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? "padding" : null} keyboardVerticalOffset={Platform.select({ ios: -250, android: -100 })}
      style={styles.MainContainer}>
      {/* <View style={{ height: 750 }}> */}
      <View style={styles.LogoContainer}>
        <Image style={styles.TitleLogo} source={require("../../assets/juggling.png")} />
      </View>

      <View style={styles.LoginText}>
        <Text style={styles.Login1}>Login</Text>
        <View style={styles.LoginLine}></View>
      </View>

      <View style={styles.Inputs}>
        <View>
          <Image style={styles.InputLogo} source={require("../../assets/user.png")} />
          <Input style={styles.TextField} placeholder="Email Address" />
        </View>
        <View>
          <Image style={styles.InputLogo} source={require("../../assets/lock.png")} />
          <Input style={styles.TextField} placeholder="Password" secureTextEntry={true} />
        </View>
      </View>

      <View style={styles.CheckBoxField}>
        <View style={styles.remeberview}>
          <CheckBox
            center
            size={20}
            containerStyle={{ position: "absolute", padding: 0, top: -7 }}
            checked={checked}
            onPress={() => setChecked(!checked)}
          />
          <Text style={styles.remember}>Remember</Text>
        </View>
        <View style={styles.forgetview}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("ForgatPassword")}>
          <Text style={styles.forgettext}>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.LoginButtonContainer}>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.LoginButton}
            onPress={() => userLogin(username, password)}
          >
            <Text style={styles.LoginButtonInside}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.orLoginContainer}>
        <View style={styles.linedv}></View>
        <Text style={{ paddingHorizontal: "1.5%", color: "#87888F", fontSize: 12, fontFamily: 'Raleway-Regular' }}>Or Login with</Text>
        <View style={styles.linedv}></View>
      </View>
      <View style={styles.SocialButtons}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Buttonfb}>
          <Image style={styles.logo40} source={require("../../assets/facebook.png")} />
          <Text style={styles.ButtonInfb}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.Buttongoogle}>
          <Image style={styles.logo50} source={require("../../assets/google.png")} />
          <Text style={styles.ButtonIngoogle}>GOOGLE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.AccountContainer}>

        <View style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}>
          <Text style={styles.account}>If you don't have an account</Text>
          <Text onPress={() => navigation.navigate("Signup")} style={styles.singup}>SIGNUP HERE</Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
          <View style={styles.singupline}></View>
        </View>

      </View>
      {/* </View > */}
    </KeyboardAvoidingView>
  );
}


const mapStateToProps = state => {
  return { userInfo: state?.userInfo };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#0e101f",
    flex: 1,
  },

  LogoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "8%"
  },
  BackArrow: {
    height: 12,
    width: 14,
  },
  TitleLogo: {
    height: "50%",
    width: "70%",
    resizeMode: "contain"
  },
  fbbtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  LoginText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Login1: {
    fontSize: 13,
    fontFamily: 'Raleway-Regular',
    fontWeight: "bold",
    color: "white",
  },
  LoginLine: {
    width: 15,
    height: 1,
    backgroundColor: "white",
    marginTop: 5,
  },
  Inputs: {
    paddingHorizontal: 27,
    flex: 1.7,
    justifyContent: "center",
  },
  TextField: {
    paddingLeft: 35,
    paddingTop: 12,
    color: "white",
    fontSize: 12,
    fontFamily: 'Raleway-Regular'
  },

  InputLogo: {
    position: "absolute",
    top: 18,
    left: 20,
    height: 15,
    width: 15,
    resizeMode: "contain",
  },
  CheckBoxField: {

    flex: .5,
    flexDirection: "row",
    marginHorizontal: "7%",
    alignItems: "flex-start",
    justifyContent: "center",

  },
  remeberview: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
  },

  remember: {
    color: "#FFFFFF",
    fontSize: 11,
    flex: 1,
    fontFamily: 'Raleway-Regular',
    marginLeft: "20%"

  },
  tick: {
    width: 15,
    height: 15,
    flex: .3,
    resizeMode: "contain",

  },
  forgetview: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: "4%",
  },
  forgettext: {
    color: "#FFFFFF",
    fontSize: 11,
    fontFamily: 'Raleway-Regular'
  },
  LoginButtonContainer: {
    flex: .7,
  },
  LoginButton: {
    alignItems: "center",
    backgroundColor: "#1974ba",
    padding: 16,
    marginHorizontal: 40,
    borderRadius: 3,
  },
  LoginButtonInside: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: 'Raleway-Regular'
  },

  orLoginContainer: {

    flex: .5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "#A5A6AB",
  },
  linedv: {

    width: 25,
    backgroundColor: "#87888F",
    height: 1,
  },

  SocialButtons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 36
  },
  Buttonfb: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b5999",
    borderRadius: 3,
    marginHorizontal: 5,
    height: 50
  },
  Buttongoogle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 3,
    marginHorizontal: 5,
    height: 50
  },
  ButtonInfb: {
    fontSize: 12,
    color: "#ffffff",
    fontWeight: "bold",
    paddingLeft: 10,
    fontFamily: 'Raleway-Regular'
  },
  ButtonIngoogle: {

    fontSize: 12,
    color: "#818284",
    fontWeight: "bold",
    paddingLeft: 10,
    fontFamily: 'Raleway-Regular'
  },
  logo40: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },

  logo50: {
    height: 20,
    width: 20,
    resizeMode: "contain",
  },

  AccountContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  account: {
    textAlign: "center",
    color: "#FEFEFC",
    fontSize: 10,
    fontFamily: 'Raleway-Regular'
  },
  singup: {
    textAlign: "center",
    color: "#17619C",
    fontWeight: "bold",
    fontSize: 12,
    fontFamily: 'Raleway-Regular'
  },
  singupline: {
    width: 80,
    height: 1,
    backgroundColor: "#17619C"
  },

})

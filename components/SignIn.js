import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserFetch } from "../slice/userSlice";
export default function SignIn({ navigation }) {
  const role = useSelector((state) => state.role.role);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [radioBtn, SetRadioBtn] = useState(1);

  const handleSignIn = () => {
    if (email === "" || password === "") return alert("Please enter all fields");

    const signInData = {
      email,
      password: "Test@123",
      role,
      fcmToken: "123456",
    };
    // console.warn(signInData);
    dispatch(getUserFetch(signInData));
    // navigation.navigate(
    //   'Dashboard'
    // );
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
      <TouchableHighlight style={styles.backbtn} onPress={() => navigation.goBack()}>
        <View>
          <Image source={require("../assets/arrow-left.png")} style={{ position: "absolute" }} />
        </View>
      </TouchableHighlight>
      <Image source={require("../assets/logowhite.png")} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.signInTxt}>Sign In</Text>
        <View style={styles.emailSection}>
          <Image source={require("../assets/emailLogo.png")} style={styles.emaillogo} />
          <TextInput placeholder="Enter your Email" keyboardType="email-address" value={email} onChangeText={(txt) => setEmail(txt)} style={styles.email} />
        </View>
        <View style={styles.passwordSection}>
          <Image source={require("../assets/passwordLogo.png")} style={styles.passowordLogo} />
          <TextInput placeholder="Enter your Password" secureTextEntry value={password} onChangeText={(val) => setPassword(val)} style={styles.password} />
          <Image source={require("../assets/bxs_show.png")} style={styles.showIcon} />
        </View>

        <View style={styles.forgotBtnSection}>
          <TouchableOpacity
            onPress={() => {
              if (radioBtn == 1) {
                SetRadioBtn(2);
              } else {
                SetRadioBtn(1);
              }
            }}
          >
            <View style={styles.radioBtnSection}>
              <View style={styles.radiobtn}>{radioBtn == 2 ? <View style={styles.radiobtnbg}></View> : null}</View>

              <Text style={styles.rememberText}> Remember Me</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("forgotpswd")} style={styles.forgotBtn}>
            <Text style={styles.forgotbtnText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signInSection}>
          <TouchableOpacity onPress={handleSignIn} style={styles.signInBtn}>
            <Text style={styles.signInText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  backbtn: {
    position: "absolute",
    backgroundColor: "white",
    top: "5%",
    left: "8%",
    borderRadius: 20,
  },
  bgImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    width: 140,
    height: 140,
    alignSelf: "center",
    top: "5%",
  },
  inputContainer: {
    position: "absolute",
    top: "30%",
    width: "80%",
  },
  signInTxt: {
    color: "white",
    fontSize: 24,
    right: 10,
  },
  emailSection: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "row",
    top: "10%",
    right: 10,
    paddingLeft: 10,
    gap: 11,
    height: 50,
    borderRadius: 30,
  },
  emaillogo: {
    marginTop: 12,
    marginLeft: 10,
  },

  email: {
    fontSize: 16,
    fontWeight: "900",
  },
  passwordSection: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "row",
    top: "13%",
    right: 10,
    paddingLeft: 10,
    height: 50,
    borderRadius: 30,
  },
  passowordLogo: {
    marginTop: 12,
    marginLeft: 10,
  },
  password: {
    fontSize: 16,
    padding: 10,
    fontWeight: "900",
  },
  showIcon: {
    marginTop: 13,
    marginLeft: 60,
  },
  forgotBtnSection: {
    flex: 1,
    flexDirection: "row",
    top: "20%",
    right: 20,
  },
  radioBtnSection: {
    flex: 1,
    flexDirection: "row",
  },
  radiobtn: {
    height: 25,
    width: 25,
    borderColor: "white",
    borderRadius: 40,
    borderWidth: 2,
  },
  radiobtnbg: {
    backgroundColor: "white",
    height: 18,
    width: 18,
    borderRadius: 40,
    marginTop: 1,
    marginLeft: 1,
  },
  rememberText: {
    color: "white",
    marginLeft: 3,
  },
  forgotBtn: {
    marginLeft: 80,
  },
  forgotbtnText: {
    color: "white",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
  signInSection: {
    top: "100%",
  },
  signInBtn: {
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  signInText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

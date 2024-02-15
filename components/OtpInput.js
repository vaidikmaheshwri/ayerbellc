import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState, useRef } from "react";

export default function OtpInput({ navigation }) {
  const pin1ref = useRef(null);
  const pin2ref = useRef(null);
  const pin3ref = useRef(null);
  const pin4ref = useRef(null);
  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  return (
    <View style={styles.container}>
      <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
      <TouchableHighlight style={styles.backbtn} onPress={() => navigation.goBack()}>
        <View>
          <Image source={require("../assets/arrow-left.png")} style={{ position: "absolute" }} />
        </View>
      </TouchableHighlight>
      <Text style={styles.otpHeading}>Enter OTP</Text>
      <Text style={styles.otpTxt}>Enter 4 digit code sent to your email</Text>

      <View style={styles.inputContainer}>
        <View style={styles.otpView}>
          <View style={styles.inputView}>
            <TextInput
              ref={pin1ref}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => {
                setPin1(text);
                if (pin1 !== "") {
                  pin2ref.current.focus();
                }
              }}
            />
          </View>

          <View>
            <TextInput
              style={styles.inputView}
              ref={pin2ref}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => {
                setPin2(text);
                if (pin2 !== "") {
                  pin3ref.current.focus();
                }
              }}
            />
          </View>

          <View>
            <TextInput
              style={styles.inputView}
              ref={pin3ref}
              keyboardType="number-pad"
              onChangeText={(text) => {
                setPin3(text);
                if (pin3 !== "") {
                  pin4ref.current.focus();
                }
              }}
            />
          </View>

          <View>
            <TextInput
              style={styles.inputView}
              ref={pin4ref}
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={(text) => {
                setPin4(text);
              }}
            />
          </View>
        </View>
        <View style={styles.belowInputSection}>
          <Text style={styles.belowInputTxt}>Didn't receive code?</Text>
          <TouchableOpacity style={styles.belowInputBtn}>
            <Text style={styles.belowInputBtnTxt}>Request again</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.VerifySection}>
          <TouchableOpacity onPress={() => navigation.navigate('newPassword')} style={styles.VerifyBtn}>
            <Text style={styles.VerifyText}>Verify</Text>
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

  inputContainer: {
    position: "absolute",
    top: "40%",
    width: "80%",
  },
  otpHeading: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    bottom: "38%",
  },
  otpTxt: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 55,
    textAlign: "center",
    bottom: "20%",
  },
  otpView: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    marginHorizontal: 30,
  },
  inputView: {
    backgroundColor: "white",
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  belowInputSection: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 3,
    gap: 8,
  },
  belowInputTxt: {
    color: "white",
    fontSize: 18,
  },

  belowInputBtnTxt: {
    color: "white",
    fontSize: 18,
    textDecorationLine: "underline",
  },

  VerifySection: {
    top: "100%",
    width: "116%",
  },
  VerifyBtn: {
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
    right: 25,
  },
  VerifyText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

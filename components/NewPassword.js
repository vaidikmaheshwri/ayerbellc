import { View, Text, TextInput, TouchableOpacity, Image, Modal, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState } from "react";

export default function ({ navigation }) {
  const [modalvisible, setModalvisible] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={modalvisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={require("../assets/success.png")} style={styles.success} />
            <Text style={styles.modalText}>Password Succesfully Changed!</Text>
            <TouchableHighlight style={styles.modalBtn}
            onPress={()=>navigation.navigate('Dashboard')}>
              <Text style={styles.modalBtnText}>Continue</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
      <TouchableHighlight style={styles.backbtn} onPress={() => navigation.goBack()}>
        <View>
          <Image source={require("../assets/arrow-left.png")} style={{ position: "absolute" }} />
        </View>
      </TouchableHighlight>
      <Image source={require("../assets/logowhite.png")} style={styles.logo} />

      <View style={styles.inputContainer}>
        <Text style={styles.newPasswordTxt}>Create New Password</Text>

        <View style={styles.passwordSection}>
          <Image source={require("../assets/passwordLogo.png")} style={styles.passowordLogo} />
          <TextInput placeholder="Enter new Password" secureTextEntry value={password} onChangeText={(val) => setPassword(val)} style={styles.password} />
          <Image source={require("../assets/bxs_show.png")} style={styles.showIcon} />
        </View>
        <View style={styles.newpasswordSection}>
          <Image source={require("../assets/passwordLogo.png")} style={styles.passowordLogo} />
          <TextInput
            placeholder="Confirm new Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={(val) => setConfirmPassword(val)}
            style={styles.newpassword}
          />
          <Image source={require("../assets/bxs_show.png")} style={styles.showIcon2} />
        </View>

        <View style={styles.resetSection}>
          <TouchableOpacity onPress={() => setModalvisible(true)} style={styles.resetBtn}>
            <Text style={styles.resetText}>Reset Password </Text>
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
  centeredView:{
    height:"100%",
    width:"100%",
    
  
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
    
  },
  modalView: {
    height: 350,
    
    width: "90%",
    backgroundColor: "white",
    position: "absolute",
    right: 23,
    top: "20%",
    borderRadius: 46,
    flex: 1,
    flexDirection: "column",
  },
  success: {
    top: "20%",
    alignSelf: "center",
    height: 70,
    width: 70,
  },
  modalText: {
    fontWeight: "900",
    fontSize: 28,
    alignSelf: "center",
    top: "30%",
    textAlign: "center",
  },
  modalBtn: {
    height: 45,
    width: "90%",
    backgroundColor: "#32A1ED",
    top: "38%",
    alignSelf: "center",
    borderRadius: 8,
  },
  modalBtnText: {
    textAlign: "center",
    color: "white",
    paddingTop: 5,
    fontSize: 20,
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
  newPasswordTxt: {
    color: "white",
    fontSize: 25,
    right: 10,
    fontWeight: "bold",
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
    marginBottom: 20,
  },
  passowordLogo: {
    marginTop: 12,
    marginLeft: 10,
  },
  password: {
    fontSize: 18,
    padding: 10,
  },
  showIcon: {
    marginTop: 13,
    marginLeft: 60,
  },
  newpasswordSection: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "row",
    top: "13%",
    right: 10,
    paddingLeft: 10,
    height: 50,
    borderRadius: 30,
    marginBottom: 20,
  },
  newpassword: {
    fontSize: 18,
    padding: 10,
  },
  showIcon2: {
    marginTop: 13,
    marginLeft: 40,
  },

  resetSection: {
    top: "100%",
  },
  resetBtn: {
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  resetText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

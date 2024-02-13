import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from "react-native";
import React, { useState } from "react";

export default function ForgotPassword({navigation}){
    const [email, setEmail] = useState("");
    
   
    return (
      <View style={styles.container}>
        
        <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
        <TouchableHighlight style={styles.backbtn} 
        onPress={()=>navigation.goBack()}>
          <View><Image source={require( "../assets/arrow-left.png")} style={{position:"absolute"}}/></View>
        </TouchableHighlight>
        <Image source={require("../assets/logowhite.png")} style={styles.logo} />
  
        <View style={styles.inputContainer}>
          <Text style={styles.forgotHeading}>Forgot your password</Text>
          <Text style={styles.forgotTxt}>Enter your email address to change your password </Text>
          <View style={styles.emailSection}>
              <Image source={require('../assets/emailLogo.png')}
              style={styles.emaillogo}/>
          <TextInput 
          placeholder="Enter your Email" 
          keyboardType="email-address" 
          value={email} 
          onChangeText={(e) =>setEmail(e)} style={styles.email} />
          </View>
          
          
          
          <View style={styles.sendCodeSection}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('otpInput')}
            style={styles.sendCodeBtn}
            >
              <Text  style={styles.sendCodeText}>Send Code</Text>
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
      top:"5%",
      left:"8%",
      borderRadius:20
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
      top:"30%",
      width:'80%',
  
    },
    forgotHeading:{
      color:"white",
      fontSize:24,
      right:10,
    },
    forgotTxt:{
        color:'white',
        right:10,
        marginTop:10
    },
    emailSection:{
      backgroundColor:'#ffffff',
      flex:1,
      flexDirection:'row',
      top:"10%",
      right:10,
      paddingLeft:10,
      gap:11,
      height:50,
      borderRadius:30,
    },
    emaillogo:{
      marginTop:12,
      marginLeft:10,
    },
    email:{
      fontSize:18
    },
    
    sendCodeSection:{
      
      top:"100%",
      width:"116%"
      
    },
    sendCodeBtn:{
      backgroundColor: 'black',
      padding: 10,
      marginHorizontal: 8,
      borderRadius: 8,
      right:25
          
    },
    sendCodeText:{
      color:'white',
      textAlign:'center',
      fontWeight :'bold',
      fontSize:20
    },
  
  
  
  
  });
  

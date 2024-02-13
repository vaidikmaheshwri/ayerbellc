import { View, Text, Image,StyleSheet } from "react-native";
import React from "react";
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function Splash() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
      <Image source={require("../assets/logowhite.png")} style={styles.logo} />
      <Text style={styles.text}>AYERBE & ARNOLD, LLC</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bgImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  logo: {
    position: "absolute",
    width: 200,
    height: 200,
    alignSelf: "center",
    top: "40%",
  },
  text:{
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    bottom: 70,
  }
});

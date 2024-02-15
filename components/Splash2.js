import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SignIn from './SignIn';
import {useFonts} from 'expo-font';
export default function Splash2({navigation}) {
    const [fontsLoaded] = useFonts({
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Regular':require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Medium':require('../assets/fonts/Montserrat-Medium.ttf'),
        'Montserrat-Light':require('../assets/fonts/Montserrat-Light.ttf') 
    });
    if(!fontsLoaded) return undefined; // Avoid rendering new components without fonts loaded.
  return (
    <View style={styles.container} >
       <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
       <Image source={require("../assets/logowhite.png")} style={styles.logo} />
       <View style={styles.btnContainer}>
       <TouchableOpacity style={styles.btn1}
       onPress={()=>navigation.navigate('SignIn')}
       >
        <Text style={{color:'white', textAlign:'center',fontSize:20}}>Continue as Associate</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.btn2}
       onPress={()=>navigation.navigate('SignIn')}
       >
        <Text style={{color:'white', textAlign:'center',fontSize:20}}>Continue as Client</Text>
       </TouchableOpacity>
       </View>
       
    </View>
  )
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
      width: 160,
      height: 160,
      alignSelf: "center",
      top: "15%",
    },
    btnContainer:{
        paddingTop:"100%",
        width:"80%",
        position:'absolute',
        gap:30,
    },
    btn1:{

        backgroundColor: 'black',
        padding: 10,
        marginHorizontal: 8,
        borderRadius: 80,
        
        
    },
    btn2:{
        backgroundColor: 'black',
        padding: 10,
        marginHorizontal: 8,
        borderRadius: 80,
     

    }
    
  });
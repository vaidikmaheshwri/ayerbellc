import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SignIn from './SignIn';
import { useDispatch, useSelector } from 'react-redux';

  import { setUserRole } from '../slice/roleSlice';
export default function Splash2({navigation}) {
  const dispatch= useDispatch();
   const role = useSelector((state)=>state.role.role);
   function associateHandler(str){
    dispatch(setUserRole(str));
    navigation.navigate('SignIn');
   }
   function clientHandler(str){
    dispatch(setUserRole(str));
    navigation.navigate('SignIn');
   }

  return (
    <View style={styles.container} >
       <Image source={require("../assets/SplashScreen.png")} style={styles.bgImg} />
       <Image source={require("../assets/logowhite.png")} style={styles.logo} />
       <View style={styles.btnContainer}>
       <TouchableOpacity style={styles.btn1}
       onPress={()=>associateHandler('associate')}
       >
        <Text style={{color:'white', textAlign:'center',fontSize:20}}>Continue as Associate</Text>
       </TouchableOpacity>
       
       <TouchableOpacity style={styles.btn2}
       onPress={()=>clientHandler('client')}
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
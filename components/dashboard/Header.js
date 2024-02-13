import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight, Dimensions } from "react-native";
import React, { useState } from "react";

export default function Header({navigation}){
    return (
        <View   style={styles.container}> 
            <Text style={styles.title}>Dashboard</Text>
            <TouchableOpacity style={styles.user}>
            <Image source={require('../../assets/dashboardIcons/user.png')}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.notification}>
            <Image  source={require('../../assets/dashboardIcons/notification.png')}/>
            </TouchableOpacity>   
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        width: Dimensions.get('screen').width,
        height:115,
        top:-11,

        flexDirection:'row',
        justifyContent:'center',
        
          shadowColor: '#686868',
          shadowOpacity: .25,
          backgroundColor:'white',
          elevation: 5,
        
        
        
        
    },
    title:{
        top:'12%',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        left:20
    },
    user:{
        top:'12%',
        left:78,
        marginTop:9,
        width:22,
        height:22,
    },
    notification:{
        top:'12%',
        left:90,
        marginTop:5,
        width:22,
        height:22,
    }


})
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
export default function Header({ title, leftImg, rightImg, handleLeftPress, handleRightPress, }) {
    
    return (
      
      <View
        style={{
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth:0.1 ,
          borderBottomColor: "#686868",
          paddingRight: 20,
          paddingLeft: 20,
          backgroundColor: "white",
          shadowColor: "#686868", 
          shadowOffset: { width: 0, height: 2 }, 
          shadowOpacity: 0.25, 
          shadowRadius: 4, 
          elevation: 5, 
          marginBottom:2
        }}
      >
        <TouchableOpacity style={{ marginTop: 30 }} onPress={handleLeftPress}>
          <AntDesign name={leftImg} size={24} color="black" />
        </TouchableOpacity>
         {rightImg ? (<Text style={[{ fontWeight: "bold", fontSize: 20, marginTop: 30 }]}>{title}</Text>): 
        (<Text style={[{ fontWeight: "bold", fontSize: 20, marginTop: 30,marginLeft:-24 }]}>{title}</Text>)
         }
            <TouchableOpacity style={{ marginTop: 30 }} onPress={handleRightPress}>
                <AntDesign name={rightImg} size={24} color="black" />
              </TouchableOpacity>
        
        
      </View>
    
  );
}

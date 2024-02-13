import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight, SafeAreaView, ScrollView, Dimensions, FlatList } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function Footer({ navigation }) {
  return (
    <View style={{ width:"100%",padding:15,flexDirection: "row", position: "absolute" ,bottom:0,gap:30,backgroundColor:'white',}}>
      <TouchableHighlight >
        <View style={{ flexDirection: "column", alignItems:"center" ,marginLeft:15}} >
          <MaterialCommunityIcons name="home-outline" size={24} color="black"  />
          <Text> Home </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight  >
        <View style={{ flexDirection: "column", alignItems:"center" ,}}>
          <Feather name="alert-octagon" size={24} color="black" />
          <Text> Inquires </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight >
        <View style={{ flexDirection: "column", alignItems:"center" ,marginLeft:-10}}>
          <Image source={require("../assets/dashboardIcons/Ellipse50.png")} style={{ position: "relative" }} />
          <Image source={require("../assets/dashboardIcons/plus.png")} style={{ position: "absolute", padding: 12,marginTop:10,marginLeft:10, }} />
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={{ flexDirection: "column", alignItems:"center" ,}}>
          <MaterialIcons name="event" size={24} color="black" />
          <Text> Events</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight>
        <View style={{ flexDirection: "column", alignItems:"center" ,}}>
          <FontAwesome5 name="tasks" size={24} color="black" />
          <Text> Tasks </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

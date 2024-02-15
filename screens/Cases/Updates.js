import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";

const updateList = [
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
  {
    name: "Case 837 has been updated by the client",
    time: " 2 hours ago",
  },
];

export default function Updates() {
  return (
    <ScrollView style={{ backgroundColor: "white",flex:1, }}>
      <View style={{height:'auto',paddingBottom:20}}>
        {updateList.length ? (
          <FlatList
            style={{ top: 15,  }}
            data={updateList}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row" ,borderBottomWidth:1,borderColor:'rgba(205, 202, 202, 1)',paddingBottom:20,paddingTop:20,marginLeft:20,marginRight:20}}>
                <View style={{ paddingRight: 15, flexDirection: "column", gap: 4 }}>
                  <Image source={require("../../assets/update1.png")} style={{ width: 44, height: 50,top:10 }} />
                </View>
                <View style={{ width: "55%" ,gap:4}}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                  <Text style={{fontSize:14}}>{item.time}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.index}
          />
        ) : null}
      </View>
    </ScrollView>
  );
}

import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
const details = {
  name: "Richard Miller",
  image: require("../../assets/clientImage.png"),
  email: "robertomessi@gmail.com",
  status: "Active",
  phoneNumber: "+1-212-456-7890",
};
export default function ClientDetails() {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <View style={{ height: 200 }}>
        <View
          style={{
            backgroundColor: "rgba(228, 242, 255, 1)",
            width: "90%",
            borderWidth: 1.5,
            borderColor: "rgba(50, 161, 237, 0.29)",
            height: 180,
            top: 20,
            marginLeft: 18,
            borderRadius: 20,
            
          }}
        >
          <View style={{flexDirection:'column'}} >
            <View style={{flexDirection:'row' ,marginLeft:"65%",marginTop:"3%",gap:15}}>
              <TouchableOpacity>
                <MaterialIcons name="message" size={24} color="rgba(50, 161, 237, 1)" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="call" size={24} color="rgba(50, 161, 237, 1)" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="videocam" size={24} color="rgba(50, 161, 237, 1)" />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',marginTop:"1%",marginLeft:"2%"}}>
              <View>
                <Image source={details.image} style={{ width: 120, height: 120, borderRadius: 60 }} />
              </View>

              <View style={{ marginTop:"2.5%", marginLeft: 15 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>{details.name}</Text>
                <View style={{ flexDirection: "row", gap: 4, marginBottom: 10 }}>
                  <Image source={require("../../assets/darkemail.png")} style={{ top: 6 }} />
                  <Text>{details.email}</Text>
                </View>
                
                  <View style={{flexDirection:'row'}}>
                  <Text>Status: </Text>
                  <Text style={{color:'rgba(0, 160, 26, 1)',fontWeight:'bold'}}>{details.status}</Text>
                  </View>
                  
                
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

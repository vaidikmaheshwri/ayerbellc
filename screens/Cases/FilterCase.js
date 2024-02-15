import { View, Text,Image, TouchableOpacity } from 'react-native';
import React ,{useState}from 'react'

export default function FilterCase({navigation}) {
    const [activeCase, setActiveCase] = useState(1);
  return (
    <View style={{ backgroundColor: "white", paddingTop: 20, height: "100%" }}>
      <TouchableOpacity onPress={() => setActiveCase(2)}>
        <View style={{ flexDirection: "row", paddingLeft: 12 }}>
          <Image source={require("../../assets/activeCase.png")} style={{ width: 28, height: 30, marginRight: 14 }} />
          <Text style={{ fontSize: 18, top: 2, fontWeight: "bold" }}>Active Cases</Text>
          {activeCase == 2 ? (
            <View style={{ left: 200, top: 8, backgroundColor: "rgba(50, 161, 237, 1)", width: 19, height: 19, borderRadius: 3, borderWidth: 1.5 }}>
              <Image source={require("../../assets/right.png")} style={{ top: 3, left: 1 }} />
            </View>
          ) : (
            <Image source={require("../../assets/Rectangle.png")} style={{ left: 200, top: 8 }} />
          )}
        </View>
      </TouchableOpacity>
      <View style={{ borderColor: "rgba(205,202,202,1)", borderWidth: 0.5, width: "90%", marginHorizontal: "auto", marginLeft: 20, top: 10 }}></View>
      <TouchableOpacity onPress={() => setActiveCase(1)} style={{ marginTop: 25 }}>
        <View style={{ flexDirection: "row", paddingLeft: 12 }}>
          <Image source={require("../../assets/inactiveCase.png")} style={{ width: 28, height: 30, marginRight: 14 }} />
          <Text style={{ fontSize: 18, top: 2, fontWeight: "bold" }}>Inactive Cases</Text>
          {activeCase == 1 ? (
            <View style={{ left: 186, top: 8, backgroundColor: "rgba(50, 161, 237, 1)", width: 19, height: 19, borderRadius: 3, borderWidth: 1.5 }}>
              <Image source={require("../../assets/right.png")} style={{ top: 3, left: 1 }} />
            </View>
          ) : (
            <Image source={require("../../assets/Rectangle.png")} style={{ left: 186, top: 8 }} />
          )}
        </View>
      </TouchableOpacity>

      <View style={{ borderColor: "rgba(205,202,202,1)", borderWidth: 0.5, width: "90%", marginHorizontal: "auto", marginLeft: 20, top: 15 }}></View>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop:620,backgroundColor:'rgba(50, 161, 237, 1)',width:'90%',marginLeft:20,height:50,borderRadius:8}}>
        <Text style={{textAlign:'center',color:'white',paddingTop:6,fontSize:24,fontWeight:'bold'}}>Apply</Text>
      </TouchableOpacity>
    </View>
  )
}
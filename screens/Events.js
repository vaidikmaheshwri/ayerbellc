import { View, Text, ScrollView, TouchableOpacity,FlatList, } from "react-native";
import React, { useState } from "react";
import { Feather } from '@expo/vector-icons';
import Header from "../components/Header";
const alleventList=[
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },
  {
    name:'lorem epsum dolor consectetur',
    time: '8:00 am - 9:00 am'
  },

  
]
export default function Events({navigation}) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [showRightIcon, setShowRightIcon] = useState(false);
  function handleLeftPress() {
    navigation.navigate("Dashboard");
  }
  return (
    <>
    {
      showRightIcon ?(
      <Header title={"Events"} leftImg={"arrowleft"} rightImg={"calendar"} handleLeftPress={handleLeftPress}  />
      ):(
        <Header title={"Events"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress}  />
      )
    }
      
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: "5%", flexDirection: "row", width: "90%", marginLeft: "5%", }}>
          <TouchableOpacity
            onPress={() => {
              setIsCalendarOpen(true);
              setShowRightIcon(false);
            }}
            style={[{ width: "50%", borderColor: "#32A1ED", borderWidth: 1 ,height:50,borderTopLeftRadius:5,borderBottomLeftRadius:5,},isCalendarOpen ? {backgroundColor:"#32A1ED"}:{}]}
          >
            <Text style={[{color:'white',alignSelf:'center',fontSize:20, paddingTop:7},isCalendarOpen ? {}:{color:"#32A1ED"}]}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsCalendarOpen(false);
              setShowRightIcon(true);
            }}
            style={[{ width: "50%", borderColor: "#32A1ED", borderWidth: 1 ,height:50,borderTopRightRadius:5,borderBottomRightRadius:5},isCalendarOpen ? {}:{backgroundColor:"#32A1ED"}]}
          >
            <Text style={[{color:'white',alignSelf:'center',fontSize:20, paddingTop:7},isCalendarOpen ? {color:"#32A1ED"}:{}]}>Lists</Text>
          </TouchableOpacity>
        </View>
        <View>
          {isCalendarOpen ? (
            <View>
              <Text>Calendar open</Text>
            </View>
          ) : null}
        </View>

        <View style={{paddingBottom:20}}>
           
               {alleventList.length ? (
                <FlatList
                  style={{ top: 15, paddingLeft: 15 }}
                  data={alleventList}
    
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.push('EventDetails')}>
                      <View
                        style={{
                          flexDirection: "column",
                          height: 100,
                          width: 360,
                          gap: 10,
                          backgroundColor: "rgba(238, 238, 238, 1)",
                          borderRadius: 15,
                          marginHorizontal: 12,
                          marginBottom: 10,
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 16,
                            color: "rgba(104, 104, 104, 1)",
                            marginHorizontal: 20,
                            top: 20,
                          }}
                        >
                          {item.name}
                        </Text>
                        <View style={{top: 15,
                            marginLeft: 20,flexDirection:'row',gap:5}}>
                        <Feather name="clock" size={24} color="#32A1ED" />
                        <Text
                          style={{
                            fontSize: 12,
                            color: "rgba(104, 104, 104, 1)",
                            top:3
                          }}
                        >
                        {item.time}
                        </Text>
                        </View>
                        
                      </View>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item.index}
                />
              ) : null}
           
        </View>
      </ScrollView>
    </>
  );
}

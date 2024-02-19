import { View, Text, ScrollView, TextInput, Button, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "../components/Header";

import AntDesign from "@expo/vector-icons/AntDesign";
import CustomDropdown from "../components/CustomDropDown";
const cases = [
    {
      label: "Richard Miller Vs John",
      value: 2,
    },
    {
      label: "Richard Miller Vs John",
      value: 3,
    },
    {
      label: "Richard Miller Vs John",
      value: 4,
    },
    {
      label: "Richard Miller Vs John",
      value: 5,
    },
    {
      label: "Richard Miller Vs John",
      value: 6,
    },
    {
      label: "Richard Miller Vs John",
      value: 7,
    },
    {
      label: "Richard Miller Vs John",
      value: 8,
    },
    {
      label: "Richard Miller Vs John",
      value: 9,
    },
    {
      label: "Richard Miller Vs John",
      value: 10,
    },
  ];
export default function AddTask({navigation}) {
    const initialValues = {
        taskName: "",
        taskDescription: "",
      };
      const [taskData, settaskData] = useState(initialValues);
     

      function handleLeftPress() {
        navigation.navigate("Dashboard");
      }
    
      function handleChangeTxt(text, input) {
        setEventData((prevState) => ({ ...prevState, [input]: text }));
      }
  return (
    <>
      <Header title={"Add Task"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress} />
    
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: "5%" }}>
          <View style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 50, justifyContent: "center", borderRadius: 35 }, ,]}>
            <TextInput
              placeholder="Task Name*"
              onChangeText={(text) => handleChangeTxt(text, "taskName")}
              value={taskData.taskName}
              style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18 }]}
              placeholderTextColor="black"
            />
          </View>

          <View style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 160, borderRadius: 35, marginTop: "4%" }, ,]}>
            <TextInput
              placeholder="Task Description*"
              multiline
              editable
              onChangeText={(text) => handleChangeTxt(text, "taskDescription")}
              value={taskData.taskDescription}
              style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18, marginTop: "3", padding: "2%" }]}
              maxLength={200}
              placeholderTextColor="black"
            />
          </View>

       

         
          <CustomDropdown cases={cases} headingtxt={"Add Case*"}   />
          <CustomDropdown cases={cases} headingtxt={"Add Client"}  />

          <Pressable
          style={
            {
              backgroundColor: "#32A1ED",
              width: "90%",
              marginLeft: "5%",
              height: 50,
              justifyContent: "center",
              borderRadius: 8,
              marginTop: "4%",
              paddingRight: "2%",
              marginBottom:"2%"
            } }>
            <Text style={{color:'white', alignSelf:'center',fontSize:20,fontWeight:"bold"}}>Create Task</Text>
          </Pressable>
        </View> 
      </ScrollView>
    </>
  )
}
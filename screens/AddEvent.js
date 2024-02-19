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
export default function AddEvent({ navigation }) {
  const initialValues = {
    eventName: "",
    eventDescription: "",
  };
  const [eventData, setEventData] = useState(initialValues);
  const [selectedDate, setSelectedDate] = useState();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [timePickerVisible, setTimePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisible(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisible(false);
  };

  const handleConfirm1 = (date) => {
    setSelectedTime(date);
    hideTimePicker();
  };
  function handleLeftPress() {
    navigation.navigate("Dashboard");
  }

  function handleChangeTxt(text, input) {
    setEventData((prevState) => ({ ...prevState, [input]: text }));
  }

  return (
    <>
      <Header title={"Add Event"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress} />
      <DateTimePickerModal date={selectedTime} isVisible={timePickerVisible} mode="time" onConfirm={handleConfirm1} onCancel={hideTimePicker} />
      <DateTimePickerModal date={selectedDate} isVisible={datePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: "5%" }}>
          <View style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 50, justifyContent: "center", borderRadius: 35 }, ,]}>
            <TextInput
              placeholder="Event Name*"
              onChangeText={(text) => handleChangeTxt(text, "eventName")}
              value={eventData.eventName}
              style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18 }]}
              placeholderTextColor="black"
            />
          </View>

          <View style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 160, borderRadius: 35, marginTop: "4%" }, ,]}>
            <TextInput
              placeholder="Event Description*"
              multiline
              editable
              onChangeText={(text) => handleChangeTxt(text, "eventDescription")}
              value={eventData.eventDescription}
              style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18, marginTop: "3", padding: "2%" }]}
              maxLength={200}
              placeholderTextColor="black"
            />
          </View>

          <Pressable
            style={[
              {
                backgroundColor: "#EEEEEE",
                width: "90%",
                marginLeft: "5%",
                height: 50,
                justifyContent: "center",
                borderRadius: 35,
                marginTop: "4%",
                paddingRight: "2%",
              },
              ,
            ]}
            onPress={showDatePicker}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18 }]}>
                {selectedDate ? selectedDate.toLocaleDateString() : "Add Date*"}
              </Text>
              <AntDesign name="calendar" size={24} color="black" />
            </View>
          </Pressable>
          <Pressable
            style={[
              {
                backgroundColor: "#EEEEEE",
                width: "90%",
                marginLeft: "5%",
                height: 50,
                justifyContent: "center",
                borderRadius: 35,
                marginTop: "4%",
                paddingRight: "2%",
              },
              ,
            ]}
            onPress={showTimePicker}
          >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18 }]}>
                {selectedTime ? selectedTime.toLocaleTimeString() : "Add Time*"}
              </Text>

              <AntDesign name="clockcircleo" size={24} color="black" />
            </View>
          </Pressable>

         
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
            <Text style={{color:'white', alignSelf:'center',fontSize:20,fontWeight:"bold"}}>Create Event</Text>
          </Pressable>
        </View> 
      </ScrollView>
    </>
  );
}

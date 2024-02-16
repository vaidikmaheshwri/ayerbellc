import { View, Text, ScrollView, TextInput, Button, Pressable, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Header from "../components/Header";
import { AntDesign } from '@expo/vector-icons';
export default function AddEvent({ navigation }) {
  const initialValues = {
    eventName: "",
    eventDescription: "",

    eventTime: "",
    eventCase: "",
    eventClient: "",
  };
  const [eventData, setEventData] = useState(initialValues);
  const [selectedDate, setSelectedDate] = useState();
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState();
  const [datePickerVisible1, setDatePickerVisible1] = useState(false);
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
  const showDatePicker1 = () => {
    setDatePickerVisible1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisible1(false);
  };

  const handleConfirm1 = (date) => {
    setSelectedTime(date);
    hideDatePicker1();
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
      <DateTimePickerModal
            date={selectedTime}
            isVisible={datePickerVisible1}
            mode="time"
            onConfirm={handleConfirm1}
            onCancel={hideDatePicker1}
        /> 
        <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: "5%" }}>
          <View style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 50, justifyContent: "center", borderRadius: 35 }, ,]}>
            <TextInput
              placeholder="Event Name*"
              onChangeText={(text) => handleChangeTxt(text, "eventName")}
              value={eventData.eventName}
              style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18 }]}
              placeholderTextColor='black'
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
              placeholderTextColor='black'
            />
          </View>

          <Pressable
          style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 50, justifyContent: "center", borderRadius: 35, marginTop: "4%",paddingRight:"2%" }, ,]}
          onPress={showDatePicker}
          >
            <View style={{flexDirection:'row',justifyContent:'space-between'}}  >
              <Text style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18,  }]} >{selectedDate ? selectedDate.toLocaleDateString() : 'Add Date*'}</Text>
              <AntDesign name="calendar" size={24} color="black" />
            </View>
            
            
          </Pressable>
          <Pressable
          style={[{ backgroundColor: "#EEEEEE", width: "90%", marginLeft: "5%", height: 50, justifyContent: "center", borderRadius: 35, marginTop: "4%",paddingRight:"2%" }, ,]}
          onPress={showDatePicker1}
          >
            <View style={{flexDirection:'row',justifyContent:'space-between'}} >
              <Text style={[{ textAlignVertical: "center", paddingLeft: "4%", fontSize: 18,  }]} >{selectedTime ? selectedTime.toLocaleTimeString() : 'Add Time*'}</Text>
              
              <AntDesign name="clockcircleo" size={24} color="black" />
            </View>
            
            
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

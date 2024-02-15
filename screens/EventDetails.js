import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
const allEventDetails = {
  title: "Lorem ipsum consectetur.",
  time: "11:00 AM",
  date: "14 Jun,2023",
  pdf: "122344556",
  eventUser: "Richard Miller Vs John",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque, eros sed pharetra varius, ex purus consectetur urna, et ullamcorper arcu justo non diam. Pellentesque aliquet ultrices purus eu tempor. Suspendisse eu odio eget elit tempus malesuada sit amet at ipsum. ",
};
export default function EventDetails({navigation}) {
  function handleLeftPress() {
    navigation.navigate("Dashboard");
  }
  return (
    <>
      <Header title={"Event Details"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress} />
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <View style={{ width: "90%", alignSelf: "center", marginTop: "8%" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: "3%" }}>{allEventDetails.title}</Text>
          <View style={{ flexDirection: "row", marginBottom: "3%",gap:10  }}>
            <EvilIcons name="clock" size={24} color="black" />
            <Text style={{ fontWeight:20}}>{allEventDetails.time}</Text>
          </View>

          <Text style={{marginLeft:"10%",fontWeight:20,marginBottom: "3%" }}>{allEventDetails.date}</Text>
          <View style={{ flexDirection: "row", marginBottom: "3%",marginTop:"3%",gap:10  }}>
          <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={{ fontWeight:20}}>{allEventDetails.pdf}</Text>
          </View>
          <Text style={{marginLeft:"10%",fontWeight:20,marginBottom: "3%" }}>{allEventDetails.eventUser}</Text>
          <Text style={{fontWeight:20,marginBottom: "3%",width:"90%", }}>{allEventDetails.description}</Text>
        </View>
      </View>
    </>
  );
}

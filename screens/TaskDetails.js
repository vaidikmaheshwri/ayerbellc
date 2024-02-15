import { View, Text } from "react-native";
import React from "react";
import Header from "../components/Header";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
const allTaskDetails = {
  title: "Lorem ipsum consectetur.",
  
  pdf: "122344556",
  eventUser: "Richard Miller Vs John",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque, eros sed pharetra varius, ex purus consectetur urna, et ullamcorper arcu justo non diam. Pellentesque aliquet ultrices purus eu tempor. Suspendisse eu odio eget elit tempus malesuada sit amet at ipsum. ",
};
export default function TaskDetails({navigation}) {
  function handleLeftPress() {
    navigation.navigate("Dashboard");
  }
  return (
    <>
      <Header title={"Task Details"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress} />
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <View style={{ width: "90%", alignSelf: "center", marginTop: "8%" }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: "3%" }}>{allTaskDetails.title}</Text>
          

          
          <View style={{ flexDirection: "row", marginBottom: "3%",marginTop:"3%",gap:10  }}>
          <Ionicons name="document-text-outline" size={24} color="black" />
            <Text style={{ fontWeight:20}}>{allTaskDetails.pdf}</Text>
          </View>
          <Text style={{marginLeft:"10%",fontWeight:20,marginBottom: "3%" }}>{allTaskDetails.eventUser}</Text>
          <Text style={{fontWeight:20,marginBottom: "3%",width:"90%", }}>{allTaskDetails.description}</Text>
        </View>
      </View>
    </>
  );
}

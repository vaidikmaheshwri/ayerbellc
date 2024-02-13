import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, TouchableHighlight, SafeAreaView, ScrollView, Dimensions, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "../components/dashboard/Header";
import Footer from "../components/Footer";
const ScreenWidth = Dimensions.get("window").width;
const clientList = [
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
  {
    image: require("../assets/dashboardIcons/client.png"),
    name: "RD Richard",
  },
];
const EventList = [
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
  {
    eventTitle: "It is a long established fact that a reader distracted",
    eventDate: "14 Jun, 2023",
  },
];
const resentCasesList = [
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
  {
    caseTitle: "It is a long established fact that a reader distracted",
    caseId: 1234567890123456,
  },
];
const taskslist = [
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
  {
    taskTitle: "It is a long fact that reader distracted.",
    taskDescription: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
    taskDate: "14 Jun, 2023",
  },
];
export default function Dashboard({ navigation }) {
  const [txt, setTxt] = useState("");
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.searchSection}>
          <Image style={styles.searchIcon} source={require("../assets/dashboardIcons/search.png")} />
          <TextInput style={styles.searchTxt} placeholder="Search" onChangeText={(val) => setTxt(val)} />
        </View>
        {/* clients */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, left: 15 }}>Clients</Text>
            <TouchableOpacity>
              <Text style={{ color: "rgba(65, 172, 253, 1)", fontSize: 14, right: 20, top: 5 }}>View All</Text>
            </TouchableOpacity>
          </View>

          {clientList.length ? (
            <FlatList
              horizontal={true}
              style={{ top: 15, paddingLeft: 15 }}
              data={clientList.slice(0, 5)}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableHighlight>
                  <View style={{ paddingRight: 15, flexDirection: "column", height: 200, gap: 4 }}>
                    <Image source={item.image} style={{ width: 145, height: 145 }} />
                    <Text style={{ fontSize: 14 }}>{item.name}</Text>
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}
        </View>
        {/* Events */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, left: 15 }}>Resent Events</Text>
            <TouchableOpacity>
              <Text style={{ color: "rgba(65, 172, 253, 1)", fontSize: 14, right: 20, top: 5 }}>View All</Text>
            </TouchableOpacity>
          </View>
          {EventList.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15, height: 170 }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={EventList.slice(0,5)}
              renderItem={({ item }) => (
                <TouchableHighlight>
                  <View
                    style={{
                      flexDirection: "column",
                      height: 150,
                      width: 230,
                      gap: 3,
                      backgroundColor: "rgba(228, 242, 255, 1)",
                      borderRadius: 20,
                      borderWidth: 1.5,
                      borderColor: "rgba(50, 161, 237, 0.29)",
                      marginRight: 10,
                    }}
                  >
                    <Image source={require("../assets/dashboardIcons/calender.png")} style={{ width: 37, height: 37, margin: 10 }} />
                    <Text style={{ fontSize: 14, fontSize: 14, fontWeight: "bold", marginHorizontal: 10 }}>
                      {item.eventTitle.length > 120 ? item.eventTitle.slice(0, 120) + "..." : item.eventTitle}
                    </Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 10, gap: 7 }}>
                      <Image source={require("../assets/dashboardIcons/date.png")} />
                      <Text style={{ fontSize: 12 }}>{item.eventDate}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}
        </View>
        {/* Resent cases */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, left: 15 }}>Resent Cases</Text>
            <TouchableOpacity>
              <Text style={{ color: "rgba(65, 172, 253, 1)", fontSize: 14, right: 20, top: 5 }}>View All</Text>
            </TouchableOpacity>
          </View>
          {resentCasesList.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15 }}
              data={resentCasesList.slice(0, 4)}
              renderItem={({ item }) => (
                <TouchableHighlight>
                  <View
                    style={{
                      flexDirection: "column",
                      height: 100,
                      width: 360,
                      gap: 8,
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      borderRadius: 15,
                      marginHorizontal: 12,
                      marginBottom: 20,
                    }}
                  >
                    <Text style={{ fontSize: 16, color: "rgba(104, 104, 104, 1)", marginHorizontal: 20, top: 20 }}>
                      {item.caseTitle.length > 40 ? item.caseTitle.slice(0, 40) + "..." : item.caseTitle}
                    </Text>

                    <Text style={{ fontSize: 12, color: "rgba(104, 104, 104, 1)", top: 15, marginLeft: 20 }}>Case Id - {item.caseId}</Text>
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}
        </View>

        {/* Tasks */}
        <View>
          <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20, left: 15 }}>Tasks</Text>
            <TouchableOpacity>
              <Text style={{ color: "rgba(65, 172, 253, 1)", fontSize: 14, right: 20, top: 5 }}>View All</Text>
            </TouchableOpacity>
          </View>

          {taskslist.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15 }}
              data={taskslist.slice(0, 4)}
              renderItem={({ item }) => (
                <TouchableHighlight>
                  <View
                    style={{
                      flexDirection: "column",
                      height: 150,
                      width: 360,
                      gap: 3,
                      backgroundColor: "rgba(228, 242, 255, 1)",
                      borderRadius: 20,
                      borderWidth: 1.5,
                      borderColor: "rgba(50, 161, 237, 0.29)",
                      marginBottom: 20,
                      marginHorizontal: 9,
                    }}
                  >
                    <Text style={{ fontSize: 14, fontWeight: "bold", marginHorizontal: 10, paddingTop: 20 }}>
                      {item.taskTitle.length > 45 ? item.taskTitle.slice(0, 120) + "..." : item.taskTitle}
                    </Text>
                    <Text style={{ fontSize: 14, marginHorizontal: 10, paddingBottom: 10 }}>
                      {item.taskDescription.length > 150 ? item.taskDescription.slice(0, 150) + "..." : item.taskDescription}
                    </Text>
                    <View style={{ flexDirection: "row", marginHorizontal: 10, gap: 7 }}>
                      <Image source={require("../assets/dashboardIcons/date.png")} style={{ top: 3 }} />
                      <Text style={{ fontSize: 12 }}>{item.taskDate}</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}
        </View>
      </ScrollView>
    
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    zIndex: 10,
  },
  searchSection: {
    flexDirection: "row",
    left: 25,
    width: 360,
    height: 45,
    borderColor: "rgba(50, 161, 237, 1)",
    borderWidth: 1,
    borderRadius: 38,
    marginTop: 10,
  },
  searchIcon: {
    margin: 12,
    width: 18,
    height: 18,
  },
  searchTxt: {
    fontSize: 20,
  },
});

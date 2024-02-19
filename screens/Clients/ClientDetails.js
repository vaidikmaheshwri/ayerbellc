import { View, Text, ScrollView, TouchableOpacity, Image,FlatList,TouchableHighlight } from "react-native";
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
const casesList = [
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
export default function ClientDetails({navigation}) {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
    {/* client */}
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
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                marginLeft: "65%",
                marginTop: "3%",
                gap: 15,
              }}
            >
              <TouchableOpacity onPress={()=>navigation.navigate('chatScreen')}>
                <MaterialIcons
                  name="message"
                  size={24}
                  color="rgba(50, 161, 237, 1)"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="call" size={24} color="rgba(50, 161, 237, 1)" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="videocam"
                  size={24}
                  color="rgba(50, 161, 237, 1)"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: "1%",
                marginLeft: "2%",
              }}
            >
              <View>
                <Image
                  source={details.image}
                  style={{ width: 120, height: 120, borderRadius: 60 }}
                />
              </View>

              <View style={{ marginTop: "2.5%", marginLeft: 15 }}>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
                >
                  {details.name}
                </Text>
                <View
                  style={{ flexDirection: "row", gap: 4, marginBottom: 10 }}
                >
                  <Image
                    source={require("../../assets/darkemail.png")}
                    style={{ top: 6 }}
                  />
                  <Text>{details.email}</Text>
                </View>

                <View style={{ flexDirection: "row" }}>
                  <Text>Status: </Text>
                  <Text
                    style={{ color: "rgba(0, 160, 26, 1)", fontWeight: "bold" }}
                  >
                    {details.status}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
        {/* phone no */}
      <View
        style={{ marginTop: 20, flexDirection: "row", marginLeft: 14, gap: 9 }}
      >
        <Ionicons name="call" size={24} color="rgba(50, 161, 237, 1)" />
        <Text style={{ marginTop: 2 }}>{details.phoneNumber}</Text>
      </View>
{/* document */}
      <View style={{ marginTop: 20, marginLeft: 14 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>Documents</Text>
        <View></View>
        <TouchableOpacity
          style={{
            marginLeft: "26%",
            height: 52,
            width: "40%",
            borderWidth: 1.5,
            borderRadius: 8,
            borderColor: "#32A1ED",
          }}
        >
          <Text
            style={{
              color: "#32A1ED",
              fontSize: 20,
              alignSelf: "center",
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
        {/* case */}
      <View style={{ marginTop: 20,  }}>
        <Text style={{ fontWeight: "bold", fontSize: 18,paddingLeft:14 }}>Cases</Text>
        <View>
          {casesList.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 15 }}
              data={casesList.slice(0, 4)}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.push('CaseDetails')}>
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
                    <Text
                      style={{
                        fontSize: 16,
                        color: "rgba(104, 104, 104, 1)",
                        marginHorizontal: 20,
                        top: 20,
                      }}
                    >
                      {item.caseTitle.length > 40
                        ? item.caseTitle.slice(0, 40) + "..."
                        : item.caseTitle}
                    </Text>

                    <Text
                      style={{
                        fontSize: 12,
                        color: "rgba(104, 104, 104, 1)",
                        top: 15,
                        marginLeft: 20,
                      }}
                    >
                      Case Id - {item.caseId}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}

        </View>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Cases')}
          style={{
            marginLeft: "28%",
            height: 52,
            width: "40%",
            borderWidth: 1.5,
            borderRadius: 8,
            borderColor: "#32A1ED",
            marginTop:"3%",
            marginBottom:"3%"
          }}
        >
          <Text
            style={{
              color: "#32A1ED",
              fontSize: 20,
              alignSelf: "center",
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            View All
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

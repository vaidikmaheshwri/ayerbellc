import { View, Text ,TouchableOpacity,Image} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
const details = {
  title: "Richard vs John",
  caseId: "789260238",
  status: "Active",
};
const text = {
  text1: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
  text2: `The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content.`,
};
export default function CaseDetails({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      {/* client */}
      <View style={{ height: 180 }}>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            width: "90%",
            borderWidth: 1.5,
            borderColor: "rgba(238, 238, 238, 1)",
            height: 150,
            top: 20,
            marginLeft: 18,
            borderRadius: 20,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <View style={{ marginTop: "8%", marginLeft: "8%" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}
              >
                {details.title}
              </Text>
              <View style={{ flexDirection: "row", gap: 4, marginBottom: 10 }}>
                <Text>Case Id:</Text>
                <Text>{details.caseId}</Text>
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

      <View
        style={{ marginTop: "4%", width: "85%", alignSelf: "center", gap: 10 }}
      >
        <Text style={{textAlign:'justify', lineHeight:24}}>{text.text1}</Text>
        <Text style={{textAlign:'justify', lineHeight:24}}>{text.text2}</Text>
      </View>
      

      <View  style={{width:"90%",alignItems:'center',gap:10,marginTop:'5%'}}>
      
        <View style={{flexDirection:'row',marginLeft:"10%" ,gap:15}}>
          <TouchableOpacity onPress={() => navigation.navigate("Updates")}>
            <View
              style={{
                flexDirection: "row",
                height: 60,
                width: 170,
                
                backgroundColor: "rgba(228, 242, 255, 1)",
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: "rgba(50, 161, 237, 1)",
                
              }}
            >
              <Image
                source={require("../../assets/updates.png")}
                style={{ width: 30, height: 30, margin: 10 }}
              />

              <View
                style={{ flexDirection: "column", gap: -2 }}
              >
                <Text style={{ fontSize: 18, fontWeight:'bold',paddingTop:3 }}>12</Text>
                <Text style={{ fontSize: 16 }}>Updates</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Documents")}>
            <View
              style={{
                flexDirection: "row",
                height: 60,
                width: 170,
                
                backgroundColor: "rgba(228, 242, 255, 1)",
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: "rgba(50, 161, 237, 1)",
               
              }}
            >
              <Image
                source={require("../../assets/darkdocument.png")}
                style={{ width: 30, height: 30, margin: 10 }}
              />

              <View
                style={{ flexDirection: "coulmn", gap: -2 }}
              >
                <Text style={{ fontSize: 18,fontWeight:'bold',paddingTop:3 }}>12</Text>
                <Text style={{ fontSize: 16 }}>Documents</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      
      
        <View style={{flexDirection:'row',marginLeft:"10%",gap:15}}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                height: 60,
                width: 170,
                
                backgroundColor: "rgba(228, 242, 255, 1)",
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: "rgba(50, 161, 237, 1)",
                
              }}
            >
              <Image
                source={require("../../assets/clientTask.png")}
                style={{ width: 22, height: 30, margin: 10 }}
              />

              <View
                style={{ flexDirection: "column", gap: -2 }}
              >
                <Text style={{ fontSize: 18 ,fontWeight:'bold',paddingTop:3}}>12</Text>
                <Text style={{ fontSize: 16 }}>Client Tasks</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                height: 60,
                width: 170,
                
                backgroundColor: "rgba(228, 242, 255, 1)",
                borderRadius: 20,
                borderWidth: 1.5,
                borderColor: "rgba(50, 161, 237, 1)",
               
              }}
            >
              <Image
                source={require("../../assets/associate.png")}
                style={{ width: 30, height:30, margin: 10 }}
              />

              <View
                style={{ flexDirection: "coulmn",  gap: -2 }}
              >
                <Text style={{ fontSize: 18,fontWeight:'bold',paddingTop:3 }}>07</Text>
                <Text style={{ fontSize: 16 }}>Associates</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      
      </View>
      
    </ScrollView>
  );
}

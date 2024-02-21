import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Message = ({ text, isUser, time, userPhoto }) => {
  return (
    <View>
      {isUser ? (
        <View style={{ margin: "2%", marginLeft: "16%", flexDirection: "row", maxWidth: "80%", alignSelf: "flex-end", marginRight: "2%", gap: 4 }}>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#EEEEEE",
              borderColor: "#A1A1A1",
              borderWidth: 1.5,
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              padding: "2%",
              maxWidth:"75%"
            }}
          >
            {/* text and time */}
            <Text>{text}</Text>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="clockcircleo" size={12} color="#666" style={{ paddingTop: "1.5%", paddingRight: "2%" }} />
              <Text>{time}</Text>
            </View>
          </View>
          <Image source={userPhoto} style={{ width: 40, height: 40, borderRadius: 20, marginTop: "2%" }} />
        </View>
      ) : (
        <View>
          <View style={{ margin: "2%", flexDirection: "row", maxWidth: "80%", alignSelf: "flex-start", marginLeft: "2%", gap: 4 }}>
          <Image source={userPhoto} style={{ width: 40, height: 40, borderRadius: 20, marginTop: "2%" }} />
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#E4F2FF",
              borderColor: "#32A1ED",
              borderWidth: 1.5,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              borderBottomLeftRadius: 20,
              padding: "2%",
              maxWidth:"75%"
            }}
          >
            {/* text and time */}
            <Text>{text}</Text>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="clockcircleo" size={12} color="#666" style={{ paddingTop: "1.5%", paddingRight: "2%" }} />
              <Text>{time}</Text>
            </View>
          </View>
          
        </View>
        </View>
      )}
    </View>
    // <View style={{}}>
    //    <View style={[styles.container, ]}>

    //   <View style={styles.messageContent}>

    //     <View style={[styles.messageTextContainer,isUser ? styles.userContainer : styles.otherContainer]}>
    //       <Text style={styles.messageText}>{text}</Text>
    //       <View style={{flexDirection:'row'}}>
    //
    //       </View>

    //     </View>
    //     <Image source={userPhoto}  style={{width:40, height:40, borderRadius:20}}/>
    //   </View>
    // </View>

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
    marginLeft: "18%",
  },
  messageContent: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  userContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#EEEEEE",
    borderColor: "#A1A1A1",
    borderWidth: 1.5,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    marginRight: 10,
    padding: "2%",
  },
  otherContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#E4F2FF",
    borderColor: "#32A1ED",
    borderWidth: 1.5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },

  messageText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
    textAlign: "left",
  },
});

export default Message;

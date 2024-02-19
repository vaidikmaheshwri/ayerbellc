import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Message = ({ text, isUser, time, userPhoto }) => {
  return (
    <View style={{}}>
       <View style={[styles.container, isUser ? styles.userContainer : styles.otherContainer]}>
      
      <View style={styles.messageContent}>
        
        <View style={styles.messageTextContainer}>
          <Text style={styles.messageText}>{text}</Text>
          <View style={{flexDirection:'row'}}>
          <AntDesign name="clockcircleo" size={12} color="#666" style={{paddingTop:"2.5%",paddingRight:"2%"}} />
          <Text style={styles.timeText}>{time}</Text>
          </View>
          
        </View>
      </View>
    </View>
  
    
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "red",
    padding: 10,
    marginVertical: 5,
    maxWidth: "80%",
    marginLeft: "18%",
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
  messageContent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    
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

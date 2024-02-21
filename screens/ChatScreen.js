import React, { useState } from "react";
import { View, FlatList, TextInput, Button, StyleSheet, Pressable, Image } from "react-native";
import Message from "../components/Message";
import Header from "../components/Header";

const ChatScreen = ({ navigation }) => {


  
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const handleSend = () => {
    if (inputText.trim() !== "") {
      const newMessage = {
        id: messages.length.toString(),
        text: inputText,
        isUser: true, 
        time: getCurrentTime(),
        userPhoto: require("../assets/clientImage.png"), 
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };
  function handleLeftPress() {
    navigation.goBack();
  }
  return (
    <>
      <Header title={"Robert John"} leftImg={"arrowleft"} handleLeftPress={handleLeftPress} />
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <View >

              <Message text={item.text} isUser={item.isUser} time={item.time} userPhoto={item.userPhoto}  />
              {/* <Image source={require('../assets/clientImage.png')} style={{width:45, height:45, borderRadius:22.5}} /> */}
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.inputContainer}>
          <View>
            <TextInput style={styles.input} placeholder="Type here..." value={inputText} onChangeText={(text) => setInputText(text)} />
            <Pressable onPress={handleSend} style={{ position: "absolute", marginLeft: "84%", marginTop: "1%" }}>
              <Image source={require("../assets/send.png")} style={{ width: 40, height: 40 }} />
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  input: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 26,
    width: "90%",
    marginBottom: "5%",
    marginLeft: "5%",
    height: 50,
    fontSize: 18,
    paddingLeft: 15,
  },
});

export default ChatScreen;

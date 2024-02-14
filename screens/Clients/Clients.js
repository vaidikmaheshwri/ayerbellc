import { View, Text, FlatList, TouchableHighlight,Image } from "react-native";
import React from "react";

const ClientsList = [
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber:'+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
  {
    image: require("../../assets/clientImage.png"),
    name: "Richard Miller",
    email: "Robertomessi@gmail.com",
    phoneNumber: '+1-212-456-7890',
  },
];
export default function Clients({navigation}) {
  return (
    <View style={{backgroundColor:'white'}}>
      {ClientsList.length ? (
        <FlatList
          style={{ top: 30, paddingLeft: 24, marginHorizontal:'auto' }}
          data={ClientsList}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={()=>navigation.navigate('ClientDetails')}>
              <View style={{ 
                             backgroundColor:'rgba(238, 238, 238, 1)',
                             borderRadius:20,
                             
                             width:360,
                             height:180,
                             marginBottom:20,
                             flexDirection:'row'
                             }}>
                
                <View style={{width:100, height:100, borderRadius:50,margin:10,top:30}}>
                  <Image source={item.image} style={{ width: 100, height: 100,borderRadius:50 }} />
                 </View>
                 <View style={{top:40, marginLeft:15}}>
                   <Text style={{ fontSize:20,fontWeight:'bold',marginBottom:10 }}>{item.name}</Text>
                   <View style={{flexDirection:'row',gap:4,marginBottom:10}}>
                    <Image source={require('../../assets/email.png')} style={{top:6 }}/>
                   <Text>{item.email}</Text>
                    </View>
                    <View style={{flexDirection:'row',gap:7}}>
                    <Image source={require('../../assets/phoneNum.png')} style={{top:6,height:11,width:11 }}/>
                    <Text >{item.phoneNumber}</Text>
                    </View>
                   
                 </View>
                
              </View>
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.index}
        />
      ) : null}
    </View>
  );
}

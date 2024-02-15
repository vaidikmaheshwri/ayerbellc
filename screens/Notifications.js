import { View, Text,ScrollView,FlatList,Image,TouchableOpacity } from 'react-native'
import React from 'react'
const notificationList = [
    { 
      image:require('../assets/clientImage.png'),
      name: "Case 837 has been updated by the client",
      time: " 2 hours ago",
    },
    {
      image:require('../assets/clientImage.png'),
      name: "Case 837 has been updated by the client",
      time: " 2 hours ago",
    },
    {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
      {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
      {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
      {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
      {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
      {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
      {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      }, 
       {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      }, 
       {
        image:require('../assets/clientImage.png'),
        name: "Case 837 has been updated by the client",
        time: " 2 hours ago",
      },
  ];
export default function Notifications() {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{paddingBottom:20}}>
      {notificationList.length ? (
            <FlatList
              style={{ top: 15, paddingLeft: 20 }}
              data={notificationList}

              renderItem={({ item }) => (
                <TouchableOpacity >
                  <View
                    style={{
                      flexDirection: "row",
                      height: 100,
                      width: 360,
                      gap: 7,
                      backgroundColor: "rgba(238, 238, 238, 1)",
                      borderRadius: 15,
                      
                      marginBottom: 20,
                    }}
                  >
                    <View style={{marginTop:20,marginLeft:14,marginRight:10}}>
                        <Image source={item.image}  style={{width:50,height:50, borderRadius:25}}/>
                    </View>
                    <View style={{width:"70%",gap:10}}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 1)",
                        
                        top: 20,
                      }}
                    >
                      {item.name}
                    </Text>

                    <Text
                      style={{
                        fontSize: 14,
                        color: "rgba(104, 104, 104, 1)",
                        top: 15,
                        
                      }}
                    >
                      {item.time}
                    </Text>
                    </View>
                   
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.index}
            />
          ) : null}
      </View>
    </ScrollView>
  )
}
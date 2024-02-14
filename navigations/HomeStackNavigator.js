import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Inquiries from "../screens/Inquiries";
import Tasks from "../screens/Tasks";
import Events from "../screens/Events";
import TabModal from "../screens/TabModal";
import { useState } from "react";


const Tab = createBottomTabNavigator();

export default function HomeStackNavigator({route,navigation}) {
  
  const [tabModalOpen, setTabModalOpen] = useState(false);
  return (
    <>
      <Tab.Navigator
        screentOptions={{
          tabBarActiveTintColor: "rgba(50, 161, 237, 1)", 
        }}
      >
        <Tab.Group>
        <Tab.Screen
          name="Dashboard"
          component={ Dashboard }
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="home-outline" size={24} color={focused ? "rgba(50, 161, 237, 1)" : "black"} />,
            headerShown:true,
            headerTitle: "Dashboard",
          headerBackVisible: false,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerStyle: {
            shadowColor: "#686868",
            shadowOpacity: 0.25,
            backgroundColor: "white",
            elevation: 5,
          },
          headerRight: () => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginRight: 10,
              }}
            >
              <TouchableOpacity >
                <Image source={require("../assets/dashboardIcons/user.png")} styles={{}} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../assets/dashboardIcons/notification.png")} />
              </TouchableOpacity>
            </View>
          ),
            
          
          }}
        />
        <Tab.Screen
          name="Inquiries"
          component={Inquiries}
          options={{
            tabBarLabel: "Inquiries",
            tabBarIcon: ({ focused }) => <Feather name="alert-octagon" size={24} color={focused ? "rgba(50, 161, 237, 1)" : "black"} />,
            
          }}
        />
        <Tab.Screen
          name="modal"
          component={TabModal}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setTabModalOpen(true);
            },
          }}
          options={{
            tabBarLabel: "",
            tabBarIcon: () => (
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image source={require("../assets/dashboardIcons/Ellipse50.png")} style={{ position: "relative", height: 45, width: 45, marginTop: 18 }} />
                <Image source={require("../assets/dashboardIcons/plus.png")} style={{ position: "absolute", padding: 12, marginTop: 27, marginLeft: 10 }} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={Events}
          options={{
            tabBarLabel: "Events",
            tabBarIcon: ({ focused }) => <MaterialIcons name="event" size={24} color={focused ? "rgba(50, 161, 237, 1)" : "black"} />,
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarLabel: "Tasks",
            tabBarIcon: ({ focused }) => <FontAwesome5 name="tasks" size={24} color={focused ? "rgba(50, 161, 237, 1)" : "black"} />,
          }}
        />
       </Tab.Group>
 
      </Tab.Navigator>
    </>
  );
}

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
const Tab = createBottomTabNavigator();
export default function HomeStackNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: () => <MaterialCommunityIcons name="home-outline" size={24} color="black" />,
          headerShown: true,
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
                marginRight:10
              }}
            >
              <TouchableOpacity>
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
        name="inquiries"
        component={Inquiries}
        options={{
          tabBarLabel: "Inquiries",
          tabBarIcon: () => <Feather name="alert-octagon" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="modal"
        component={TabModal}
        
        options={{
            tabBarLabel: '',
          tabBarIcon: () => (
            <View style={{ flexDirection: "column", alignItems:"center" }}>
          <Image source={require("../assets/dashboardIcons/Ellipse50.png")} style={{ position: "relative",  height:45,width:45,marginTop:18 }} />
          <Image source={require("../assets/dashboardIcons/plus.png")} style={{ position: "absolute", padding: 12,marginTop:27,marginLeft:10, }} />
        </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: () => <MaterialIcons name="event" size={24} color="black" />,
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Tasks}
        options={{
          tabBarLabel: "Tasks",
          tabBarIcon: () => <FontAwesome5 name="tasks" size={24} color="black" />,
        }}
      />
    </Tab.Navigator>
  );
}

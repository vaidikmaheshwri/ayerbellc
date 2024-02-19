import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./HomeStackNavigator";
import { View, TouchableOpacity, Image } from "react-native";
import Inquiries from "../screens/Inquiries";
import Clients from "../screens/Clients/Clients";
import FilterClient from "../screens/Clients/FilterClient";
import ClientDetails from "../screens/Clients/ClientDetails";
import Cases from "../screens/Cases/Cases";
import FilterCase from "../screens/Cases/FilterCase";
import CaseDetails from "../screens/Cases/CaseDetails";
import Updates from "../screens/Cases/Updates";
import Documents from "../screens/Cases/Documents";
import Notifications from "../screens/Notifications";
import Profile from "../screens/Profile";
import EventDetails from "../screens/EventDetails";
import TaskDetails from "../screens/TaskDetails";
import AddTask from "../screens/AddTask";
import AddEvent from "../screens/AddEvent";
import ChatScreen from "../screens/ChatScreen";

const DashboardNativeStack = createNativeStackNavigator();

export default function DashboardStack({ navigation }) {
  return (
    <DashboardNativeStack.Navigator initialRouteName="Dashboard">
      <DashboardNativeStack.Group>
        <DashboardNativeStack.Screen
          name="Dashboard"
          component={HomeStackNavigator}
          options={{
            headerShown: false,
          }}
        />

        <DashboardNativeStack.Screen
          name="FilterClient"
          component={FilterClient}
          options={{
            headerShown: true,
            headerTitle: "Filter",

            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              shadowColor: "#686868",
              shadowOpacity: 0.25,
              backgroundColor: "white",
              elevation: 5,
              alignItems: "center",
            },
          }}
        />

        <DashboardNativeStack.Screen
          name="Clients"
          component={Clients}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "Clients",

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

                  marginRight: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.push("FilterClient")}
                >
                  <Image
                    source={require("../assets/filter.png")}
                    styles={{ marginTop: 10 }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <DashboardNativeStack.Screen
          name="ClientDetails"
          component={ClientDetails}
          options={{
            headerShown: true,
            headerTitle: "Client Details",

            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              shadowColor: "#686868",
              shadowOpacity: 0.25,
              backgroundColor: "white",
              elevation: 5,
              alignItems: "center",
            },
          }}
        />
        <DashboardNativeStack.Screen
          name="Cases"
          component={Cases}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "Cases",

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

                  marginRight: 10,
                }}
              >
                <TouchableOpacity onPress={() => navigation.push("FilterCase")}>
                  <Image
                    source={require("../assets/filter.png")}
                    styles={{ marginTop: 10 }}
                  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <DashboardNativeStack.Screen
          name="FilterCase"
          component={FilterCase}
          options={{
            headerShown: true,
            headerTitle: "Filter",

            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              shadowColor: "#686868",
              shadowOpacity: 0.25,
              backgroundColor: "white",
              elevation: 5,
              alignItems: "center",
            },
          }}
        />
        <DashboardNativeStack.Screen
          name="CaseDetails"
          component={CaseDetails}
          options={{
            headerShown: true,
            headerTitle: "Case Details",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              shadowColor: "#686868",
              shadowOpacity: 0.25,
              backgroundColor: "white",
              elevation: 5,
              alignItems: "center",
            },
          }}
        />
        <DashboardNativeStack.Screen
          name="Updates"
          component={Updates}
          options={{
            headerShown: true,
            headerTitle: "Updates",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              shadowColor: "#686868",
              shadowOpacity: 0.25,
              backgroundColor: "white",
              elevation: 5,
              alignItems: "center",
            },
          }}
        />
        <DashboardNativeStack.Screen
          name="Documents"
          component={Documents}
          options={({ navigation }) => ({
            headerShown: true,
            headerTitle: "Documents",

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

                  marginRight: 10,
                }}
              >
                <TouchableOpacity>
                  <View>
                    <Image
                      source={require("../assets/dashboardIcons/Ellipse50.png")}
                      style={{
                        position: "relative",
                        height: 40,
                        width: 40,
                        marginTop: 5,
                      }}
                    />
                    <Image
                      source={require("../assets/dashboardIcons/plus.png")}
                      style={{
                        position: "absolute",
                        padding: 12,
                        marginTop: 13,
                        marginLeft: 8,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <DashboardNativeStack.Screen
          name="notifications"
          component={Notifications}
          options={{
            headerShown: true,
            headerTitle: "Notification",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerStyle: {
              shadowColor: "#686868",
              shadowOpacity: 0.25,
              backgroundColor: "white",
              elevation: 5,
              alignItems: "center",
            },
          }}
        />
        <DashboardNativeStack.Screen
          name="profile"
          component={Profile}
          options={{
            headerShown:false,
          }}
        />
        <DashboardNativeStack.Screen
          name="EventDetails"
          component={EventDetails}
          options={{
            headerShown:false,
          }}
        />
        <DashboardNativeStack.Screen
          name="TaskDetails"
          component={TaskDetails}
          options={{
            headerShown:false,
          }}
        />
        <DashboardNativeStack.Screen
          name="AddEvent"
          component={AddEvent}
          options={{
            headerShown:false,
          }}
        />
        <DashboardNativeStack.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerShown:false,
          }}
        />
        <DashboardNativeStack.Screen
          name="chatScreen"
          component={ChatScreen}
          options={{
            headerShown:false,
          }}
        />
        
      </DashboardNativeStack.Group>
    </DashboardNativeStack.Navigator>
  );
}

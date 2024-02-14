import "react-native-gesture-handler";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStackNavigator from "./HomeStackNavigator";
import { View, TouchableOpacity, Image } from "react-native";
import Inquiries from "../screens/Inquiries";
import Clients from "../screens/Clients/Clients";
import FilterClient from "../screens/Clients/FilterClient";
import ClientDetails from "../screens/Clients/ClientDetails";

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

                  marginRight: 10,
                }}
              >
                <TouchableOpacity onPress={() => navigation.push("FilterClient")}>
                  <Image source={require("../assets/filter.png")} styles={{ marginTop: 10 }} />
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
      </DashboardNativeStack.Group>
    </DashboardNativeStack.Navigator>
  );
}

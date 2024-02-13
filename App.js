import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./components/Splash";
import Splash2 from "./components/Splash2";
import SignIn from "./components/SignIn";
import { useEffect, useState } from "react";
import ForgotPassword from "./components/ForgotPassword";
import OtpInput from "./components/OtpInput";
import NewPassword from "./components/NewPassword";
import Dashboard from "./screens/Dashboard";
import Footer from "./components/Footer";
import HomeStackNavigator from "./navigations/HomeStackNavigator";

const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      
        {
          isLoggedIn ? <NavigationContainer>
            <Stack.Navigator>
          {isLoading ? (
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          ) : (
            <Stack.Group>
              <Stack.Screen name="Splash2" component={Splash2} options={{ headerShown: false }} />
              <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
              <Stack.Screen name="forgotpswd" component={ForgotPassword} options={{ headerShown: false }} />
              <Stack.Screen name="otpInput" component={OtpInput} options={{ headerShown: false }} />
              <Stack.Screen name="newPassword" component={NewPassword} options={{ headerShown: false }} />
            </Stack.Group>
          )}
        </Stack.Navigator>
          </NavigationContainer> :<NavigationContainer>
          <HomeStackNavigator/>
            </NavigationContainer>
        }
        

     
      
    </>
  );
}


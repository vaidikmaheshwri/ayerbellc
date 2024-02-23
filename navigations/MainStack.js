import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../components/Splash";
import Splash2 from "../components/Splash2";
import SignIn from "../components/SignIn";
import { useEffect, useState } from "react";
import ForgotPassword from "../components/ForgotPassword";
import OtpInput from "../components/OtpInput";
import NewPassword from "../components/NewPassword";
import DashboardStack from "./DashboardStack";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function MainStack() {
 
  const [isLoading1, setIsLoading1] = useState(true);

  const user = useSelector((state) => state.user.user);
  const accessToken = useSelector((state) => state.user.accessToken);
  console.log("accessToken in main=>>>>>", accessToken);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading1(false);
    }, 3000);
  }, []);
  // useEffect(() => {
  //   if (user != null) {
  //     setIsNotLoggedIn(false);
  //   }
  //   // if (user == null) {
  //   //   setIsNotLoggedIn(true);
  //   // }
  // }, [user]);
  return (
    <NavigationContainer>
      {accessToken ? (
        <DashboardStack />
      ) : (
        <Stack.Navigator>
          {isLoading1 ? (
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
      )}
    </NavigationContainer>
  );
}

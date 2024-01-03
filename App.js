import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

{/* dependencies*/ }
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
{/* main screens*/ }
import SplashScreen from "./AllScreens/SplashScreen";
import Introscreen from "./AllScreens/Introscreen";
import Categories from "./AllScreens/Categories";

{/* gotoscreens*/ }
import GotoVegtables from "./Gotoscreens/Gotovegtablescreen";
import GotoFruits from "./Gotoscreens/Gotofruitsscreen";
import GotoBread from "./Gotoscreens/Gotobreadscreen";
import GotoSweets from "./Gotoscreens/Gotosweetscreen";
import GotoHomemade from "./Gotoscreens/Gotohomemadescreen";
import GotoTea from "./Gotoscreens/Gototeascreen";

{/*bottom tabs */ }
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";



{/* Custome Bottom Tabs */ }
import User from "./customebottomnavigation/User";
import Products from "./customebottomnavigation/Products";


{/*item detail screens */ }
import Vegtabledetailsscreen from "./itemdetailsscreens/vegtabledetailsscreen";
import Fruitsdetailscreen from "./itemdetailsscreens/fruitsdetailscreen";
import Breaddetailscreen from "./itemdetailsscreens/breaddetailscreen";
import Sweetdetailsscreen from "./itemdetailsscreens/sweetdetailsscreen";
import Homemadedetailsscreen from "./itemdetailsscreens/homemadedetailsscreen";
import Teadetailsscreen from "./itemdetailsscreens/teadetailsscreen";

{/*payment screen*/}
import PaymentScreen from "./AllScreens/paymentscreen";







const App = (props) => {
  const Stack = createStackNavigator();
  // const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Introscreen" component={Introscreen} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Products" component={Products} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="User" component={User} options={{ headerShown: false }}></Stack.Screen>


        <Stack.Screen name="GotoVegtables" component={GotoVegtables} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="GotoFruits" component={GotoFruits} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="GotoBread" component={GotoBread} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="GotoSweets" component={GotoSweets} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="GotoHomemade" component={GotoHomemade} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="GotoTea" component={GotoTea} options={{ headerShown: false }}></Stack.Screen>

        <Stack.Screen name="Vegtabledetailsscreen" component={Vegtabledetailsscreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Fruitsdetailscreen" component={Fruitsdetailscreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Breaddetailscreen" component={Breaddetailscreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Sweetdetailsscreen" component={Sweetdetailsscreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Homemadedetailsscreen" component={Homemadedetailsscreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="Teadetailsscreen" component={Teadetailsscreen} options={{ headerShown: false }}></Stack.Screen>




      </Stack.Navigator>
    </NavigationContainer>



  );
};
export default App;
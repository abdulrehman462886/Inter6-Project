// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Products from "./products";
// import Users from "./user";
// import Categories from "../AllScreens/Categories";







// const BottomTabs = (props) => {
//     const BtmTab = createBottomTabNavigator();
//     return (
//         <BtmTab.Navigator >
//             <BtmTab.Screen name="Categories" component={Categories}
//                 options={{
//                     headerShown: false,
//                     title: "Categories",
//                     tabBarLabel: ({ focused, size, color }) => { return (<Text style={{ color: focused ? "#7203FF" : "grey", fontWeight: "bold" }}>Categories</Text>) },
//                     tabBarIcon: ({ focused, color, size }) => { return (<Image source={require("../assets/grid.png")} style={{ width: 24, height: 24, tintColor: focused ? "#7203FF" : "grey" }}></Image>) }
//                 }}></BtmTab.Screen>

//             <BtmTab.Screen name="Products" component={Products}
//                 options={{
//                     headerShown: false,
//                     title: "Products",
//                     tabBarLabel: ({ focused, size, color }) => { return (<Text style={{ color: focused ? "#7203FF" : "grey", fontWeight: "bold" }}>Products</Text>) },
//                     tabBarIcon: ({ focused, size, color }) => { return (<Image source={require("../assets/shopping-cart.png")} style={{ width: 24, height: 24, tintColor: focused ? "#7203FF" : "grey" }}></Image>) },
//                 }}></BtmTab.Screen>

//             <BtmTab.Screen name="Users" component={Users} options={{
//                 headerShown: false,
//                 title: "Users",
//                 tabBarLabel: ({ focused, size, color }) => { return (<Text style={{ color: focused ? "#7203FF" : "grey", fontWeight: "bold" }}>Users</Text>) },
//                 tabBarIcon: ({ focused, size, color }) => { return (<Image source={require("../assets/user.png")} style={{ width: 24, height: 24, tintColor: focused ? "#7203FF" : "grey" }}></Image>) },
//             }}></BtmTab.Screen>


//         </BtmTab.Navigator>
//     );
// };

// export default BottomTabs;

















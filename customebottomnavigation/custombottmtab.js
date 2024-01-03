import React, { useEffect } from "react";
import { View, Image, TouchableOpacity, KeyboardAvoidingView, Keyboard, Text } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { Vegtableslist as vegtablesarrays } from "../Alllarraysdata/vegtablesarrays";
import { Vegtableslist as fruitsarrays } from "../Alllarraysdata/fruitsarrays";
import { Vegtableslist as breadarrays } from "../Alllarraysdata/breadarrays";
import { Vegtableslist as sweetarrays } from "../Alllarraysdata/sweetarrays";
import { Vegtableslist as homemadearrays } from "../Alllarraysdata/homemadearrays";
import { Vegtableslist as teaarrays } from "../Alllarraysdata/teaarrays";
const CustomBottomTab = () => {

    const vegtablesTotalQuantity = vegtablesarrays.reduce((acc, veg) => acc + veg.cartQuantity, 0);
    const fruitsTotalQuantity = fruitsarrays.reduce((acc, fruit) => acc + fruit.cartQuantity, 0);
    const breadTotalQuantity = breadarrays.reduce((acc, breads) => acc + breads.cartQuantity, 0);
    const sweetTotalQuantity = sweetarrays.reduce((acc, breads) => acc + breads.cartQuantity, 0);
    const homemadeTotalQuantity = homemadearrays.reduce((acc, breads) => acc + breads.cartQuantity, 0);
    const teaTotalQuantity = teaarrays.reduce((acc, breads) => acc + breads.cartQuantity, 0);

    const totalQuantity = vegtablesTotalQuantity + fruitsTotalQuantity + breadTotalQuantity + sweetTotalQuantity + homemadeTotalQuantity + teaTotalQuantity;

    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {
        const routeName = navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
        switch (routeName) {
            case "Categories":
                handleTabPress("Categories");
                break;
            case "Products":
                handleTabPress("Products");
                break;
            case "User":
                handleTabPress("User");
                break;
            default:
                // Handle default case if needed
                break;
        }
    }, [isFocused, navigation]);

    const handleTabPress = (tab) => {
        // Navigate to the selected tab
        navigation.navigate(tab);
    };

    const handleColorChange = (tab) => {
        const routeName = navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
        return routeName === tab ? '#7203FF' : '#9586A8';
    };

    return (
        <View style={{
            backgroundColor: "#FFFF",
            flexDirection: "row",
            justifyContent: "space-around",
            elevation: 20,
            padding: 24,
            borderColor: "#FFD9D0E3",
            borderWidth: 1,
            tabBarHideOnKeyboard: false,
        }}>
            <TouchableOpacity onPress={() => handleTabPress("Categories")}>
                <Image
                    source={require("../assets/grid.png")}
                    style={{ width: 28, height: 28, tintColor: handleColorChange("Categories") }}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleTabPress("Products")}>
                <Image
                    source={require("../assets/bottomshopicon.png")}
                    style={{ width: 28, height: 28, tintColor: handleColorChange("Products") }}
                />
                <View style={{
                    backgroundColor: "green",
                    marginLeft: 15,
                    elevation: 10,
                    alignSelf: "flex-end",
                    borderRadius: 20,
                    width: 20,
                    height: 20,
                }}>
                    <Text style={{
                        margin: 2, fontSize: 10,
                        alignSelf: "center",
                        color: "#FFFF",
                        fontWeight: "bold"
                    }}>
                        {totalQuantity}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleTabPress("User")}>
                <Image
                    source={require("../assets/user.png")}
                    style={{ width: 28, height: 28, tintColor: handleColorChange("User") }}
                />
            </TouchableOpacity>
        </View>
    );
};

export default CustomBottomTab;

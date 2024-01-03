import React from "react";
import {
    Image, SafeAreaView,
    StyleSheet, Text, View,
    Button, TouchableHighlight,
} from "react-native";

const FruitsCategories = () => {
    return (
        <View style={mystyle.scrollviewproductstyle}>
            <Image source={require("../assets/Media6.png")} style={mystyle.imagesstyle}></Image>
            <Text style={mystyle.itemnamestyle}>Fruits</Text>
            <Text style={mystyle.itemidstyle}>(25)</Text>
        </View>
    );
};
const mystyle = StyleSheet.create({
    scrollviewproductstyle: {
        backgroundColor: "#FFFF",
        elevation: 5,
        height: 211,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 5,

    },
    imagesstyle: {
        height: 140,
        backgroundColor: "#FFDBD8DD",
        borderRadius: 2,
    },
    itemnamestyle: {
        height: 30,
        fontSize: 18,
        fontFamily: "R.font.roboto",
        fontWeight: "bold",
        color: "black",
        marginLeft: 10,
        marginTop: 5,
    },
    itemidstyle: {
        marginLeft: 10,
        marginTop: 5,
    },
});

export default FruitsCategories;
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, TouchableHighlight } from "react-native";

const Categoriesscrollitems = () => {
    const vegitableslist = [
        {
            id: 1,
            myimages: require("../assets/Media5.png"),
            itemname: "Vegitables",
            itemid: "(50)",
        },
        {
            id: 2,
            myimages: require("../assets/Media6.png"),
            itemname: "Fruits",
            itemid: "(67)",
        },
        {
            id: 3,
            myimages: require("../assets/Media1.png"),
            itemname: "Bread",
            itemid: "(32)",
        },
        {
            id: 4,
            myimages: require("../assets/Media2.png"),
            itemname: "Sweets",
            itemid: "(47)",
        },
        {
            id: 5,
            myimages: require("../assets/Media3.png"),
            itemname: "Home",
            itemid: "(22)",
        },
        {
            id: 6,
            myimages: require("../assets/Media4.png"),
            itemname: "Tea",
            itemid: "(56)",
        },

    ];
    return (
        vegitableslist.map(({ id, myimages, itemname, itemid }) => {
            return (
                <View key={id} style={mystyle.scrollviewproductstyle}>
                    <Image source={myimages} style={mystyle.imagesstyle}></Image>
                    <Text style={mystyle.itemnamestyle}>{itemname}</Text>
                    <Text style={mystyle.itemidstyle}>{itemid}</Text>
                </View>
            );
        }
        )

    );
};
const mystyle = StyleSheet.create({
    scrollviewproductstyle: {
        backgroundColor: "#FFFF",
        elevation: 5,
        height: 211,
        width: 177,
        marginLeft: 20,
        marginBottom: 10,
        marginTop: 5,
        borderRadius: 5,

    },
    imagesstyle: {
        width: 177,
        height: 140,
        backgroundColor: "#FFDBD8DD",
        borderRadius: 2,
    },
    itemnamestyle: {
        width: 145,
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
export default Categoriesscrollitems;
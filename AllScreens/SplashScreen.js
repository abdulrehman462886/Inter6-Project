import React from "react";
import {
    View, Text, TouchableOpacity, StyleSheet, Image
} from "react-native";
const SplashScreen = (props) => {
    setTimeout(() => {
        // props.navigation.replace('Introscreen')
        // props.navigation.goback('Introscreen')
        props.navigation.navigate('Introscreen')
    }, 5000);
    return (
        <View style={Styles.bodycontainer}>
            <View style={Styles.container}>
                <Image source={require("../assets/D.png")} style={Styles.DStyle}></Image>
            </View>
        </View>
    );
};
const Styles = StyleSheet.create({
    bodycontainer: {
        backgroundColor: "#A259FF",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor: "#CDFFB6",
        height: 120,
        width: 120,
        alignSelf: "center",
        margin: 250,
        borderRadius: 60,
        elevation: 20,
        shadowColor: "#FFFF",
        alignContent: "center",
        alignItems: "center",

    },
    DStyle: {
        alignSelf: "center",
        padding: 25,
        margin: 30,

    },


});
export default SplashScreen;
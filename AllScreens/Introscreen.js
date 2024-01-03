import React from "react";
import {
    Image, SafeAreaView,
    StyleSheet, Text, View,
    Button, TouchableHighlight,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Introscreen = (props) => {
    return (
        <View style={mystyle.mianbody}>

            <View style={mystyle.container1}>
                <View style={mystyle.Dlogo}>
                    <Image source={require("../assets/D.png")}
                        style={{
                            alignSelf: "center", width: 23.16, height: 25.95,
                        }}></Image>
                </View>
                <Image source={require("../assets/BG.png")} style={mystyle.Rotateimg}></Image>
            </View>

            <View style={mystyle.container2}>
                <View style={mystyle.box2}>
                    <View style={mystyle.Boxlogo}>
                        <Image source={require("../assets/Box.png")}
                            style={alignSelf = "center"}></Image>
                    </View>
                    <View style={mystyle.mytxtheading}>
                        <Text style={{
                            textAlign: "center",
                            textAlignVertical: "center", alignSelf: "center",
                            fontSize: 30,
                            fontWeight: "bold",
                            padding: 2,
                            color: "#2D0C57",
                            letterSpacing: 0.41,
                            lineHeight: 36,
                        }}>
                            Non-Contact {"\n"} Deliveries</Text>
                    </View>

                    <View style={{ top: 60 }}>
                        <Text style={mystyle.paragrphtxt}>
                            When placing an order,
                            select the option “Contactless delivery”
                            and the courier will leave your order at the door.
                        </Text>
                    </View>


                    <View style={mystyle.Buttonstyle}>
                        <TouchableHighlight onPress={() => props.navigation.navigate("Categories")}
                            underlayColor={"transparent"}>
                            <Text style={mystyle.opennowtxt}>OPEN NOW </Text>
                        </TouchableHighlight>

                    </View>


                </View>
            </View>
            <TouchableOpacity>
                <Text style={{
                    textAlign: "center", fontSize: 20,
                    textAlignVertical: "center", alignSelf: "center",
                    lineHeight: 20,
                    fontWeight: "600",
                    marginTop: 30,
                    marginBottom: 30,
                    marginLeft: 30,
                    marginRight: 30,

                }}>
                    DISMISS
                </Text>
            </TouchableOpacity>

        </View >
    );
};
const mystyle = StyleSheet.create({
    mianbody: {
        backgroundColor: "#A259FF",
        flex: 1,
        flexDirection: "column",
    },
    container1: {
        color: "white",
        backgroundColor: "#A259FF",
        flex: 1,
        flexDirection: "row",
    },
    Dlogo: {

        height: 63,
        padding: 20,
        backgroundColor: "#CDFFB6",
        borderRadius: 30,
        top: 63,
        left: 20,
        alignContent: "center",
        alignItems: "center",
        elevation: 5,
        shadowColor: "0x33270158"

    },
    Rotateimg: {
        // transform: [{ rotate: '-0.5deg' }],
        // resizeMode: "contain",
        flex: 1,

    },
    container2: {
        color: "white",
        backgroundColor: "#A259FF",
        flex: 2,
    },
    box2: {
        backgroundColor: "#F6F5F5",
        height: 584,
        width: 414,
        borderRadius: 25,
        flexDirection: "column",
    },
    Boxlogo: {

        height: 80,
        backgroundColor: "#FFFFFF",
        top: 30,
        alignSelf: "center",
        borderRadius: 100,
        shadowColor: "grey",
        elevation: 5,
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        padding: 20,
    },
    mytxtheading: {
        width: 326,
        height: 80,
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        top: 50,
        borderRadius: 10,
        elevation: 1,
    },
    paragrphtxt: {
        fontSize: 18,
        lineHeight: 26,
        fontFamily: "R.font.sf pro text",
        color: "grey",
        textAlign: "center",

    },
    Buttonstyle: {
        backgroundColor: "#0BCE83",
        height: 50,
        width: 370,
        alignSelf: "center",
        marginTop: 80,
        alignContent: "center",
        borderRadius: 10,
        shadowColor: "grey",
        elevation: 2,

    },
    opennowtxt: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "white",
        fontSize: 22,
        alignSelf: "center",
        margin: 10,
    },
});
export default Introscreen;







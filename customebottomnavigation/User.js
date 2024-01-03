import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableHighlight, FlatList, StyleSheet } from "react-native";
import CustomebottomTab from "./custombottmtab";
import { TouchableOpacity } from "react-native-gesture-handler";

const User = () => {



    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity>
                <Image source={require("../assets/arrow.png")}
                    style={{
                        width: 18, height: 18,
                        marginTop: 14,
                        marginLeft: 14,
                    }}>
                </Image>
            </TouchableOpacity>

            <View style={{
                elevation: 15,
                backgroundColor: "red",
                marginRight: 40,
                marginLeft: 40,
                alignSelf: "center",
                borderRadius: 80,
            }}>
                <Image source={require("../assets/profileimage.jpg")} style={{
                    borderRadius: 30,
                    alignSelf: "center",
                    borderRadius: 80,
                    width: 120,
                    height: 120,
                }}></Image>
            </View>

            <View style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginLeft: 100,
                marginRight: 20,
            }}>
                <View style={{
                    flexDirection: "row",
                }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#57FB0A" }}>
                        Usman Malik </Text>
                </View>
                <TouchableOpacity>
                    <Image source={require("../assets/pencil.png")}></Image>
                </TouchableOpacity>
            </View>


            <Text style={{
                fontFamily: "italic",
                fontWeight: "700",
                alignSelf: "center",
                color: "black",
            }}>UI/UX/Designer</Text>

            <Text style={{
                fontWeight: "700",
                fontSize: 20,
                color: "black",
                marginLeft: 20,
                marginTop: 24,
            }}>PROFILE</Text>

            <View style={{
                borderTopWidth: 2,
                borderColor: "blue",
                marginLeft: 10,
                marginRight: 20,
                marginTop: 10,
            }}></View>


            <View style={{}}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 5, backgroundColor: "red", marginLeft: 40, marginRight: 30, }}>
                    <Image source={require("../assets/usericon.png")} style={{ width: 25, height: 25, alignSelf: "center", }}></Image>
                    <Text style={{ fontWeight: "bold" }}>Username</Text>
                    <Text style={{ fontWeight: "bold" }}>MorganJamesDesigner</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 5, backgroundColor: "red", marginLeft: 30, marginRight: 30, }}>
                    <Image source={require("../assets/contact.png")} style={{ width: 25, height: 25 }}></Image>
                    <Text style={{ fontWeight: "bold" }}>Contact</Text>
                    <Text style={{ fontWeight: "bold" }}>+92 0303-4576320</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", marginTop: 5, backgroundColor: "red", marginLeft: 30, marginRight: 40, }}>
                    <Image source={require("../assets/email.png")} style={{ width: 35, height: 35 }}></Image>
                    <Text style={{ fontWeight: "bold" }}>Email</Text>
                    <Text style={{ fontWeight: "bold" }}>abc@gmail.com</Text>
                </View>
            </View>


            <View style={{
                borderTopWidth: 2,
                borderColor: "blue",
                marginLeft: 10,
                marginRight: 20,
                marginTop: 10,
            }}></View>

            <Text ></Text>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <CustomebottomTab />
            </View>
        </View>
    );
};
const Styles = StyleSheet.create({
    flatlistviewstyle: {
        flexDirection: "row",
        padding: 5,
        marginLeft: 10,
        marginRight: 15,
        marginBottom: 2,
        marginTop: 2,
        justifyContent: "space-between",
    },
});

export default User;
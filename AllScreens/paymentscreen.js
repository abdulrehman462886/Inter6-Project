import React, { useState, useRef, useEffect } from "react";
import { useGestureHandlerRef } from "@react-navigation/stack";
import {
    View, Text, StyleSheet,
    Image, TouchableOpacity,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Animated,
    Easing,
    Pressable,
    // AsyncStorage
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import FlipCard from 'react-native-flip-card';
import AsyncStorage from '@react-native-async-storage/async-storage';
const PaymentScreen = (props) => {
    // Load cardNumber from AsyncStorage on component mount
    const [cardNumber, setCardNumber] = useState('');
    useEffect(() => {
        retrieveCardNumber();
    }, []);
    const formatCardNumber = (input) => {
        const numericInput = input.replace(/\D/g, '');
        const formattedInput = numericInput.replace(/(\d{4})(?=\d)/g, '$1 ');
        const truncatedInput = formattedInput.slice(0, 20);
        setCardNumber(truncatedInput);
    };
    const storeCardNumber = async (value) => {
        try {
            await AsyncStorage.setItem('cardNumber', value);
        } catch (error) {
            console.error('Error storing card number:', error);
        }
    };
    const retrieveCardNumber = async () => {
        try {
            const value = await AsyncStorage.getItem('cardNumber');
            if (value !== null) {
                setCardNumber(value);
            }
        } catch (error) {
            console.error('Error retrieving card number:', error);
        }
    };
    //end card number 




    //load name from async storage 
    const [name, setName] = useState('');

    useEffect(() => {
        retrieveName();
    }, []);

    const handleNameChange = (text) => {
        const truncatedName = text.slice(0, 16); // Limit to 16 characters
        setName(truncatedName);
    };

    const storeName = async (value) => {
        try {
            await AsyncStorage.setItem('name', value);
        } catch (error) {
            console.error('Error storing card holder name:', error);
        }
    };

    const retrieveName = async () => {
        try {
            const value = await AsyncStorage.getItem('name');
            if (value !== null) {
                setName(value);
            }
        } catch (error) {
            console.error('Error retrieving card holder name:', error);
        }
    };
    //end load name 



    //async storage to expiray date 
    const [expiryDate, setExpiryDate] = useState('');

    useEffect(() => {
        retrieveExpiryDate();
    }, []);

    const formatExpiryDate = (inputDate) => {
        const cleanedDate = inputDate.replace(/\D/g, '');

        if (cleanedDate.length >= 2 && cleanedDate.length <= 4) {
            const day = cleanedDate.slice(0, 2);
            const month = cleanedDate.slice(2, 4);
            return `${day}/${month}`;
        } else if (cleanedDate.length > 4) {
            const day = cleanedDate.slice(0, 2);
            const month = cleanedDate.slice(2, 4);
            const year = cleanedDate.slice(4, 8);
            return `${day}/${month}/${year}`;
        } else {
            return cleanedDate;
        }
    };

    const storeExpiryDate = async (value) => {
        try {
            await AsyncStorage.setItem('expiryDate', value);
        } catch (error) {
            console.error('Error storing expiry date:', error);
        }
    };

    const retrieveExpiryDate = async () => {
        try {
            const value = await AsyncStorage.getItem('expiryDate');
            if (value !== null) {
                setExpiryDate(value);
            }
        } catch (error) {
            console.error('Error retrieving expiry date:', error);
        }
    };



    const [cvcnumber, setcvcnumber] = useState('');
    useEffect(() => {
        retrieveCVCNumber();
    }, []);

    const storeCVCNumber = async (value) => {
        try {
            await AsyncStorage.setItem('cvcNumber', value);
        } catch (error) {
            console.error('Error storing CVC number:', error);
        }
    };
    const retrieveCVCNumber = async () => {
        try {
            const value = await AsyncStorage.getItem('cvcNumber');
            if (value !== null) {
                setcvcnumber(value);
            }
        } catch (error) {
            console.error('Error retrieving CVC number:', error);
        }
    };


    const [isFlipped, setIsFlipped] = useState(false);
    const toggleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <View style={Styles.mainbody}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Products")}>
                <Image
                    style={Styles.vectoriconstyle}
                    source={require("../assets/Vector.png")}
                ></Image>
            </TouchableOpacity>

            <Text style={Styles.creditanddebitstyle}>Credit / Debit card</Text>


            <FlipCard
                clickable={false}
                flip={isFlipped}
                flipVertical={false}
                flipHorizontal={true}



                perspective={1000}
                friction={6}
            >


                <View style={Styles.creditcardviewfrontstyle}>
                    <LinearGradient colors={[
                        "#B993D6",
                        "#89fffd",
                        "#8CA6DB",
                    ]}
                        style={Styles.gradientstyle}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        useAngle={true}
                        angle={90}
                        angleCenter={{ x: 0.5, y: 0.5 }}
                        locations={[0.2, 0.3, 0.6]}
                    >
                        <Image source={require("../assets/mc_symbol.png")} style={Styles.mciconstyle}></Image>
                        <Text style={Styles.numberCardstyle}>{cardNumber}</Text>
                        <View style={Styles.textDateviewstyle}>
                            <Text style={Styles.alexsendrasmithstyle}>{name.toUpperCase()} </Text>
                            <Text style={Styles.datestyles}>{formatExpiryDate(expiryDate)}</Text>
                        </View>
                    </LinearGradient>
                </View>

                <View View style={Styles.creditcardviewbackstyle}>
                    <LinearGradient colors={[
                        "#B993D6",
                        "#89fffd",
                        "#8CA6DB",
                    ]}
                        style={Styles.gradientstyle}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        useAngle={true}
                        angle={90}
                        angleCenter={{ x: 0.5, y: 0.5 }}
                        locations={[0.2, 0.3, 0.6]}
                    >
                        <Image source={require("../assets/mc_symbol.png")} style={Styles.mciconstyle}></Image>
                        <Text style={Styles.numberCardstyle}>{cardNumber}</Text>
                        <View style={Styles.textDateviewstyle}>
                            <Text style={Styles.alexsendrasmithstyle}>{name.toUpperCase()} </Text>
                            <Text style={Styles.datestyles}>{cvcnumber}</Text>
                        </View>
                    </LinearGradient>
                </View>
            </FlipCard>


            <View style={{}}>
                <TouchableOpacity onPress={toggleFlip}>
                    <Image source={require("../assets/takephotos.png")}
                        style={Styles.takephotosstyle}>
                    </Image>
                </TouchableOpacity>


                <Text style={Styles.nameoncardstyle}>Name On Card </Text>
                <View style={Styles.nameoncardviewatyle}>
                    <TextInput
                        placeholder="Name On Card"
                        style={Styles.textinputstyle}
                        value={name}
                        onChangeText={(text) => {
                            handleNameChange(text);
                            storeName(text);
                        }}
                    ></TextInput>
                </View>


                <Text style={Styles.nameoncardstyle}> Card Number </Text>
                <View style={Styles.nameoncardviewatyle}>
                    <TextInput
                        placeholder="4747 4747 4747 4747 "
                        style={Styles.textinputstyle}
                        keyboardType="numeric"
                        value={cardNumber}
                        onChangeText={(text) => {
                            formatCardNumber(text);
                            storeCardNumber(text);
                        }}
                    ></TextInput>
                    <Image source={require("../assets/mc_symbol.png")}
                        style={{ width: 40, height: 25, marginRight: 15, alignSelf: "center", }}>
                    </Image>
                </View>




                <View style={{ flexDirection: "row", justifyContent: "space-around", }}>
                    <Text style={Styles.Expirydatestyle}>Expiry date</Text>
                    <Text style={Styles.CVCstyle}>CVC</Text>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-evenly", }}>
                    <View style={Styles.ViewExpirydatestyle}>
                        <TextInput placeholder="Enter Date"
                            style={{ padding: 8, marginLeft: 10, }}
                            onChangeText={(text) => {
                                const formattedDate = formatExpiryDate(text);
                                setExpiryDate(formattedDate);
                                storeExpiryDate(formattedDate);
                            }}
                            value={expiryDate}
                            maxLength={10}
                            keyboardType="numeric"
                        ></TextInput>
                    </View>

                    {/*CVC CARD NUMBER  */}
                    <View style={Styles.ViewCVCstyle}>
                        <TextInput
                            placeholder="Enter CVC "
                            style={{ padding: 8, marginLeft: 10 }}
                            maxLength={3}
                            keyboardType="number-pad"
                            onChangeText={(text) => {
                                setcvcnumber(text);
                                storeCVCNumber(text);
                            }}
                            value={cvcnumber}
                        ></TextInput>
                        <Image
                            source={require("../assets/Hint.png")}
                            style={{
                                width: 30, height: 22,
                                alignSelf: "center",
                                justifyContent: "space-around",
                            }}>
                        </Image>
                    </View>
                </View>

                <TouchableOpacity onPress={() => props.navigation.navigate("Products",
                    { cardNumber: cardNumber })}>
                    <View style={{
                        backgroundColor: "#0ACF83",
                        margin: 20,
                        padding: 12,
                        width: "80%",
                        alignSelf: "center",
                        borderRadius: 8,
                    }}>
                        <Text style={{
                            alignSelf: "center",
                            color: "white",
                            fontWeight: "600",
                        }}>USE THIS CARD </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    );
};
const Styles = StyleSheet.create({
    mainbody: {
        backgroundColor: "#F6F5F5",
        flex: 1,
    },
    vectoriconstyle: {
        marginTop: 40,
        marginLeft: 20,
    },
    creditanddebitstyle: {
        marginLeft: 20,
        marginTop: 18,
        fontSize: 28,
        lineHeight: 41,
        fontFamily: "R.font.sf pro display",
        fontWeight: "900",
        color: "#2D0C57",
        letterSpacing: 0.41,
    },

    creditcardviewfrontstyle: {
        backgroundColor: "#FFFF",
        elevation: 10,
        borderRadius: 10,
        width: "90%",
        marginLeft: 15,
    },

    creditcardviewbackstyle: {
        backgroundColor: "red",
        borderRadius: 10,
        position: "absolute",
        width: "90%",
        marginLeft: 15,
    },
    gradientstyle: {
        borderRadius: 10,
    },
    mciconstyle: {
        marginTop: 20,
        alignSelf: "flex-end",
        marginRight: 20,
    },
    numberCardstyle: {
        fontSize: 24,
        lineHeight: 30,
        fontFamily: "R.font.sf pro display",
        fontWeight: "500",
        color: "#FFFF",
        alignSelf: "center",
        letterSpacing: 2.28,
        margin: 15,
    },
    textDateviewstyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 30,
    },
    alexsendrasmithstyle: {
        color: "#FFFF",
        fontFamily: "R.font.sf pro display",
        fontSize: 18,
        letterSpacing: 0.6,
        lineHeight: 30,
        fontWeight: "600",
    },
    datestyles: {
        color: "#FFFF",
        fontFamily: "R.font.sf pro display",
        fontSize: 18,
        letterSpacing: 0.6,
        lineHeight: 30,
        fontWeight: "600",

    },
    takephotosstyle: {
        alignSelf: "center",
        marginTop: 8,
    },
    nameoncardstyle: {
        marginLeft: 24,
        fontSize: 14,
        marginTop: 5,
        fontWeight: "500",
        fontFamily: "R.font.sf pro display",
        color: "#9586A8",
    },
    nameoncardviewatyle: {
        backgroundColor: "#FFFF",
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        elevation: 2,
        borderColor: "#D9D0E3",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textinputstyle: {
        marginLeft: 8,
        padding: 6,
        flex: 1,
    },

    Expirydatestyle: {
        color: "#2D0C57",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
        marginRight: 35,
    },
    ViewExpirydatestyle: {
        backgroundColor: "#FFFF",
        elevation: 5,
        borderRadius: 5,
        width: "35%",
        borderWidth: 1,
        borderColor: "#D9D0E3",
    },
    CVCstyle: {
        color: "#2D0C57",
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 5,
        marginRight: 80,
    },
    ViewCVCstyle: {
        backgroundColor: "#FFFF",
        elevation: 5,
        borderRadius: 5,
        width: "35%",
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#D9D0E3"
    },
});
export default PaymentScreen;














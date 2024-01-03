import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import CustomebottomTab from "./custombottmtab";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import ToggleSwitch from 'toggle-switch-react-native'
import { Switch } from 'react-native-switch';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Products = (props) => {
    const [cardNumber, setCardNumber] = useState('');

    useEffect(() => {
        retrieveCardNumber();
    }, []);

    const retrieveCardNumber = async () => {
        try {
            const value = await AsyncStorage.getItem('cardNumber');
            if (value !== null) {
                const formattedCardNumber = formatCardNumber(value);
                setCardNumber(formattedCardNumber);
            }
        } catch (error) {
            console.error('Error retrieving card number:', error);
        }
    };

    const formatCardNumber = (cardNumber) => {
        // Assuming cardNumber is a string with 16 digits
        const visibleDigits = 5;
        const maskedDigits = cardNumber.slice(0, -visibleDigits).replace(/\d/g, '*');
        const visiblePart = cardNumber.slice(-visibleDigits);

        return `${maskedDigits} ${visiblePart}`;
    };
    //end async storage payment method 





    //Delivery Address 
    const [showModal, setShowModal] = useState(false);
    const [enteredName, setEnteredName] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredCountry, setEnteredCountry] = useState('');
    const [enteredPostalCode, setEnteredPostalCode] = useState('');


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [postalCode, setPostalCode] = useState('');

    useEffect(() => {
        retrieveStoredData();
    }, []);

    const retrieveStoredData = async () => {
        try {
            const storedName = await AsyncStorage.getItem('name');
            const storedAddress = await AsyncStorage.getItem('address');
            const storedCity = await AsyncStorage.getItem('city');
            const storedCountry = await AsyncStorage.getItem('country');
            const storedPostalCode = await AsyncStorage.getItem('postalCode');

            setName(storedName || '');
            setAddress(storedAddress || '');
            setCity(storedCity || '');
            setCountry(storedCountry || '');
            setPostalCode(storedPostalCode || '');
        } catch (error) {
            console.error('Error retrieving stored data:', error);
        }
    };

    const handleOkPress = async () => {
        // Validation for name
        if (enteredName.trim() === '' || enteredName.length < 3) {
            console.error('Name should not be empty and should have at least 3 characters');
            return;
        }
    
        // Validation for address
        if (enteredAddress.trim() === '' || enteredAddress.length < 1) {
            console.error('Address should not be empty');
            return;
        }
    
        // Validation for city
        if (enteredCity.trim() === '' || enteredCity.length < 5) {
            console.error('City should not be empty and should have at least 5 characters');
            return;
        }
    
        // Validation for country
        if (enteredCountry.trim() === '' || enteredCountry.length < 5) {
            console.error('Country should not be empty and should have at least 5 characters');
            return;
        }
    
        // Validation for postal code (checking if it contains only numbers)
        const postalCodeRegex = /^\d+$/;
        if (enteredPostalCode.trim() === '' || !postalCodeRegex.test(enteredPostalCode)) {
            console.error('Postal Code should not be empty and should contain only numbers');
            return;
        }
    
        setShowModal(false);
    
        setName(enteredName);
        setAddress(enteredAddress);
        setCity(enteredCity);
        setCountry(enteredCountry);
        setPostalCode(enteredPostalCode);
    
        try {
            await AsyncStorage.setItem('name', enteredName);
            await AsyncStorage.setItem('address', enteredAddress);
            await AsyncStorage.setItem('city', enteredCity);
            await AsyncStorage.setItem('country', enteredCountry);
            await AsyncStorage.setItem('postalCode', enteredPostalCode);
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };




    //Delivery Options 
    const [isToggleOn, setisToggleOn] = useState(true);
    const [isOnColrText, setIsOnColorText] = useState("grey");
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (id) => {
        setSelectedOption(id === selectedOption ? null : id);
    };

    const Deliveryoptionslist = [
        {
            id: 1,
            title: "I’ll pick it up myself",
            images: require("../assets/walking.png"),
            check: require("../assets/check.png"),
        },
        {
            id: 2,
            title: "By courier",
            images: require("../assets/bike.png"),
            check: require("../assets/check.png"),
        },
        {
            id: 3,
            title: "By Drone",
            images: require("../assets/Drone.png"),
            check: require("../assets/check.png"),
        }
    ];
    return (
        <View style={{ flex: 1, backgroundColor: "#F6F5F5", }}>

            <View style={Styles.viewstyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Categories")}>
                    <Image
                        source={require("../assets/Vector.png")}
                        style={Styles.iconstyle}>
                    </Image>
                </TouchableOpacity>
                <Text style={Styles.checkoutstyle}>Checkout</Text>
            </View>

            <View style={Styles.paymentmethodviewstyle}>
                <Text style={Styles.paymentmethodstyle}>Payment method </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("PaymentScreen")}>
                    <Text style={Styles.changestyle}>CHANGE</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.creditcarviewstyle}>
                <Image source={require("../assets/credit-card.png")}
                    style={Styles.creditcardstyle}></Image>
                <TextInput
                    placeholder={cardNumber}
                    editable={false}
                    style={Styles.textinputstyle}
                ></TextInput>
            </View>


            <View style={Styles.DeliveryAddressstyle}>
                <Text style={Styles.paymentmethodstyle}>Delivery address</Text>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Text style={Styles.changestyle}>CHANGE</Text>
                </TouchableOpacity>
            </View>


            <View style={Styles.homeviewstyle}>
                <Image source={require("../assets/home.png")}></Image>
                <View style={{ marginLeft: 25, marginTop: 2, alignItems: "flex-start" }}>
                    <Text style={Styles.sametextstyle}>{name}</Text>
                    <Text style={Styles.sametextstyle}>{address}</Text>
                    <Text style={Styles.sametextstyle}>{city}</Text>
                    <Text style={Styles.sametextstyle}>{country}</Text>
                    <Text style={Styles.sametextstyle}>{postalCode}</Text>
                </View>
            </View>


            <View style={Styles.Deliveryoptionstyle}>
                <Text style={Styles.paymentmethodstyle}>Delivery Options</Text>
                <TouchableOpacity >
                    <Text style={Styles.changestyle}>CHANGE</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={Deliveryoptionslist}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                Styles.flatlistviewstyle,
                                { backgroundColor: item.id === selectedOption ? '#ECECEC' : 'transparent' }
                            ]}
                            onPress={() => handleOptionSelect(item.id)}
                        >
                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}>
                                <Image source={item.images} style={{ marginRight: 35, tintColor: item.id === selectedOption ? '#7203FF' : '#9586A8' }} />
                                <Text style={{ marginRight: 35, color: item.id === selectedOption ? '#7203FF' : '#9586A8', fontWeight: "600", fontFamily: "R.font.sf pro text" }}>{item.title}</Text>
                            </View>
                            {item.id === selectedOption && <Image source={item.check} style={Styles.checkIcon} />}
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>


            <View style={{
                flexDirection: "row",
                marginTop: 20,
                marginBottom: 20,
                marginLeft: 15,
                marginRight: 15,
                justifyContent: "space-between",
            }}>
                <Text style={Styles.noncontactdeliverystyles}>Non-contact-delivery</Text>
                <ToggleSwitch
                    // isOn={true}
                    isOn={isToggleOn}
                    onColor={"#E2CBFF"}
                    offColor={"grey"}
                    size="medium"
                    label={isToggleOn ? "YES" : "NO"}
                    labelStyle={{ color: "green", fontSize: 16, fontWeight: "600", }}
                    onToggle={(isOn) => {
                        setisToggleOn(isOn)
                    }} />
            </View>




            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <CustomebottomTab />
            </View>



            {
                showModal ?
                    <View style={{
                        backgroundColor: "#FFFF",
                        elevation: 20,
                        position: "absolute",
                        alignSelf: "center",
                        marginTop: 225,
                        width: "85%",
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: "#D9D0E3",
                    }}>
                        <Text style={Styles.modaltextstyles}>CHANGE DELIVERY ADDRESS </Text>

                        <TextInput placeholder="Name"
                            onChangeText={(text) => setEnteredName(text)}
                            style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#D9D0E3", marginTop: 2, }}>
                        </TextInput>
                        <TextInput placeholder="Address"
                            onChangeText={(text) => setEnteredAddress(text)}
                            style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#D9D0E3", marginTop: 2, }}>
                        </TextInput>
                        <TextInput placeholder=" City "
                            onChangeText={(text) => setEnteredCity(text)}
                            style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#D9D0E3", marginTop: 2, }}>
                        </TextInput>
                        <TextInput placeholder=" Country"
                            onChangeText={(text) => setEnteredCountry(text)}
                            style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#D9D0E3", marginTop: 2, }}>
                        </TextInput>
                        <TextInput placeholder="PostalCode"
                            onChangeText={(text) => setEnteredPostalCode(text)}
                            style={{ marginLeft: 10, marginRight: 10, backgroundColor: "#D9D0E3", marginTop: 2, }}>
                        </TextInput>

                        <View style={{
                            flexDirection: "row",
                            margin: 12,
                            justifyContent: "space-evenly",
                        }}>
                            <TouchableOpacity onPress={() => setShowModal(false)}>
                                <Text style={{ color: "#0BCE83", fontSize: 14, fontWeight: "900", }}>CANCEL</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleOkPress}>
                                <Text style={{ color: "#0BCE83", fontSize: 14, fontWeight: "900", }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    null
            }

        </View>
    );
}
const Styles = StyleSheet.create({
    viewstyle: {
        backgroundColor: "white",
        flexDirection: "row",
        elevation: 10,
    },
    iconstyle: {
        marginLeft: 20,
        marginTop: 50,
        marginBottom: 20,
    },
    checkoutstyle: {
        marginLeft: 130,
        marginTop: 45,
        marginBottom: 20,
        fontSize: 20,
        fontWeight: "bold",
        color: "#2D0C57",
        lineHeight: 22,
        textAlign: "center",
        textAlignVertical: "center",
        fontFamily: "R.font.sf pro text",
    },
    paymentmethodviewstyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    paymentmethodstyle: {
        color: "#2D0C57",
        fontSize: 18,
        fontWeight: "700",
        fontFamily: "R.font.sf pro text",
        lineHeight: 21,
    },
    changestyle: {
        color: "#7203FF",
        fontFamily: "R.font.sf pro text",
        fontWeight: "900",
    },
    creditcarviewstyle: {
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 30,
        alignItems: "center",
    },
    creditcardstyle: {
        marginRight: 25,
    },
    textinputstyle: {
        //   backgroundColor:"red",
        flex: 1,
    },
    DeliveryAddressstyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
    },
    homeviewstyle: {
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,

    },
    sametextstyle: {
        color: "#9586A8",
        fontSize: 15,
        fontFamily: "R.font.sf pro text",
        lineHeight: 20,
        fontWeight: "600",
    },
    Deliveryoptionstyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
    },
    flatlistviewstyle: {
        flexDirection: "row",
        padding: 5,
        marginLeft: 10,
        marginRight: 15,
        marginBottom: 2,
        marginTop: 2,
        justifyContent: "space-between",
    },
    icontextstyle: {
        flexDirection: "row",
        justifyContent: "space-around",

    },
    noncontactdeliverystyles: {
        fontSize: 22,
        fontWeight: "900",
        color: "#2D0C57",

    },
    modaltextstyles: {
        fontWeight: "bold",
        color: "#0BCE83",
        fontSize: 20,
        margin: 10,
        fontFamily: "R.font.sf pro text",
        alignSelf: "center",
    },

});
export default Products;












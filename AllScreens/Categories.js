import React, { useState } from "react";
import {
    TouchableOpacity, View,
    Text, StyleSheet, Image,
    TextInput, FlatList,
    ScrollView, TouchableHighlight,
    KeyboardAvoidingView,
    Keyboard,
} from "react-native";

{/* all goto screens */ }
import GotoVegtables from "../Gotoscreens/Gotovegtablescreen";
import GotoFruits from "../Gotoscreens/Gotofruitsscreen";
import GotoBread from "../Gotoscreens/Gotobreadscreen";
import GotoHomemade from "../Gotoscreens/Gotohomemadescreen";
import GotoSweets from "../Gotoscreens/Gotosweetscreen";
import GotoTea from "../Gotoscreens/Gototeascreen";

{/* all goto screens */ }
import CustomebottomTab from "../customebottomnavigation/custombottmtab";







const Categories = (props) => {
    const itemlists = [
        {
            id: 1,
            myimages: require("../assets/itemvegone.jpg"),
            title: "Vegtables",
            totalitems: (25),
        },
        {
            id: 2,
            myimages: require("../assets/fr22.jpg"),
            title: "Fruits",
            totalitems: (22),
        },
        {
            id: 3,
            myimages: require("../assets/itembreadtwo.jpg"),
            title: "Bread",
            totalitems: (28),
        },
        {
            id: 4,
            myimages: require("../assets/itemsweetthree.jpg"),
            title: "Sweets",
            totalitems: (18),
        },
        {
            id: 5,
            myimages: require("../assets/itemhomemadefour.jpg"),
            title: "Home Made",
            totalitems: (37),
        },
        {
            id: 6,
            myimages: require("../assets/itemteafive.jpg"),
            title: "Teas",
            totalitems: (30),
        },


    ];

    //search functionality
    const [searchinput, setSearchInput] = useState('');
    const [filtercategories, setFilterCatogories] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);


    const handleSearch = (text) => {
        setSearchInput(text);
        const filtered = itemlists.filter(
            (item) =>
                item.title.toLowerCase().includes(text.toLowerCase()) ||
                (item.totalitems && item.totalitems.toString().includes(text))
        );
        setFilterCatogories(filtered);
    };

    const handleCancel = () => {
        setSearchInput('');
        setFilterCatogories([]);
        setIsSearchActive(false);
    };


    return (

        <View style={{ flex: 1, backgroundColor: "white " }}>
            <View style={Styles.Iconstyle}>
                <TouchableHighlight onPress={() => props.navigation.navigate("Introscreen")}
                    underlayColor={"transparent"}>
                    <Image source={require("../assets/Vector.png")}></Image>
                </TouchableHighlight>
            </View>
            <Text style={Styles.txtstyle}>Categories</Text>

            <View style={Styles.stylesearchbarview}>

                <Image source={require("../assets/search.png")}
                    style={{ alignSelf: "center", marginLeft: 18 }}>
                </Image>


                <TextInput placeholder="Search"
                    onChangeText={handleSearch}
                    value={searchinput}
                    onFocus={() => setIsSearchActive(true)}
                    style={{
                        fontSize: 18, alignSelf: "center",
                        marginLeft: 16, lineHeight: 21, fontWeight: "400",
                        fontWeight: "700", fontSize: 17, fontFamily: "R.font.sf pro text",
                        flex: 1,
                    }}>
                </TextInput>
                {isSearchActive && (
                    <TouchableOpacity onPress={handleCancel} style={{ paddingRight: 10 }}>
                        <Image
                            source={require('../assets/cancel.png')}
                            style={{ width: 30, height: 40, borderRadius: 40, }} />
                    </TouchableOpacity>
                )}
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={searchinput.length > 0 ? filtercategories : itemlists}
                numColumns={2}
                renderItem={({ item }) => {

                    return (

                        <TouchableOpacity onPress={() => {
                            switch (item.title) {
                                case 'Vegtables':
                                    props.navigation.navigate('GotoVegtables');
                                    break;
                                case 'Fruits':
                                    props.navigation.navigate('GotoFruits');
                                    break;
                                case 'Bread':
                                    props.navigation.navigate('GotoBread');
                                    break;
                                case 'Sweets':
                                    props.navigation.navigate('GotoSweets');
                                    break;
                                case 'Home Made':
                                    props.navigation.navigate('GotoHomemade');
                                    break;
                                case 'Teas':
                                    props.navigation.navigate('GotoTea');
                                    break;
                                default:
                                    break;
                            }
                        }}>
                            <View style={Styles.gridviewstyle}>
                                <Image source={item.myimages} style={Styles.imagesstyle}></Image>
                                <Text style={Styles.mytextstyle}>{item.title}</Text>
                                <Text style={Styles.totalitemsstyle}>{item.totalitems}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.id.toString()}
            />
            {searchinput.length > 0 && filtercategories.length === 0 && (
                <Text style={{ marginBottom: 150, marginLeft: 40, fontWeight: "bold" }}>
                    Item {`${searchinput}`} Not Found </Text>
            )}


            <View style={{ position: "relative", bottom: 0, width: '100%' }}>
                <CustomebottomTab />
            </View>
        </View >
    );

};

const Styles = StyleSheet.create({
    Iconstyle: {
        marginTop: 30,
        marginLeft: 20,
    },
    txtstyle: {
        fontSize: 34,
        lineHeight: 41,
        fontFamily: "R.font.sf pro display",
        fontWeight: "700",
        color: "#2D0C57",
        letterSpacing: 0.41,
        marginTop: 20,
        marginLeft: 20,
    },
    stylesearchbarview: {
        height: 55,
        backgroundColor: "#FFFFFF",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: "#D9D0E3",
        elevation: 5,
        shadowColor: "grey",
        flexDirection: "row",

    },
    gridviewstyle: {
        backgroundColor: "#FFFF",
        elevation: 5,
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 10,
        marginBottom: 10,
        borderColor: "#DBD8DD",
        borderWidth: 1,
    },
    imagesstyle: {
        width: 160,
        height: 160,
        borderRadius: 5,
    },
    mytextstyle: {
        fontSize: 18,
        color: "#2D0C57",
        fontFamily: "Robotos",
        fontWeight: "700",
        margin: 5,
    },
    totalitemsstyle: {
        color: "#9586A8",
        fontFamily: "Robotos",
        fontSize: 16,
        fontWeight: "400",
        margin: 6,
    },

});
export default Categories;
import React, { useState, useEffect, useCallback } from "react";
import {
    Image, SafeAreaView,
    StyleSheet, Text, View,
    Button, TouchableHighlight,
} from "react-native";
import { FlatList, ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import FilterScreen from "../components/filtertxt";
import CustomebottomTab from "../customebottomnavigation/custombottmtab";
import { Vegtableslist } from "../Alllarraysdata/teaarrays";
import { useFocusEffect } from '@react-navigation/native';
const GotoTea = (props) => {

    const [vegtableslistState, setVegtableslistState] = useState(Vegtableslist);
    const [rerenderKey, setRerenderKey] = useState(0);
    useFocusEffect(
        useCallback(() => {
            setVegtableslistState(Vegtableslist);
            setRerenderKey(prevKey => prevKey + 1);
        }, []),
    );


    const typesCount = Object.entries(
        Vegtableslist.reduce((acc, item) => {
            acc[item.types] = (acc[item.types] || 0) + 1;
            return acc;
        }, {})
    ).map(([type, count]) => ({ type, count, isSelected: false }));

    const sortedTypesCount = typesCount.sort((a, b) => b.count - a.count);


    const [searchInput, setSearchInput] = useState('');
    const [handleButtonClick, setHandleButtonClick] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);

    const [favoriteItemIds, setFavoriteItemIds] = useState([]);


    const handleSearch = text => {
        setSearchInput(text);
        const filtered = Vegtableslist.filter(
            item =>
                item.title.toLowerCase().includes(text.toLowerCase()) ||
                item.types.toLowerCase().includes(text.toLowerCase()),
        );
        setFilteredCategories(filtered);
    };


    const handleCancel = () => {
        setSearchInput('');
        setFilteredCategories([]);
        setIsSearchActive(false);
    };


    const addToFavourite = id => {
        setVegtableslistState(prevState => {
            const updatedList = prevState.map(item =>
                item.id === id ? { ...item, favourite: !item.favourite } : item,
            );
            return updatedList;
        });
        const filtered = Vegtableslist.filter(item => item.id === id);
        filtered[0].favourite = !filtered[0].favourite;
    };

    const addToCart = id => {
        setVegtableslistState(prevState => {
            const updatedList = prevState.map(item =>
                item.id === id
                    ? { ...item, cartQuantity: item.cartQuantity === 0 ? 1 : 0 }
                    : item,
            );
            return updatedList;
        });
        const filtered = Vegtableslist.filter(item => item.id === id);
        filtered[0].cartQuantity = filtered[0].cartQuantity === 0 ? 1 : 0;
    };


    return (
        <View key={rerenderKey} style={Styles.bodycontainer}>
            <View style={Styles.firstviewStyle}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Categories")}>
                    <Image source={require("../assets/Vector.png")} style={Styles.iconstylevector}></Image>
                </TouchableOpacity>

                <Image source={require("../assets/Vegetables.png")} style={{ resizeMode: "cover", }}></Image>
            </View>
            <Text style={Styles.TxtStyle}>Tea</Text>

            <View style={Styles.SearchBarStyle}>
                <Image source={require("../assets/search.png")}
                    style={Styles.iconstylevector}></Image>
                <TextInput placeholder="Search"
                    onChangeText={handleSearch}
                    value={searchInput}
                    onFocus={() => setIsSearchActive(true)}
                    style={{
                        fontWeight: "700", fontSize: 17,
                        fontFamily: "R.font.sf pro text",
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

            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={{ flexDirection: "row", height: 170 }}>

                    <View style={{ flexDirection: "column" }}>
                        <FilterScreen namesofitems="Kashmiri Chai" numberofitems="3" />
                        <FilterScreen namesofitems="Kabusecha Tea" numberofitems="2" />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <FilterScreen namesofitems="Jungjak Tea" numberofitems="4" />
                        <FilterScreen namesofitems="Avocado Leaf Tea" numberofitems="5" />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <FilterScreen namesofitems="Masala Chai" numberofitems="3" />
                        <FilterScreen namesofitems="Gyokuro Tea" numberofitems="2" />
                    </View>
                </View>

            </ScrollView> */}
            <View>
                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                    alwaysBounceVertical={false}
                >
                    <View style={{ flexDirection: "row", height: 100, elevation: 10 }}>
                        <FilterScreen Vegtableslist={Vegtableslist}
                            typesCount={typesCount}
                            setFilteredCategories={setFilteredCategories}
                            setHandleButtonClick={setHandleButtonClick} />
                    </View>

                </ScrollView>
            </View>
            <View>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    // data={itemcardlist}
                    // data={searchinput.length > 0 ? filtercategories : itemcardlist}
                    data={
                        searchInput.length > 0 || handleButtonClick
                            ? filteredCategories
                            : Vegtableslist
                    }
                    renderItem={({ item }) => {
                        return (
                            <TouchableHighlight onPress={() => props.navigation.navigate("Teadetailsscreen", { items: item })} underlayColor={false}>

                                <View style={Styles.flatliststyle}>
                                    <Image source={item.images} style={{ resizeMode: "cover", height: "auto", width: 150, borderRadius: 10 }}></Image>
                                    <View style={Styles.txtstyles}>
                                        <Text style={Styles.mytitlestyle}>{item.title}</Text>
                                        <Text style={Styles.pricestyle}>{item.price}</Text>



                                        <View style={{ flexDirection: "row", marginTop: 8, }}>
                                            <TouchableHighlight
                                                onPress={() => {
                                                    addToFavourite(item.id);
                                                }}
                                                underlayColor={false}>
                                                <View style={Styles.myiconheartstyle}>
                                                    {item.favourite ? (
                                                        <Image
                                                            style={{ width: 22, height: 22 }}
                                                            source={item.filledheartred}
                                                        />
                                                    ) : (
                                                        <Image source={item.heartfavourite} />
                                                    )}
                                                </View>
                                            </TouchableHighlight>

                                            <TouchableHighlight
                                                onPress={() => {
                                                    addToCart(item.id);
                                                }}
                                                underlayColor={false}>
                                                {item.cartQuantity === 0 ? (
                                                    <View style={Styles.myiconshopstyle}>
                                                        <Image source={item.shoppingcard}></Image>
                                                    </View>
                                                ) : (
                                                    <View style={Styles.myiconshopstyle}>
                                                        <Image source={item.shoppingcard}></Image>
                                                        <View style={{ width: 20, height: 20, backgroundColor: "green", elevation: 5, borderRadius: 20, }}>
                                                            <Text style={{ color: 'white', alignSelf: "center" }}>{item.cartQuantity}</Text>
                                                        </View>
                                                    </View>
                                                )}
                                            </TouchableHighlight>

                                        </View>

                                    </View>

                                </View>
                            </TouchableHighlight>
                        );
                    }}
                    keyExtractor={item => item.id}
                >
                </FlatList>
            </View>


            {searchInput.length > 0 && filteredCategories.length === 0 && (
                <Text style={{ marginBottom: 150, marginLeft: 40, fontWeight: "bold" }}>Item {`${searchInput}`} Not Found </Text>
            )}
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <CustomebottomTab />
            </View>
        </View>




    );
};
const Styles = StyleSheet.create({
    bodycontainer: {
        backgroundColor: "#F6F5F5",
        flex: 1,
    },
    firstviewStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    iconstylevector: {
        marginLeft: 20,
        margin: 10,
        flexDirection: "row",
    },
    TxtStyle: {
        fontSize: 30,
        fontWeight: "700",
        fontFamily: "R.font.sf pro display",
        position: "absolute",
        marginTop: 110,
        marginLeft: 20,
        color: "#2D0C57",
    },
    SearchBarStyle: {
        backgroundColor: "#FFFF",
        flexDirection: "row",
        borderRadius: 30,
        elevation: 5,
        borderColor: "#FFD9D0E3",
        margintop: 5,
        marginLeft: 25,
        marginRight: 25,
        alignItems: "center",

    },
    scrolltxt: {
        flexDirection: "row",
    },
    flatliststyle: {
        backgroundColor: "#FFFF",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 12,
        elevation: 4,
        borderRadius: 10,
        borderColor: "#D9D0E3",
        flexDirection: "row",
    },
    txtstyles: {
        marginLeft: 20,
        marginRight: 10,
        padding: 10,
    },
    mytitlestyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#2D0C57",
        lineHeight: 22,
    },
    pricestyle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "green",
        margin: 5,
    },
    myiconheartstyle: {
        backgroundColor: "white",
        elevation: 5,
        // flex: 1,
        borderRadius: 5,
        height: 35,
        width: 55,
        margin: 10,
        color: "#FFD9D0E3",
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderColor: "FFD9D0E3",
        borderColor: "#D9D0E3",
        borderWidth: 1,
    },
    myiconshopstyle: {
        backgroundColor: "#0BCE83",
        elevation: 5,
        // flex: 1,
        height: 35,
        width: 55,
        borderRadius: 5,
        margin: 10,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        color: "#FFD9D0E3",
        borderColor: "FFD9D0E3",
        borderColor: "#D9D0E3",
        borderWidth: 1,
        flexDirection: "row",
    },

});
export default GotoTea;
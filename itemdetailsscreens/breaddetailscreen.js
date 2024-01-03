import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SliderBox } from "react-native-image-slider-box";
import { Directions } from 'react-native-gesture-handler';
import { Vegtableslist } from "../Alllarraysdata/breadarrays";
import AsyncStorage from '@react-native-async-storage/async-storage';
const Breaddetailscreen = ({ props, route }) => {
  const { items } = route.params;
  console.log({ items });
  const sliderimages = [
    require("../assets/bread4.jpg"),
    require("../assets/bread3.jpg"),
    require("../assets/bread2.jpg"),
  ];


  const [vegetables, setVegetables] = useState(items);

  const addToFavourite = id => {
    setVegetables(prevVegetables => ({
      ...prevVegetables,
      favourite: !prevVegetables.favourite,
    }));
    const filtered = Vegtableslist.filter(item => item.id === id);
    filtered[0].favourite = !filtered[0].favourite;
  };

  const addToCart = id => {
    setVegetables(prevVegetables => ({
      ...prevVegetables,
      cartQuantity: prevVegetables.cartQuantity === 0 ? 1 : 0,
    }));
    const filtered = Vegtableslist.filter(item => item.id === id);
    filtered[0].cartQuantity = filtered[0].cartQuantity === 0 ? 1 : 0;
  };


  return (
    <View style={styles.bodystyle}>
      <View style={styles.viewone}>
        <SliderBox
          images={sliderimages}
          sliderBoxWidth={300}
          sliderBoxHeight={200}
          dotColor="orange"
          inactiveDotColor="black"
          dotStyle={{ width: 15, height: 15, borderRadius: 10 }}
          imageLoadingColor="white"
          circleLoop={true}
          autoplay={true}
          autoplayInterval={3000}
          paginationBoxVerticalPadding={30}
          contentContainerStyle={{ padding: 0, margin: 0 }}
        />

      </View>


      <View style={styles.viewtwo}>
        <Text style={styles.titlestyle}>{vegetables.title}</Text>

        <Text style={styles.pricestyle}>{vegetables.price}</Text>

        <Text style={styles.kgstyle}>{vegetables.kg}</Text>

        <Text style={styles.descriptiontitlestyle}>{vegetables.descriptiontitle}</Text>

        <View style={{
          // backgroundColor: "red",
          height: 150,

        }}>

          <Text style={styles.descriptionstyle}>{vegetables.description}</Text>
        </View >

        <View style={{ flexDirection: "row", marginTop: 50, }}>


        <TouchableOpacity onPress={() => addToFavourite(vegetables.id)}>
            <View style={styles.heartstyle}>
              {vegetables.favourite ? (
                <Image
                  style={{ width: 22, height: 22 }}
                  source={vegetables.filledheartred}
                />
              ) : (
                <Image source={vegetables.heartfavourite} />
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => addToCart(vegetables.id)}>
            {vegetables.cartQuantity === 0 ? (
              <View style={styles.buttonstyle}>
                <Image
                  style={{
                    marginLeft: 40,
                    marginRight: 20,
                    alignSelf: 'center',
                  }}
                  source={vegetables.shoppingcard}></Image>
                <Text
                  style={{
                    marginLeft: 5,
                    marginRight: 10,
                    alignSelf: 'center',
                    color: '#FFFF',
                    fontWeight: 'bold',
                  }}>
                  ADD TO CARD
                </Text>
              </View>
            ) : (
              <View style={styles.buttonstyle}>
                <Image
                  style={{
                    marginLeft: 40,
                    marginRight: 20,
                    alignSelf: 'center',
                  }}
                  source={vegetables.shoppingcard}></Image>
                <Text
                  style={{
                    marginLeft: 5,
                    marginRight: 10,
                    alignSelf: 'center',
                    color: '#FFFF',
                    fontWeight: 'bold',
                  }}>
                  ITEM ADDED      {vegetables.cartQuantity}
                </Text>
              </View>
            )}
          </TouchableOpacity>

        </View>


      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bodystyle: {
    flex: 1,
  },
  viewone: {
    flex: 1.8,
    flexDirection: "column",
    elevation: 10,
  },
  viewtwo: {
    backgroundColor: "#F6F5F5",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 175,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
    shadowColor: "grey",
    borderWidth: 1,
    borderColor: "white",

  },
  titlestyle: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "700",
    color: "#2D0C57",
    letterSpacing: 0.41,
  },
  pricestyle: {
    fontSize: 26,
    marginTop: 15,
    marginLeft: 20,
    fontWeight: "700",
    color: "green",
    letterSpacing: 0.41,
  },
  kgstyle: {
    fontSize: 19,
    marginTop: 12,
    marginLeft: 20,
    fontWeight: "700",
    color: "#9586A8",
    letterSpacing: 0.41,
  },
  descriptiontitlestyle: {
    fontSize: 26,
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "700",
    color: "#2D0C57",
    letterSpacing: 0.41,
  },
  descriptionstyle: {
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "R.font.sf pro text",
    fontWeight: "400",
    color: "#9586A8",
    marginTop: 10,
    marginLeft: 20,
    alignSelf: "center",
    justifyContent: "center",
  },
  heartstyle: {
    backgroundColor: "#FFF6F5F5",
    elevation: 5,
    width: 80,
    height: 50,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    alignContent: "center",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFD9D0E3",


  },
  hearticonstyle: {
    alignSelf: "center",
    // alignItems: "center",
    width: 25,
    height: 25,
  },
  buttonstyle: {
    backgroundColor: "#0BCE83",
    width: 250,
    height: 50,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    padding: 10,
  },
});
export default Breaddetailscreen

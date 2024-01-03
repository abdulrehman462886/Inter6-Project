// import React, {useEffect, useState} from 'react';
// import {
//   TouchableOpacity,
//   StyleSheet,
//   View,
//   TextInput,
//   Image,
//   Text,
//   ScrollView,
// } from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import FilterScreen from '../components/textfilter';
// function GotovegtableScreen(props) {
//   const Vegtableslist = [
//     {
//       id: 1,
//       title: 'Vegetables',
//       price: '18.90 $',
//       images: require('../assets/veg1.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Vegetables',
//       discount: '5%',
//     },
//     {
//       id: 2,
//       title: 'Fruits',
//       price: '10.340 $',
//       images: require('../assets/veg2.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Fruits',
//       discount: '15%',
//     },
//     {
//       id: 3,
//       title: 'Breads',
//       price: '189.0 $',
//       images: require('../assets/veg3.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Breads',
//       discount: '10%',
//     },
//     {
//       id: 4,
//       title: 'Sweets',
//       price: '32.40$',
//       images: require('../assets/veg4.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Sweets',
//       discount: '10%',
//     },
//     {
//       id: 5,
//       title: 'Sweets',
//       price: '12.40$',
//       images: require('../assets/veg5.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Sweets',
//       discount: '8%',
//     },
//     {
//       id: 6,
//       title: 'Sweets',
//       price: '65.40$',
//       images: require('../assets/veg6.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Sweets',
//       discount: ' 3%',
//     },
//     {
//       id: 7,
//       title: 'Sweets',
//       price: '65.40$',
//       images: require('../assets/veg6.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Sweets',
//       discount: ' 3%',
//     },
//     {
//       id: 8,
//       title: 'Potatos',
//       price: '65.40$',
//       images: require('../assets/veg6.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Potatos',
//       discount: ' 3%',
//     },
//     {
//       id: 9,
//       title: 'Potatos',
//       price: '65.40$',
//       images: require('../assets/veg6.jpg'),
//       description:
//         'Vegetables are organized into 5 subgroups based on their nutrients: dark green; red and orange; beans, peas, and lentils; starchy; and other vegetables. Image.',
//       types: 'Potatos',
//       discount: ' 3%',
//     },
//   ];

//   const typesCount = Object.entries(
//     Vegtableslist.reduce((acc, item) => {
//       acc[item.types] = (acc[item.types] || 0) + 1;
//       return acc;
//     }, {}),
//   ).map(([type, count]) => ({type, count, isSelected: false}));

//   const [searchInput, setSearchInput] = useState('');
//   const [handleButtonClick, setHandleButtonClick] = useState(false);
//   const [filteredCategories, setFilteredCategories] = useState([]);

//   //search functionality function
//   const handleSearch = text => {
//     setSearchInput(text);
//     const filtered = Vegtableslist.filter(
//       item =>
//         item.title.toLowerCase().includes(text.toLowerCase()) ||
//         item.totalitems.toString().includes(text),
//     );
//     setFilteredCategories(filtered);
//   };

//   return (
//     <View style={styles.mainbody}>
//       <View style={styles.twoimagesbox}>
//         <TouchableOpacity
//           onPress={() => props.navigation.navigate('CategoriesScreen')}>
//           <Image
//             source={require('../assets/Vector.png')}
//             style={styles.vectoriconstyle}></Image>
//         </TouchableOpacity>
//         <Image source={require('../assets/Vegetables.png')}></Image>
//       </View>
//       <Text style={styles.textstyle}>Vegetables</Text>

//       <View style={styles.searchbarviewstyle}>
//         <Image
//           source={require('../assets/search.png')}
//           style={styles.searchiconstyles}></Image>
//         <TextInput
//           placeholder="Search"
//           onChangeText={handleSearch}
//           value={searchInput}
//           style={styles.searchinputstyle}></TextInput>
//       </View>

//       <ScrollView
//         horizontal={true}
//         style={{marginTop: 10, flexDirection: 'row'}}>
//         <View style={{flexDirection: 'row'}}>
//           <FilterScreen
//             Vegtableslist={Vegtableslist}
//             typesCount={typesCount}
//             setFilteredCategories={setFilteredCategories}
//             setHandleButtonClick={setHandleButtonClick}
//           />
//         </View>
//       </ScrollView>

//       <FlatList
//         data={
//           searchInput.length > 0 || handleButtonClick
//             ? filteredCategories
//             : Vegtableslist
//         }
//         renderItem={({item}) => {
//           return (
//             <View style={styles.flatliststyle}>
//               <Image
//                 source={item.images}
//                 style={styles.imagesflatliststyle}></Image>

//               <View style={{margin: 10}}>
//                 <Text style={styles.flatlisttitlestyle}>{item.title}</Text>
//                 <Text style={styles.flatlistpricestyle}>{item.price}</Text>

//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     margin: 5,
//                     justifyContent: 'space-evenly',
//                   }}>
//                   <View style={styles.heartviewstyle}>
//                     <Image
//                       style={styles.flatlisthearticonstyle}
//                       source={require('../assets/heart.png')}></Image>
//                   </View>

//                   <View style={styles.flatlisticonshopview}>
//                     <Image
//                       style={styles.flatlistshopiconstyle}
//                       source={require('../assets/shop.png')}></Image>
//                   </View>
//                 </View>
//               </View>

//               <View />
//             </View>
//           );
//         }}
//         keyExtractor={item => item.id.toString()}></FlatList>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   mainbody: {
//     backgroundColor: '#F6F5F5',
//     flex: 1,
//   },
//   twoimagesbox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   vectoriconstyle: {
//     marginTop: 60,
//     marginLeft: 30,
//   },
//   textstyle: {
//     fontSize: 30,
//     fontWeight: '900',
//     position: 'absolute',
//     marginTop: 100,
//     marginLeft: 25,
//     fontFamily: 'Robotos',
//     color: '#2D0C57',
//   },
//   searchiconstyles: {
//     marginLeft: 15,
//   },
//   searchinputstyle: {
//     fontSize: 17,
//     color: '#D9D0E3',
//     flex: 1,
//     marginLeft: 20,
//   },
//   searchbarviewstyle: {
//     backgroundColor: '#FFFF',
//     borderRadius: 30,
//     elevation: 5,
//     marginTop: 150,
//     marginLeft: 25,
//     marginRight: 20,
//     position: 'absolute',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width: '90%',
//     borderColor: '#FFFF',
//     borderWidth: 1,
//   },
//   flatliststyle: {
//     backgroundColor: '#F6F5F5',
//     margin: 12,
//     flex: 1,
//     borderRadius: 8,
//     elevation: 5,
//     borderColor: '#FFFF',
//     borderWidth: 1,
//     shadowColor: 'grey',
//     flexDirection: 'row',
//   },
//   imagesflatliststyle: {
//     height: 120,
//     width: '50%',
//     borderRadius: 4,
//     resizeMode: 'contain',
//   },

//   flatlisttitlestyle: {
//     fontSize: 22,
//     fontWeight: '800',
//     color: '#2D0C57',
//     margin: 5,
//   },

//   flatlistpricestyle: {
//     fontSize: 16,
//     fontWeight: '800',
//     color: 'rgb(100,120,22)',
//     margin: 4,
//   },
//   flatlisthearticonstyle: {
//     width: 20,
//     height: 20,
//     alignSelf: 'center',
//   },
//   heartviewstyle: {
//     backgroundColor: '#FFFF',
//     marginLeft: 10,
//     marginRight: 25,
//     width: 50,
//     height: 30,
//     borderRadius: 4,
//     elevation: 8,
//     borderWidth: 1,
//     borderColor: '#FFF',
//     justifyContent: 'center',
//     shadowColor: 'black',
//   },

//   flatlisticonshopview: {
//     backgroundColor: 'green',
//     width: 60,
//     height: 30,
//     justifyContent: 'center',
//     borderRadius: 5,
//     elevation: 10,
//     borderColor: '#FFFF',
//   },
//   flatlistshopiconstyle: {
//     width: 25,
//     height: 25,
//     alignSelf: 'center',
//   },
// });

// export default GotovegtableScreen;










































// import React, { useState, useEffect } from "react";
// import {
//     Image, SafeAreaView,
//     StyleSheet, Text, View,
//     Button, TouchableHighlight,
// } from "react-native";
// import { FlatList, ScrollView, TextInput, TouchableOpacity, } from "react-native-gesture-handler";
// import FilterScreen from "../components/filtertxt";
// import Categories from "../AllScreens/Categories";
// import Products from "../bottomscreens/User";
// import User from "../bottomscreens/Products";
// const GotoVegtables = (props) => {
//     const Vegtableslist = [
//         {
//             id: 1,
//             title: "Boston Lettuce ",
//             price: "1.10  €/piece",
//             imageslist: require("../assets/vegone.png"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             kg: "~150 gr/piece",
//             descriptiontitle: "Spain",
//             type: "Boston Lettuce",
//             description: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
//         },
//         {
//             id: 2,
//             title: "Boston Lettuce ",
//             price: "1.10  €/piece",
//             imageslist: require("../assets/vegone.png"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             kg: "~150 gr/piece",
//             type: "Boston Lettuce",
//             descriptiontitle: "Spain",
//             description: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
//         },
//         {
//             id: 3,
//             title: "Boston Lettuce",
//             price: "1.10  €/piece",
//             imageslist: require("../assets/vegone.png"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             kg: "~150 gr/piece",
//             descriptiontitle: "Spain",
//             type: "Boston Lettuce",
//             description: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
//         },
//         {
//             id: 4,
//             title: "Boston Lettuce",
//             price: "1.10  €/piece",
//             imageslist: require("../assets/vegone.png"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             kg: "~150 gr/piece",
//             type: "Boston Lettuce",
//             descriptiontitle: "Spain",
//             description: "Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, although it is also seen in other kinds of food, such as soups, sandwiches and wraps; it can also be grilled.",
//         },
//         {
//             id: 5,
//             title: "Purple Cauliflower",
//             price: "1.85 € / piece",
//             kg: "~100 gr/piece",
//             imageslist: require("../assets/vegtwo.png"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "New York",
//             type: "Purple Cauliflower",
//             description: "Vegetable, the edible product of a herbaceous plant-that is, a plant with a soft stem, as distinguished from the edible nuts and fruits produced by plants with woody stems such as shrubs and trees. Vegetables can be grouped according to the edible part of each plant: leaves (lettuce), stalks (celery), roots (carrot), tubers (potato), bulbs (onion), and flowers (broccoli). In addition, fruits such as the tomato and seeds such as the pea are commonly considered vegetables.",
//         },
//         {
//             id: 6,
//             title: "Lobia ",
//             price: "1.45 € / piece",
//             imageslist: require("../assets/vegthree.png"),
//             kg: "~450 gr/piece",
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Pakistan",
//             type: "Lobia ",
//             description: "Vegetables play a crucial role in maintaining a healthy diet as they are the edible parts of plants. Throughout the history of human civilization, we have acquired knowledge about growing various vegetables. These plant-based foods offer essential vitamins, dietary fiber, minerals, and carbohydrates, all of which support the body’s metabolism and overall health. Below, you’ll find a list of different vegetable names to explore and include in your diet.",
//         },
//         {
//             id: 7,
//             title: "Purple Carrot",
//             price: "1.99 € / piece",
//             kg: "~133 gr/piece",
//             imageslist: require("../assets/vegthree.png"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Indonesia",
//             type: "Purple Carrot ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 8,
//             title: "Purple Beetroot",
//             price: "1.99 € / piece",
//             kg: "~73 gr/piece",
//             imageslist: require("../assets/newveg1.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Bahrain",
//             type: "Purple Beetroot ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 9,
//             title: "Potato",
//             price: "1.99 € / piece",
//             kg: "~78 gr/piece",
//             imageslist: require("../assets/newveg2.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Austria",
//             type: "Potato ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 10,
//             title: "Mushroom",
//             price: "1.99 € / piece",
//             kg: "~34 gr/piece",
//             imageslist: require("../assets/newveg3.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Australia",
//             type: "Mushroom ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 11,
//             title: "Spinach",
//             price: "1.99 € / piece",
//             kg: "~101 gr/piece",
//             imageslist: require("../assets/newveg4.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Chile",
//             type: "Spinach ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 12,
//             title: "Tomato",
//             price: "1.99 € / piece",
//             kg: "~405 gr/piece",
//             imageslist: require("../assets/newveg5.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Afghanistan",
//             type: "Tomato ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 13,
//             title: "Tomato",
//             price: "1.99 € / piece",
//             kg: "~405 gr/piece",
//             imageslist: require("../assets/newveg5.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Afghanistan",
//             type: "Tomato ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 14,
//             title: "Pumpkin",
//             price: "1.99 € / piece",
//             kg: "~453 gr/piece",
//             imageslist: require("../assets/newveg6.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "America",
//             type: "Pumpkin ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 15,
//             title: "Green Onion",
//             price: "1.99 € / piece",
//             kg: "~773 gr/piece",
//             imageslist: require("../assets/newveg8.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Brazail",
//             type: "Green Onion ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 16,
//             title: "Green Onion",
//             price: "1.99 € / piece",
//             kg: "~773 gr/piece",
//             imageslist: require("../assets/newveg8.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Brazail",
//             type: "Green Onion ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 17,
//             title: "Green Onion",
//             price: "1.99 € / piece",
//             kg: "~773 gr/piece",
//             imageslist: require("../assets/newveg8.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Brazail",
//             type: "Green Onion ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 18,
//             title: "Green Onion",
//             price: "1.99 € / piece",
//             kg: "~224 gr/piece",
//             imageslist: require("../assets/newveg9.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "China",
//             type: "Green Onion ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 19,
//             title: "Broccoli",
//             price: "1.99 € / piece",
//             kg: "~783 gr/piece",
//             imageslist: require("../assets/newveg10.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Ghana",
//             type: "Broccoli ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 20,
//             title: "Celery",
//             price: "1.99 € / piece",
//             kg: "~345 gr/piece",
//             imageslist: require("../assets/newveg11.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Iran",
//             type: "Celery ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 21,
//             title: "Eggplan",
//             price: "1.99 € / piece",
//             kg: "~653 gr/piece",
//             imageslist: require("../assets/newveg333.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Cuba",
//             type: "Eggplan ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 22,
//             title: "Asparagus",
//             price: "1.99 € / piece",
//             kg: "~867 gr/piece",
//             imageslist: require("../assets/newveg2222.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Bangladesh",
//             type: "Asparagus ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 23,
//             title: "Okra",
//             price: "1.99 € / piece",
//             kg: "~432 gr/piece",
//             imageslist: require("../assets/newveg6.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "India",
//             type: "Okra ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 24,
//             title: "Okra",
//             price: "1.99 € / piece",
//             kg: "~432 gr/piece",
//             imageslist: require("../assets/newveg6.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "India",
//             type: "Okra ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 25,
//             title: "Okra",
//             price: "1.99 € / piece",
//             kg: "~432 gr/piece",
//             imageslist: require("../assets/newveg6.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "India",
//             type: "Okra ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 26,
//             title: "Okra",
//             price: "1.99 € / piece",
//             kg: "~432 gr/piece",
//             imageslist: require("../assets/newveg6.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "India",
//             title: "Okra ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 27,
//             title: "Okra",
//             price: "1.99 € / piece",
//             kg: "~432 gr/piece",
//             imageslist: require("../assets/newveg6.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "India",
//             type: "Okra ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 28,
//             title: "Capsicum",
//             price: "1.99 € / piece",
//             kg: "~76 gr/piece",
//             imageslist: require("../assets/newveg8.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Canada",
//             type: "Capsicum ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 29,
//             title: "Capsicum",
//             price: "1.99 € / piece",
//             kg: "~76 gr/piece",
//             imageslist: require("../assets/newveg8.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Canada",
//             type: "Capsicum ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//         {
//             id: 30,
//             title: "Capsicum",
//             price: "1.99 € / piece",
//             kg: "~76 gr/piece",
//             imageslist: require("../assets/newveg8.jpg"),
//             iconshop: require("../assets/shopping-cart.png"),
//             iconfavor: require("../assets/heart.png"),
//             descriptiontitle: "Canada",
//             type: "Capsicum ",
//             description: "Vegetables Name: Are you starting to learn English, or do you have a young English language learner in your family? If you want to expand your vocabulary, here’s a great tip for you. When you’re learning a new language, it’s essential to begin with words that you encounter in your daily life. This includes names of fruits, vegetables, animals, birds, and common items.",
//         },
//     ];


//     const typesCount = Object.entries(
//         Vegtableslist.reduce((acc, item) => {
//             acc[item.type] = (acc[item.type] || 0) + 1;
//             return acc;
//         }, {}),
//     ).map(([type, count]) => ({ type, count, isSelected: false }));

//     const [searchInput, setSearchInput] = useState('');
//     const [handleButtonClick, setHandleButtonClick] = useState(false);
//     const [filteredCategories, setFilteredCategories] = useState([]);

//     //search functionality function
//     const handleSearch = text => {
//         setSearchInput(text);
//         const filtered = Vegtableslist.filter(
//             item =>
//                 item.title.toLowerCase().includes(text.toLowerCase()) ||
//                  item.type.toString().includes(text),
//                 //  item.totalitems.toString().includes(text),
//         );
//         setFilteredCategories(filtered);
//     };
//     return (

//         <View style={Styles.bodycontainer}>
//             <View style={Styles.firstviewStyle}>
//                 <TouchableOpacity onPress={() => props.navigation.navigate("Categories")}>
//                     <Image source={require("../assets/Vector.png")} style={Styles.iconstylevector}></Image>
//                 </TouchableOpacity>

//                 <Image source={require("../assets/Vegetables.png")} style={{ resizeMode: "cover", }}></Image>
//             </View>
//             <Text style={Styles.TxtStyle}>Vegetables</Text>

//             <View style={Styles.SearchBarStyle}>
//                 <Image source={require("../assets/search.png")}
//                     style={Styles.iconstylevector}></Image>
//                 <TextInput
//                     placeholder="Search"
//                     onChangeText={handleSearch}
//                     value={searchInput}
//                     style={{
//                         fontWeight: "700", fontSize: 17,
//                         fontFamily: "R.font.sf pro text",
//                         flex: 1,
//                     }}>
//                 </TextInput>
//             </View>

//             <ScrollView horizontal={true}
//                 showsHorizontalScrollIndicator={false}
//                 directionalLockEnabled={true}
//                 alwaysBounceVertical={false}
//             >
//                 <View style={{ flexDirection: "row", height: 190, elevation: 10 }}>
//                     <FilterScreen Vegtableslist={Vegtableslist}
//                         typesCount={typesCount}
//                         setFilteredCategories={setFilteredCategories}
//                         setHandleButtonClick={setHandleButtonClick} />
//                 </View>

//             </ScrollView>




//             <FlatList
//                 showsVerticalScrollIndicator={false}
//                 // data={itemcardlist}
//                 data={
//                     searchInput.length > 0 || handleButtonClick
//                         ? filteredCategories
//                         : Vegtableslist

//                 }
//                 renderItem={({ item }) => {
//                     return (

//                         <TouchableHighlight
//                             onPress={() =>
//                                 props.navigation.navigate("Vegtabledetailsscreen", { items: item })} underlayColor={false}>
//                             <View style={Styles.flatliststyle}>
//                                 <Image source={item.imageslist} style={{ resizeMode: "cover", height: "auto", width: 150, borderRadius: 10 }}></Image>
//                                 <View style={Styles.txtstyles}>
//                                     <Text style={Styles.mytitlestyle}>{item.title}</Text>
//                                     <Text style={Styles.pricestyle}>{item.price}</Text>
//                                     <View style={{ flexDirection: "row", marginTop: 8, }}>
//                                         <TouchableHighlight >
//                                             <View style={Styles.myiconheartstyle}>
//                                                 <Image source={item.iconfavor} ></Image>
//                                             </View>
//                                         </TouchableHighlight>

//                                         <TouchableHighlight >
//                                             <View style={Styles.myiconshopstyle}>
//                                                 <Image source={item.iconshop}></Image>
//                                             </View>
//                                         </TouchableHighlight>

//                                     </View>

//                                 </View>

//                             </View>

//                         </TouchableHighlight>
//                     );
//                 }}
//                 keyExtractor={item => item.id}
//             >

//             </FlatList>
//         </View>



//     );
// };
// const Styles = StyleSheet.create({
//     bodycontainer: {
//         backgroundColor: "#F6F5F5",
//         flex: 1,
//     },
//     firstviewStyle: {
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//     },
//     iconstylevector: {
//         marginLeft: 20,
//         margin: 10,
//         flexDirection: "row",
//     },
//     TxtStyle: {
//         fontSize: 30,
//         fontWeight: "700",
//         fontFamily: "R.font.sf pro display",
//         position: "absolute",
//         marginTop: 110,
//         marginLeft: 20,
//         color: "#2D0C57",
//     },
//     SearchBarStyle: {
//         backgroundColor: "#FFFF",
//         flexDirection: "row",
//         borderRadius: 30,
//         elevation: 5,
//         borderColor: "#FFD9D0E3",
//         margintop: 5,
//         marginLeft: 25,
//         marginRight: 25,
//         alignItems: "center",

//     },
//     scrolltxt: {
//         flexDirection: "row",
//     },
//     flatliststyle: {
//         backgroundColor: "#FFFF",
//         marginTop: 20,
//         marginLeft: 10,
//         marginRight: 10,
//         marginBottom: 12,
//         // margin: 20,
//         elevation: 4,
//         borderRadius: 10,
//         borderColor: "#D9D0E3",
//         flexDirection: "row",

//     },
//     txtstyles: {
//         marginLeft: 20,
//         marginRight: 10,
//         padding: 10,
//     },
//     mytitlestyle: {
//         fontSize: 18,
//         fontWeight: "bold",
//         color: "#2D0C57",
//         lineHeight: 22,
//     },
//     pricestyle: {
//         fontSize: 16,
//         fontWeight: "bold",
//         color: "green",
//         margin: 5,
//     },
//     myiconheartstyle: {
//         backgroundColor: "white",
//         elevation: 5,
//         // flex: 1,
//         borderRadius: 5,
//         height: 35,
//         width: 55,
//         margin: 10,
//         color: "#FFD9D0E3",
//         padding: 5,
//         alignItems: "center",
//         justifyContent: "center",
//         alignSelf: "center",
//         borderColor: "#D9D0E3",
//         borderWidth: 1,
//     },
//     myiconshopstyle: {
//         backgroundColor: "#0BCE83",
//         elevation: 5,
//         // flex: 1,
//         height: 35,
//         width: 55,
//         borderRadius: 5,
//         margin: 10,
//         padding: 5,
//         alignItems: "center",
//         justifyContent: "center",
//         alignSelf: "center",
//         color: "#FFD9D0E3",
//         borderColor: "FFD9D0E3",
//         borderColor: "#D9D0E3",
//         borderWidth: 1,
//     },


//     viewstyle: {
//         flexDirection: "row",
//         margin: 5,
//         marginLeft: 18,
//         marginRight: 10,
//         marginBottom: 5,
//     },

//     txt: {
//         color: "black",
//         fontSize: 12,
//         fontWeight: "bold",
//         padding: 10,
//         borderRadius: 30,
//         height: 35,
//     },

// });
// export default GotoVegtables;








// import AsyncStorage from '@react-native-async-storage/async-storage';

// const storeFavoriteItems = async (favoriteItemIds) => {
//   try {
//     await AsyncStorage.setItem('favoriteItems', JSON.stringify(favoriteItemIds));
//   } catch (error) {
//     console.error('Error storing favorite items:', error);
//   }
// };

// const getFavoriteItems = async () => {
//   try {
//     const favoriteItems = await AsyncStorage.getItem('favoriteItems');
//     return favoriteItems ? JSON.parse(favoriteItems) : [];
//   } catch (error) {
//     console.error('Error retrieving favorite items:', error);
//     return [];
//   }
// };














// // Inside GotoVegtables component
// const [favoriteItemIds, setFavoriteItemIds] = useState([]);

// useEffect(() => {
//   getFavoriteItems().then((storedFavoriteItems) => {
//     setFavoriteItemIds(storedFavoriteItems);
//   });
// }, []);

// const toggleFavorite = (itemId) => {
//   const updatedFavorites = [...favoriteItemIds];
//   const index = updatedFavorites.indexOf(itemId);

//   if (index !== -1) {
//     updatedFavorites.splice(index, 1); // Remove from favorites
//   } else {
//     updatedFavorites.push(itemId); // Add to favorites
//   }

//   setFavoriteItemIds(updatedFavorites);
//   storeFavoriteItems(updatedFavorites);
// };









// // Inside FlatList renderItem function
// <TouchableHighlight
//   onPress={() =>
//     props.navigation.navigate("Vegtabledetailsscreen", { items: item, toggleFavorite })
//   }
//   underlayColor={false}
// >
//   <View style={Styles.flatliststyle}>
//     {/* ... (your existing code) ... */}
//     <TouchableHighlight underlayColor={false} onPress={() => toggleFavorite(item.id)}>
//       <View style={Styles.myiconheartstyle}>
//         <Image
//           source={favoriteItemIds.includes(item.id) ? filledHeartIcon : heartIcon}
//         />
//       </View>
//     </TouchableHighlight>
//     {/* ... (your existing code) ... */}
//   </View>
// </TouchableHighlight>




// // // Inside GotoVegtables component, when navigating to Vegtabledetailsscreen
// // <TouchableHighlight
// //   onPress={() =>
// //     props.navigation.navigate("Vegtabledetailsscreen", { items: item, toggleFavorite })
// //   }
// //   underlayColor={false}
// // >
// //   {/* ... (your existing code) ... */}
// // </TouchableHighlight>




// // // Inside Vegtabledetailsscreen component
// // <TouchableOpacity onPress={() => toggleFavorite(items.id)}>
// //   <View style={styles.heartstyle}>
// //     <Image
// //       style={styles.hearticonstyle}
// //       source={favoriteItemIds.includes(items.id) ? filledHeartIcon : heartIcon}
// //     />
// //   </View>
// // </TouchableOpacity>
















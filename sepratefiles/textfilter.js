// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// const FilterScreen = ({ Vegtableslist, typesCount, setFilteredCategories, setHandleButtonClick }) => {
//   const [selectedItems, setSelectedItems] = useState(typesCount);

//   const handleButtonClick = type => {
//     const filteredCategories = Vegtableslist.filter(item => item.types === type);
//     setFilteredCategories(filteredCategories);
//     setHandleButtonClick(true);
//     setSelectedItems(prev => {
//       return prev.map(item => ({
//         ...item,
//         isSelected: item.type === type ? true : false,
//       }));
//     });
//   };

//   return (
//     <FlatList
//       data={selectedItems}
//       showsHorizontalScrollIndicator={false}
//       showsVerticalScrollIndicator={false}
//       numColumns={Math.ceil(typesCount.length / 2)}
//       renderItem={({ item }) => {
//         return (
//           <View style={Styles.viewstyle}>
//             <TouchableOpacity
//               onPress={() => {
//                 handleButtonClick(item.type);
//               }}
//               style={{
//                 backgroundColor: item.isSelected ? '#E2CBFF' : '#FFFF',
//                 borderRadius: 30,
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}>
//               {item.isSelected && (
//                 <Text style={{ marginLeft: 5, textAlign: 'center' }}>✔️</Text>
//               )}
//               <Text style={Styles.txt}>
//                 {item.type} {item.count}
//               </Text>
//             </TouchableOpacity>
//           </View>
//         );
//       }}
//     />
//   );
// };

// const Styles = StyleSheet.create({
//   viewstyle: {
//     flexDirection: 'row',
//     marginTop: 18,
//     marginLeft: 25,
//     marginBottom: 8,
//     position: 'relative',
//   },
//   txt: {
//     color: 'black',
//     fontSize: 12,
//     fontWeight: 'bold',
//     padding: 8,
//   },
// });

// export default FilterScreen;


import React, { useState } from "react";
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const FilterScreen = ({ Vegtableslist, typesCount, setFilteredCategories, setHandleButtonClick }) => {
  const [selectedItems, setSelectedItems] = useState(typesCount);
  const [prevSelectedType, setPrevSelectedType] = useState(null);
  const handleButtonClick = type => {
    if (type === prevSelectedType) {
      // If the same button is clicked again, show the previous whole list
      setFilteredCategories(Vegtableslist);
      setHandleButtonClick(false);
      setSelectedItems(typesCount.map(item => ({ ...item, isSelected: false })));
      setPrevSelectedType(null);
    } else {
      // Apply a new filter based on the clicked button
      const filteredCategories = Vegtableslist.filter(item => item.types === type);
      setFilteredCategories(filteredCategories);
      setHandleButtonClick(true);
      setSelectedItems(prev => {
        return prev.map(item => ({
          ...item,
          isSelected: item.type === type ? !item.isSelected : item.isSelected,
        }));
      });
      setPrevSelectedType(type);
    }
  };

  return (
    <FlatList
      data={selectedItems.sort((a, b) => b.title - a.title)}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      numColumns={Math.ceil(typesCount.length / 2)}
      renderItem={({ item }) => {
        const isSelected = selectedItems.find(selectedItem => selectedItem.type === item.type)?.isSelected;
        return (
          <View style={Styles.viewstyle}>
            <TouchableOpacity
              onPress={() => {
                handleButtonClick(item.type);
              }}
              style={{
                backgroundColor: isSelected ? '#E2CBFF' : '#FFFF',
                borderRadius: 30,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isSelected && (
                <Text style={{ marginLeft: 5, textAlign: 'center' }}>✔️</Text>
              )}
              <Text style={Styles.txt}>
                {item.type} {item.count}
              </Text>
            </TouchableOpacity>
          </View>
        );
      }}
    />
  );
};

const Styles = StyleSheet.create({
  viewstyle: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 25,
    marginBottom: 8,
  },
  txt: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    padding: 10,
  },
});

export default FilterScreen;










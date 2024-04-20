import { Dimensions, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const {height, width} = Dimensions.get('window')

const SearchBar = () => {
  return (
    <View style={styles.mainContainer}>
      <FontAwesomeIcon style={styles.icon} icon={faSearch} size={20} />
      <TextInput style={styles.input} placeholder="Search here"></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    
    width: "100%",
    height: 55,
    display: "flex",
    flexDirection: "row",
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: "center",
    borderColor: "#F0F0F0",
    paddingRight: 10,
    
  },

  icon: {
    marginLeft: 15,
  },
  input: {
    paddingLeft: 15,
    width: "90%",
    fontSize: 20,
  },
});

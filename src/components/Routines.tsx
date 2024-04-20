import { Dimensions, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import RoutinesList from "../helpers/RoutinesList";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
const { width, height } = Dimensions.get("window");

const images = {
  RoutineIcon1: require("../../assets/images/RoutineIcon1.png"),
  RoutineIcon2: require("../../assets/images/RoutineIcon2.png"),
};
const Routines = () => {

    const [showMoreRoutines, setShowMoreRoutines] = useState(false);

  const toggleMoreRoutines = () => {
    setShowMoreRoutines(!showMoreRoutines);
  };

  return (
    <View style={{ marginHorizontal: width * 0.05, marginTop:30}}>
      <Text style={{ fontSize: 17.4, color: "#101018", fontWeight: "500" }}>
        Today's Routines
      </Text>
      <Text style={{ fontSize: 14, color: "#A0A0A0", marginTop: 6 }}>
        You have 4 routines remaining for the day
      </Text>
      <RoutinesList
        name="Drinking Water"
        img={images.RoutineIcon1}
        type="Consumable"
        time="9:30 AM"
        flower="8🌻"
      />

      <RoutinesList
        name="Amrutam Kuntal Care Hair Saloon"
        img={images.RoutineIcon2}
        type="Application Based"
        time="2:00 PM"
      />

      <View style={{ display: showMoreRoutines ? 'flex' : 'none' }}>
        <RoutinesList
          name="Prepare Food"
          img={images.RoutineIcon1}
          type="Application Based"
          time="3:30 AM"
          flower="3🌻"
        />

        <RoutinesList
          name="Excercise and Yoga"
          img={images.RoutineIcon2}
          type="Consumable"
          time="9:30 AM"
        />
      </View>

      <Pressable
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop:5
        }}
        onPress={toggleMoreRoutines}
      >
        <Text style={{color:'#A0A0A0'}} >{showMoreRoutines ? 'Less Routines' : 'More Routines (2)'}</Text>
        {showMoreRoutines ? <FontAwesomeIcon icon={faAngleUp} size={24} /> : <FontAwesomeIcon icon={faAngleDown} size={24} />}
      </Pressable>
    </View>
  );
};

export default Routines;

const styles = StyleSheet.create({});

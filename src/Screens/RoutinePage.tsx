import { Dimensions, StyleSheet, View, Text } from "react-native";
import React from "react";
import RoutineHeader from "../components/RoutinePageCompo/RoutineHeader";
const { width, height } = Dimensions.get("window");

const RoutinePage = ({ navigation }: any) => {
  return (
    <>
      <View style={{ height: "100%" }}>
        <RoutineHeader navigation={navigation} />
      </View>
    </>
  );
};

export default RoutinePage;

const styles = StyleSheet.create({});

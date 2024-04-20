import { Dimensions, StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import DialogBox from "./DialogBox";
import ButtonGreen from "../../helpers/ButtonGreen";
const { width, height } = Dimensions.get("window");

const RoutineHeader = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  return (
    <View style={{ height: "100%", flex: 1, justifyContent: "space-between" }}>
      <View
        style={{
          marginTop: "9%",
          height: "25%",
          backgroundColor: "#ECFFDC",
          borderBottomEndRadius: 30,
          borderBottomLeftRadius: 30,
          justifyContent: "space-evenly",
        }}
      >
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <FontAwesomeIcon
            style={{ marginHorizontal: width * 0.04, color: "#101018" }}
            icon={faArrowLeft}
            size={24}
          />
        </Pressable>
        <View style={{ marginHorizontal: width * 0.04, marginBottom: 10 }}>
          <Text style={{ fontSize: 30, color: "#101018" }}>Routines</Text>
          <Text style={{ fontSize: 15, color: "#A0A0A0" }}>
            You have two routines currently
          </Text>
        </View>
        <DialogBox
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </View>

      <Pressable
        onPress={() => setIsModalVisible(true)}
        style={{ marginHorizontal: 12, marginBottom: 10 }}
      >
        <ButtonGreen name="Add Routine" />
      </Pressable>
    </View>
  );
};

export default RoutineHeader;

const styles = StyleSheet.create({});

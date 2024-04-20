import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Routines from "../components/Routines";
import Myroutine from "../components/DetailsScreenCompo/Myroutine";
import Explore from "../components/DetailsScreenCompo/Explore";
import Frame from "../components/DetailsScreenCompo/Frame";
import ExploreCards from "../components/DetailsScreenCompo/ExploreCards";
const { width, height } = Dimensions.get("window");

const Details = ({ navigation }: any) => {
  return (
    <ScrollView style={{backgroundColor:'#FAF9F6'}}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "15%",
          marginHorizontal: width * 0.04,
        }}
      >
        <Pressable
          style={{ justifyContent: "center" }}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <FontAwesomeIcon icon={faAngleLeft} size={20} />
        </Pressable>
        <Text style={{ fontSize: 22, fontWeight: "500", marginLeft: 10 }}>
          Routines
        </Text>
      </View>

        <Routines />

        <Myroutine navigation={navigation} />

        <Explore />

        <Frame />

        <ExploreCards />
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({});

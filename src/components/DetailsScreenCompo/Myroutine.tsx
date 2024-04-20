import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import * as Progress from "react-native-progress";
import React from "react";
import { categories } from "../../../assets/Constants/MyroutineConstants";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const { width, height } = Dimensions.get("window");

const truncateText = (text: string) => {
  if (typeof text !== "string") {
    return "";
  }
  if (text.length <= 12) {
    return text;
  } else {
    return text.slice(0, 12) + "...";
  }
};

const TruncatedText = ({ text }: any) => {
  const truncated = truncateText(text);
  return (
    <Text style={{ fontSize: 14.5, fontWeight: "600", color: "#101018" }}>
      {truncated}
    </Text>
  );
};

const Myroutine = ({ navigation, setShow }: any) => {
  return (
    <View style={{ marginTop: 24 }}>
      <Text
        style={{
          fontSize: 17.4,
          fontWeight: "500",
          marginHorizontal: width * 0.04,
          color: "#101018",
        }}
      >
        My Routine
      </Text>
      <ScrollView style={{ marginTop: 18 }} horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <Pressable
              onPress={() => setShow(true)}
              style={{
                height: 250,
                width: 165,
                borderRadius: 14,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: width * 0.04,
                marginRight: 7,
                borderWidth: 1,
                borderColor: "#A0A0A0",
              }}
              key={index}
            >
              <Image
                source={category.image}
                style={{ height: "58%", width: "90%", borderRadius: 14 }}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "88%",
                  marginTop: 7,
                }}
              >
                <TruncatedText text={category.name} />
                <Text
                  style={{ fontWeight: "700", fontSize: 15, color: "#101018" }}
                >
                  {category.day}
                </Text>
              </View>

              <View
                style={{ alignItems: "flex-start", width: "88%", marginTop: 6 }}
              >
                <Text
                  style={{ color: "#A0A0A0", fontSize: 12, marginBottom: 8 }}
                >
                  {category.reminders}
                </Text>
                <Progress.Bar
                  color="#3A643B"
                  progress={category.progressBar}
                  width={145}
                  height={4}
                  borderWidth={0}
                  unfilledColor="#B2BEB5"
                />
                <Text style={{ color: "#A0A0A0", fontSize: 12, marginTop: 3 }}>
                  {category.progress}
                </Text>
              </View>
            </Pressable>
          );
        })}

        <Pressable
          style={{
            height: 250,
            width: 165,
            borderRadius: 14,
            alignItems: "center",
            marginLeft: width * 0.04,
            marginRight: width * 0.04,
            borderWidth: 1,
            borderColor: "#A0A0A0",
          }}
          onPress={() => navigation.navigate("RoutinePage")}
        >
          <View
            style={{
              height: "58%",
              width: "90%",
              borderRadius: 14,
              borderWidth: 2,
              borderStyle: "dashed",
              borderColor: "#3A643B",
              marginTop: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesomeIcon icon={faPlus} size={30} color="#3A643B" />
          </View>

          <Text
            style={{
              marginTop: 20,
              color: "#3A643B",
              fontSize: 17,
              borderBottomWidth: 1,
              borderColor: "#3A643B",
            }}
          >
            Add New Routine
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default Myroutine;

const styles = StyleSheet.create({});

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import datas from "../../../assets/Constants/Flatlist";
const { width, height } = Dimensions.get("window");

const Cards = ({ items }: any) => {
  return (
    <View
      style={{
        marginHorizontal: width * 0.04,
        marginTop: 15,
      }}
    >
      <View
        style={{
          height: 264,
          width: 165,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: "#A0A0A0",
        }}
      >
        <Image
          source={items.image}
          style={{ height: "53%", width: "90%", borderRadius: 14 }}
        />
        <View
          style={{
            width: "88%",
            marginTop: 8,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 16 , color:'#101018'}}>{items.title}</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "88%",
            alignItems: "center",
            marginTop: 7,
          }}
        >
          <Image
            style={{ height: 18, width: 18, resizeMode: "contain" }}
            source={require("../../../assets/images/Calender.png")}
          />
          <Text style={{ marginLeft: 7, color: "#A0A0A0", fontSize: 14 }}>
            {items.duration}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            width: "88%",
            alignItems: "center",
            marginTop: 7,
          }}
        >
          <Image
            style={{ height: 18, width: 18, resizeMode: "contain" }}
            source={require("../../../assets/images/Cardboard.png")}
          />
          <Text style={{ marginLeft: 7, color: "#A0A0A0", fontSize: 14 }}>
            {items.remainder}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            right: 21,
            top: 18,
            padding: 5,
            backgroundColor: "white",
            borderRadius: 50,
          }}
        >
          <FontAwesomeIcon icon={faHeart} size={16} color="#3A643B" />
        </View>
      </View>
    </View>
  );
};

const ExploreCards = () => {
  return (
    <FlatList
      data={datas}
      renderItem={({ item }) => <Cards items={item} />}
      keyExtractor={(item) => item.id}
      numColumns={2}
      scrollEnabled={false}
    />
  );
};

export default ExploreCards;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TruncatedText from "./TruncatedText";
import { AntDesign } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const RoutinesList = ({ name, img, type, time, flower }: any) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
            // backgroundColor: "gray",
          borderBottomWidth: 1,
          borderBottomColor: "#A0A0A0",
          height: 90,
          marginTop:8,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <View style={{ height: "100%", justifyContent: "center" }}>
          <Image style={{ height: 60, width: 60 }} source={img}></Image>
        </View>
        <View
          style={{
            flex: 1,
            paddingLeft: 14,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", justifyContent: "space-evenly", maxHeight:130 }}>
            <TruncatedText text={name} />
              
            <View
              style={{ display: "flex", flexDirection: "row", marginBottom: 4 }}
            >
              <Text style={{ color: "#A0A0A0", marginRight: 15, fontSize: 13 }}>
                {type}
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <AntDesign
                  style={{ marginTop: 3, marginRight: 5 }}
                  name='clockcircleo'
                  color="#3A643B"
                  size={14}
                />
                <Text style={{color:'#101018'}}>{time}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft:20
            }}
          >
            <Text style={{fontSize: 16, fontWeight: "500", marginRight:10, color:'#101018'}}>
              {flower}
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={26} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RoutinesList;

const styles = StyleSheet.create({});

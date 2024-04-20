import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { AntDesign } from "@expo/vector-icons";

const BottomSheetContent = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{ marginTop: 3, marginRight: 5 }}
            name="clockcircleo"
            color="#3A643B"
            size={17}
          />
          <Text style={{ color: "#3A643B", fontSize: 20, fontWeight: "600" }}>
            18 min left
          </Text>
        </View>
        <View>
          <FontAwesomeIcon
            style={{ marginTop: 3 }}
            size={22}
            icon={faEllipsisV}
          />
        </View>
      </View>

      <View style={{ marginTop: 12 }}>
        <Text style={{ fontSize: 18, fontWeight: "500", color:'#101018' }}>
          Amrutam Skinkey Malt
        </Text>
        <Text style={{ marginTop: 3, fontSize: 16, color: "#A0A0A0" }}>
          Skin Care Routine
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "600" , color:'#101018' }}>
            Usage Quantity:{" "}
          </Text>
          <Text style={{ fontSize: 17, color:'#101018' }}>1 tbs</Text>
        </View>
      </View>

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 14,
        }}
      >
        <Text
          style={{
            paddingHorizontal: 13,
            paddingVertical: 3,
            backgroundColor: "#E4FFE4",
            fontSize: 16,
            borderRadius: 4,
            marginRight: 14,
          }}
        >
          Beforemeal
        </Text>
        <Text style={{ fontSize: 16, color: "#3A643B" }}>8:00 am </Text>
        <Text style={{ fontSize: 16, color: "#A0A0A0" }}>|</Text>
        <Text style={{ fontSize: 16, color:'#101018' }}> 9:00 pm</Text>
      </View>
    </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DialogBoxButtonWhite = () => {
  return (
    <View style={{ marginTop: 10, alignItems: "center" }}>
      <View style={{width:'70%'}}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 2, height: 1, backgroundColor: "#A0A0A0" }} />
        <View>
          <Text style={{ width: 70, textAlign: "center", fontSize:20, color:'#A0A0A0' }}>OR</Text>
        </View>
        <View style={{ flex: 2, height: 1, backgroundColor: "#A0A0A0" }} />
      </View>
      </View>
      <View
        style={{
            marginTop:10,
          height: 50,
          backgroundColor: "white",
          width: "88%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#3A643B",
        }}
      >
        <Text style={{ color: "#3A643B", fontSize: 17, fontWeight: "500" }}>
          Import From Templates
        </Text>
      </View>
      <View
        style={{
          width: "82%",
          alignItems: "flex-start",
          marginTop: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, color: "#A0A0A0" }}>● </Text>
          <Text style={{ fontSize: 16, color: "#A0A0A0" }}>
            {" "}
            Multiple templates created by us
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 12, color: "#A0A0A0" }}>● </Text>
          <Text style={{ fontSize: 16, color: "#A0A0A0" }}>
            {" "}
            Customize according to your need
          </Text>
        </View>
      </View>
      <View style={{marginTop:10, borderBottomColor:'#A0A0A0', borderBottomWidth:1}}>
        <Text style={{fontSize: 16, color: "#A0A0A0"}}>View Sample Templates</Text>
      </View>
    </View>
  );
};

export default DialogBoxButtonWhite;

const styles = StyleSheet.create({});

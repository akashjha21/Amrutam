import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { buttons } from "../../../assets/Constants/ExploreButtons";
const { width, height } = Dimensions.get("window");

const Explore = () => {
  const [selectColor, setSelectColor] = useState<number>(0);
  return (
    <View style={{ marginTop: 24 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: width * 0.04,
        }}
      >
        <Text style={{ fontSize: 17.4, fontWeight: "500", color:'#101018' }}>Explore</Text>
        <Text style={{ fontSize: 14, fontWeight: "600", color: "#3A643B" }}>
          See More
        </Text>
      </View>

      <ScrollView horizontal style={{ marginVertical: 14 }} showsHorizontalScrollIndicator={false}>
        {buttons.map((category, index) => {
          return (
            <Pressable
              key={index}
              style={[styles.buttons, selectColor===index ? {backgroundColor:'#EAF9EA', borderWidth: 1, borderColor:'#EAF9EA'} : {backgroundColor:'white', borderWidth: 1, borderColor:'#A0A0A0'}]}
              onPress={() => setSelectColor(index)}
            >
              <Text
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 9,
                  fontSize: 15,
                   color:'#101018'

                }}
              >
                {category.name}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  buttons: { marginLeft: width * 0.04, borderRadius: 16 },
});

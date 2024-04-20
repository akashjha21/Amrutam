import { Dimensions, StyleSheet, View, Text, Pressable, ImageBackground } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const { width, height } = Dimensions.get("window");

const HealthBar = ({navigation}:any) => {
  
  return (
    <ImageBackground style={styles.mainContainer} source={require('../../assets/images/HealthBarCard.png')}>
      <View style={{ flex: 4, marginLeft: 18 }}>
        <Text
          style={{
            color: "white",
            fontSize: 32,
            fontWeight: "600",
            maxWidth: 270,
            marginTop: 14,
            marginBottom: 10,
          }}
        >
          You have taken 5000 steps today
        </Text>
        <Text style={{ color: "white", marginBottom: 26, fontSize:16 }}>
          Check out your Health Activity
        </Text>
        <Pressable
          style={{
            width: 140,
            backgroundColor: "white",
            height: 43,
            justifyContent: "space-between",
            borderRadius: 14,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate('Details')}
        >
          <Text
            style={{
              color: "#3A643B",
              fontSize: 17,
              fontWeight: "600",
              marginLeft: 20,
            }}
          >
            My Health
          </Text>
          <FontAwesomeIcon
            style={{ marginTop: 2, marginRight: 20 }}
            icon={faAngleRight}
            color="green"
          ></FontAwesomeIcon>
        </Pressable>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: "baseline",
          flexDirection: "column-reverse",
          marginBottom: 24,
          marginRight:14
          
        }}
      >
        <AnimatedCircularProgress
          size={60}
          width={10}
          fill={50}
          tintColor="#BF40BF"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#fff"
          rotation={360}
          lineCap={"round"}

          
          
        />
      </View>

      
    </ImageBackground>
  );
};

export default HealthBar;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 16,
    height: height * 0.27,
    width: "100%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
  },
});

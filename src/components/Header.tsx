import {
  StyleSheet,
  Dimensions,
  View, ImageBackground, Text,
  Pressable, Image
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

const Header = ({navigation}: any) => {
  return (
    <>
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerImg}
          source={require("../../assets/images/Header1.png")}
        >
        <View style={{height:40, width:40, backgroundColor:'white', position:'absolute', bottom:-22, left:-22, transform:[{rotate:'45deg'}]}}></View>
        <View style={{height:40, width:40, backgroundColor:'white', position:"absolute", bottom:-22, right:-22, transform:[{rotate:'45deg'}]}}></View>
        
        <View style={styles.insideContainerMain}>
          <View style={styles.insideContainerFirst}>
            <Text style={styles.mainText}>Namaste Akash</Text>
            <Text style={styles.subMainText}>Welcome to Amrutam</Text>
          </View>
          <View style={styles.insideContainerSecond}>
            <View style={styles.bellIcon}>
              <Feather
                name='bell'
                size={22}
                color="white"
              ></Feather>
            </View>
            <Pressable ><Image
              style={styles.profileImg}
              source={require("../../assets/images/ProfileLogo.png")}
            /></Pressable>
          </View>
        </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: height * 0.31,
    width: width,
    backgroundColor: "red",
    alignItems: "center",
    // justifyContent: "center",
    borderCurve: "continuous",
    position:'relative',
    overflow:'hidden',
  },

  headerImg: {
    resizeMode: "stretch",
    height:height*0.31,
    width:width,
  },
  insideContainerMain: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 12,
  },
  insideContainerFirst: {
    flex: 3,
    justifyContent: "center",
    height: height * 0.20,
    marginLeft:5
  },
  insideContainerSecond: {
    flex: 1,
    flexDirection: "row",
    marginTop: height * 0.035,
    marginRight: 40
  },
  bellIcon: {
    backgroundColor: "gray",
    height: 45,
    width: 45,
    borderRadius: 40,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: { width: 45, height: 45, borderRadius: 40 },
  mainText: {
    fontSize: 26,
    fontWeight: "600",
    color:'#3A643B'
  },
  subMainText: {
    fontSize: 16,
    color:'#3A643B',
  },
});

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const Frame = () => {
  return (
    <View style={{ marginHorizontal: width * 0.04, alignItems: "center", marginTop:15 }}>
      <ImageBackground
        style={{ width: width - width * 0.08, height: 180, display:"flex", flexDirection:'row', justifyContent:'space-between' }}
        source={require("../../../assets/images/Frame.png")}
      >
        <View style={{height:180, justifyContent:'space-evenly' }}>
        <View style={{marginLeft:20}}>
        <Text style={{color:'#101018', fontSize:23, fontWeight:'700', marginBottom:2}}>Skin Care Routine</Text>
        <Text style={{color:'#101018', fontSize:19, fontWeight:'600'}}>Glass Skin</Text>
        </View>

        <View style={{marginLeft:20, height:45, width:130, borderWidth:1, borderColor:'#101018', alignItems:'center', justifyContent:'center',borderRadius:8}}><Text style={{color:'#101018'}}>Explore now</Text></View>
        </View>

        <View style={{width:"100%", height:'100%'}}>
        <Image style={{height:194, width:150, zIndex:2, resizeMode:'stretch', marginTop:-14}} source={require('../../../assets/images/Girl.png')}/>
        </View>

      </ImageBackground>
    </View>
  );
};

export default Frame;

const styles = StyleSheet.create({});

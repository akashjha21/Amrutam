import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const ButtonGreen = ({name}:any) => {
  return (
    <View style={{marginTop:30, alignItems:'center'}}>
      <View style={{height:54, backgroundColor:'#3A643B', width:'100%', alignItems:'center', justifyContent:'center', borderRadius:10, borderWidth:1, borderColor:'#3A643B'}}>
      <Text style={{color:'white', fontSize:17}}>{name}</Text>
      </View>
    </View>
  )
}

export default ButtonGreen

const styles = StyleSheet.create({})
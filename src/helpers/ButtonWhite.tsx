import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonWhite = ({name}:any) => {
  return (
    <View style={{marginTop:10, alignItems:'center'}}>
      <View style={{height:54, backgroundColor:'white', width:'100%', alignItems:'center', justifyContent:'center', borderRadius:10, borderWidth:1, borderColor:'#3A643B'}}>
      <Text style={{color:'#3A643B', fontSize:17}}>{name}</Text>
      </View>
    </View>
  )
}

export default ButtonWhite

const styles = StyleSheet.create({})
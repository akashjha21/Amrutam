import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DialogBoxButtonGreen = () => {
  return (
    <View style={{ marginTop: 5, alignItems: "center" }}>
              <View
                style={{
                  height: 50,
                  backgroundColor: "#3A643B",
                  width: "88%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  borderWidth: 1,
                  borderColor: "#3A643B",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 17, fontWeight: "500" }}
                >
                  Create New Routine
                </Text>
              </View>
              <View
                style={{
                  width: "82%",
                  alignItems: "flex-start",
                  marginTop: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, color:'#A0A0A0'  }}>● </Text>
                  <Text style={{ fontSize: 16, color:'#A0A0A0'  }}>
                    {" "}
                    Your own personalised routine
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
                  <Text style={{ fontSize: 12, color:'#A0A0A0' }}>● </Text>
                  <Text style={{ fontSize: 16, color:'#A0A0A0'  }}> Add upto 7 remainders</Text>
                </View>
              </View>

            </View>
  )
}

export default DialogBoxButtonGreen

const styles = StyleSheet.create({})
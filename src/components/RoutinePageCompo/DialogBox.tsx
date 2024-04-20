import { Modal, StyleSheet, View, Pressable } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import DialogBoxButtonGreen from "./DialogBoxButtonGreen";
import DialogBoxButtonWhite from "./DialogBoxButtonWhite";
interface DialogBoxProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const DialogBox: React.FC<DialogBoxProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  return (
    <View>
      <Modal transparent={true} visible={isModalVisible} >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "53%",
              width: "90%",
              backgroundColor: "white",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                height: 50,
                width: "100%",
                marginTop: 20,
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <Pressable
                style={{
                  marginRight: 10,
                  height: 40,
                  width: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  borderColor: "green",
                  borderWidth: 2,
                  borderRadius: 40,
                }}
                onPress={() => setIsModalVisible(false)}
              >
                <FontAwesomeIcon icon={faX} size={16} color="green" />
              </Pressable>
            </View>

            <DialogBoxButtonGreen />
            <DialogBoxButtonWhite />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DialogBox;

const styles = StyleSheet.create({});

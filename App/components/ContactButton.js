import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ContactButton({ icon, onPress, color = "white" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { borderColor: colors[color] }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={colors[color]}
      ></MaterialCommunityIcons>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width:50,
    borderWidth:1,
    borderRadius: 25,
    marginHorizontal: 10,
    alignItems:"center",
    justifyContent: "center",
  },
});

export default ContactButton;

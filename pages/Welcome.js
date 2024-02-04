import React, { useState } from "react"; // Import useState
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Welcome = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View>
        <TouchableOpacity>
          <Text className="bg-red-500 text-white p-5">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Welcome;

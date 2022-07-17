import { View, Text, Button } from "react-native";
import React from "react";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>SettingsScreen</Text>
      <Button
        title="Go back to home screen"
        onPress={() => navigation.navigate("myHomeScreen")}
      />
    </View>
  );
};

export default SettingsScreen;

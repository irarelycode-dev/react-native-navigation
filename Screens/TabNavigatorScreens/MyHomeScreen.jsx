import { View, Text, Button } from "react-native";
import React from "react";

const MyHomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>MyHomeScreen</Text>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate("settingsScreen")}
      />
    </View>
  );
};

export default MyHomeScreen;

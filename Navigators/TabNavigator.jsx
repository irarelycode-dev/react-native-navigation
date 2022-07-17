import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { MyHomeScreen, SettingsScreen } from "../Screens";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="myHomeScreen"
        component={MyHomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="settingsScreen"
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

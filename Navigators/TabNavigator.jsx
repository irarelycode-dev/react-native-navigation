import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MyHomeScreen, SettingsScreen } from "../Screens";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "myHomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "settingsScreen") {
            iconName = focused ? "settings" : "settings-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="myHomeScreen"
        component={MyHomeScreen}
        options={{ title: "Home" }}
      />
      <Tab.Screen
        name="settingsScreen"
        component={SettingsScreen}
        options={{ title: "Settings", tabBarBadge: 3 }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

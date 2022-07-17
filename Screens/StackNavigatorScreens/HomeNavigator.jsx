import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeDetail"
        component={HomeScreenDetails}
        initialParams={{ data: "" }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigator;

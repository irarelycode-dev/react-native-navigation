import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  DefaultScreen,
  DetailsScreen,
  ReviseScreen,
  PostScreen,
  HomeScreenDetails,
} from "./Screens";

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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="defaultScreen" component={DefaultScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen
          name="details"
          component={DetailsScreen}
          initialParams={{ data: "" }}
        />
        <Stack.Screen
          name="reviseScreen"
          component={ReviseScreen}
          initialParams={{ data: "" }}
        />
        <Stack.Screen name="postScreen" component={PostScreen} />
        <Stack.Screen name="homeDetails" component={HomeStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

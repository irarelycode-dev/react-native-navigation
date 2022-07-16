import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image,Text } from "react-native";
import {
  HomeScreen,
  ProfileScreen,
  DefaultScreen,
  DetailsScreen,
  ReviseScreen,
  PostScreen,
  HomeScreenDetails,
} from "./Screens";

const Stack = createNativeStackNavigator();

function LogoTitle({src}) {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={src}
    />
  );
}

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
        <Stack.Screen
          name="defaultScreen"
          component={DefaultScreen}
          options={{
            title: "My Default",
            headerStyle: { backgroundColor: "#f4511e" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitle: () => <LogoTitle src={require("./assets/favicon.png")}/>,
            headerRight:()=><LogoTitle src={require("./assets/icon.png")}/>
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: { backgroundColor: "#bbb" },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
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
        <Stack.Screen
          name="profileScreen"
          component={ProfileScreen}
          options={({ route }) => ({
            title: route.params?.title || "Profile Screen",
          })}
        />
        <Stack.Screen name="homeDetails" component={HomeStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//<Stack.Screen name="" component={} options={{title:"screen title"}}/>
//Stack.Screen name="" component={} options={({route})=>({title:route.params.title})}/>
//navigation.setOptions({title:"Updated!"})
//headerStyle u can apply styles to the View wrapping the header of a screen
//headerTintColor will apply styles to back button and title on the header
//headerTitlteStyle will apply styles to the title of the header

{
  /* <Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "" },
    headerTintColor: "",
    headetTitleStyle: { fontWeight: "bold" },
  }}
></Stack.Navigator>; */
}

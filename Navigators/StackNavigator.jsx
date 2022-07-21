import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Button } from "react-native";
import { AuthContext } from "../Context/AuthContext";
import {
  HomeScreen,
  ProfileScreen,
  DefaultScreen,
  DetailsScreen,
  ReviseScreen,
  PostScreen,
  HomeStackNavigator,
  LogoTitle,
  SignIn,
} from "../Screens";

const Stack = createNativeStackNavigator();

function StackNavigator({ state }) {
  console.log(state);
  return (
    <Stack.Navigator>
      {state.userToken !== null ? (
        <Stack.Group>
          <Stack.Screen
            name="defaultScreen"
            component={DefaultScreen}
            options={{
              title: "My Default",
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
              headerTitle: () => (
                <LogoTitle src={require("../assets/favicon.png")} />
              ),
              headerRight: () => (
                <LogoTitle src={require("../assets/icon.png")} />
              ),
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
              headerRight: () => (
                <Button
                  title="Some button"
                  color="#fff"
                  onPress={() => alert("Cart is empty")}
                />
              ),
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
        </Stack.Group>
      ) : (
        <>
          <Stack.Screen
            name="signIn"
            component={SignIn}
            options={{ title: "Sign In" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default StackNavigator;

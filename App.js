import "react-native-gesture-handler";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigators/StackNavigator";
import TabNavigator from "./Navigators/TabNavigator";
import DrawerNavigator from "./Navigators/DrawerNavigator";
import { screensEnabled } from "react-native-screens";

import { AuthContext } from "./Context/AuthContext";

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return { ...prevState, userToken: action.token, isLoading: false };
        case "SIGN_IN":
          return { ...prevState, isSignout: false, userToken: action.token };
        case "SIGN_OUT":
          return { ...prevState, isSignout: true, userToken: null };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {}
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };
    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackNavigator state={state} />
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
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

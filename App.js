import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Navigators/StackNavigator";
import TabNavigator from "./Navigators/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
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

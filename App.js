import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Text>Home screen</Text>
      <Button
        onPress={() => navigation.navigate("defaultScreen")}
        title="Go to default screen"
      />
      <Button
        onPress={() =>
          navigation.navigate("details", {
            data: "I have been redirected from home screen",
          })
        }
        title="Go to details screen"
      />
      <Button
        onPress={() => navigation.navigate("home")}
        title="Go to home screen again"
      />
      <Button
        onPress={() => navigation.push("home")}
        title="Push home screen again"
      />
      <Button onPress={() => navigation.goBack()} title="Go back" />
      <Button
        onPress={() => navigation.popToTop()}
        title="Pop to top...Go back to first stack screen"
      />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { data } = route.params;
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"space-evenly"}}>
      <Text>Details screen</Text>
      {data.length ? (
        <View>
          <Text>{data}</Text>
          <Button
            onPress={() =>
              navigation.setParams({ data: "I have been changed" })
            }
            title="Let's change some params in this page"
          />
        </View>
      ) : null}
    </View>
  );
}

function DefaultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => navigation.navigate("home")} title="Go to home" />
      <Button
        onPress={() => navigation.navigate("details")}
        title="Details screen"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

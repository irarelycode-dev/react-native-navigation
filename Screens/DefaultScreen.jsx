import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

function DefaultScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => navigation.navigate("home")} title="Go to home" />
      <Button
        onPress={() => navigation.navigate("details")}
        title="Details screen"
      />
      <Button
        onPress={() => navigation.navigate("reviseScreen")}
        title="Revise Screen"
      />
      <Button
        onPress={() => navigation.navigate("postScreen")}
        title="Post Screen"
      />
      <Button
        onPress={() =>
          navigation.navigate({
            name: "profileScreen",
            params: { title: "My Profile" },
            merge: true,
          })
        }
        title="Profile"
      />
      <Button
        onPress={() => navigation.navigate("homeDetails")}
        title="Home Details Screen"
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default DefaultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

function HomeScreen({ navigation, route }) {
  const [postReceived, setPostReceived] = useState("");
  useEffect(() => {
    if (route.params?.post) setPostReceived(route.params?.post);
  }, [route.params?.post]);
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
      <View>
        <Text>Post:</Text>
        {postReceived.length ? (
          <Text>{postReceived}</Text>
        ) : (
          <Text>No post received yet</Text>
        )}
      </View>
    </View>
  );
}

export default HomeScreen;

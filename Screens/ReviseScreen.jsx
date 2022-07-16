import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ReviseScreen({ route, navigation }) {
  const { data } = route.params;
  const [count, setCount] = useState(0);
  const changeParams = () => {
    navigation.setParams({ ...navigation.params, data: "I have been changed" });
    setCount((count) => count + 1);
  };
  const popScreens = () => navigation.popToTop();
  return (
    <View style={styles.container}>
      <Text>Revise Screen</Text>
      {data.length ? (
        <Text>
          {data}-{count} times
        </Text>
      ) : null}
      <Button onPress={changeParams} title="Change Params" />
      <Button onPress={popScreens} title="Pop all screens" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ReviseScreen;

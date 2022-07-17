import { View, Text, Button } from "react-native";
import React from "react";

function DetailsScreen({ navigation, route }) {
  const { data } = route.params;
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}
    >
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

export default DetailsScreen;

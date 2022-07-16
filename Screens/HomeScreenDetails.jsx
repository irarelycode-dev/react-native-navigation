import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";

const HomeScreenDetails = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <View>
      <Text>HomeScreenDetails</Text>
      <Button
        title="back to default screen"
        onPress={() => navigation.popToTop()}
      />
      {data?.length ? <Text>{data}</Text> : null}
    </View>
  );
};

export default HomeScreenDetails;

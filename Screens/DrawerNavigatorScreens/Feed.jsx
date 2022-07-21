import { View, Text } from "react-native";
import {useDrawerStatus} from "@react-navigation/drawer";
import React from "react";

const Feed = () => {
  return (
    <View>
      <Text>Feed</Text>
      {/* <Text>{alert(useDrawerStatus()==="open")}</Text> */}
    </View>
  );
};

export default Feed;

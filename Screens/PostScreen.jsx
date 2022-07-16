import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";

const PostScreen = ({ navigation }) => {
  const [post, setPost] = useState("");
  const handlePostChange = (text) => setPost(text);
  const handlePost = () => {
    navigation.navigate({
      name: "home",
      params: { post },
      merge: true,
    });
  };
  return (
    <View>
      <Text>PostScreen</Text>
      <TextInput placeholder="Add post" onChangeText={handlePostChange} />
      <Button onPress={handlePost} title="Add Post" />
    </View>
  );
};

export default PostScreen;

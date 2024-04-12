import { View, Text, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

export default Home;

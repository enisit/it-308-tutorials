import { useState } from "react";
import { Alert } from "react-native";
const CORRECT_USERNAME = "mobile";
const CORRECT_PASSWORD = "mobile";

const useLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      Alert.alert("Success", "Login successful", [{ text: "Ok" }]);
    } else {
      Alert.alert("Error", "Invalid Credentials", [{ text: "Ok" }]);
    }
  };
  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
  };
};

export default useLogin;

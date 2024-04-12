import { useState } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
const CORRECT_USERNAME = "mobile";
const CORRECT_PASSWORD = "mobile";

const useLogin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
      dispatch(login({ userId: "asdasd", token: "asdasd" }));
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

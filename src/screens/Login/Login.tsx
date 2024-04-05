import { View, StyleSheet } from "react-native";
import React from "react";
import useLogin from "../../hooks/useLogin";
import AppText from "../../components/AppText";
import AppTextInput from "../../components/AppTextInput";
import AppButton from "../../components/AppButton";
import { colors } from "../../constants/colors";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigation/RootStackNavigator";

type LoginScreenProps = NativeStackScreenProps<RootStackParams, "Login">;
const Login = ({ navigation }: LoginScreenProps) => {
  const { username, password, setPassword, setUsername, handleLogin } =
    useLogin();
  return (
    <View style={styles.container}>
      <View style={styles.welcomeContainer}>
        <AppText style={styles.welcomeText} variant="h1">
          Welcome!
        </AppText>
        <AppText>Please proceed by logging in.</AppText>
      </View>
      <View style={styles.loginFormContainer}>
        <AppTextInput
          value={username}
          onChangeText={setUsername}
          placeholder="Username..."
        />
        <AppTextInput
          value={password}
          onChangeText={setPassword}
          containerStyle={{ marginTop: 20 }}
          placeholder="Password..."
          secureTextEntry
        />
      </View>
      <AppText
        onPress={() => navigation.navigate("ForgotPassword")}
        style={styles.forgotPassword}
        color="primary"
      >
        Forgot password?
      </AppText>
      <AppButton
        onPress={handleLogin}
        text="Login"
        containerStyle={styles.loginButton}
      />
      <View style={styles.signUpContainer}>
        <AppText>Don't have an account?</AppText>
        <AppText
          onPress={() => navigation.navigate("SignUp")}
          style={styles.signUpButton}
          variant="h4"
          color="primary"
        >
          Sign Up
        </AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  welcomeText: {
    fontWeight: "700",
  },
  loginFormContainer: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  forgotPassword: {
    marginTop: 20,
    textAlign: "center",
    fontWeight: "500",
  },
  loginButton: {
    marginTop: 100,
    marginHorizontal: 20,
  },
  signUpContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  signUpButton: {
    marginTop: 10,
    fontWeight: "500",
  },
});

export default Login;

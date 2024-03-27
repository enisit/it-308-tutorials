import { SafeAreaView, StyleSheet, View } from "react-native";
import AppText from "./components/AppText";
import AppButton from "./components/AppButton";
import AppTextInput from "./components/AppTextInput";
import { colors } from "./constants/colors";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <AppText style={styles.welcomeText} variant="h1">
          Welcome!
        </AppText>
        <AppText>Please proceed by logging in.</AppText>
      </View>
      <View style={styles.loginFormContainer}>
        <AppTextInput placeholder="Username..." />
        <AppTextInput
          containerStyle={{ marginTop: 20 }}
          placeholder="Password..."
        />
      </View>
      <AppText style={styles.forgotPassword} color="primary">
        Forgot password?
      </AppText>
      <AppButton text="Login" containerStyle={styles.loginButton} />
      <View style={styles.signUpContainer}>
        <AppText>Don't have an account?</AppText>
        <AppText style={styles.signUpButton} variant="h4" color="primary">
          Sign Up
        </AppText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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

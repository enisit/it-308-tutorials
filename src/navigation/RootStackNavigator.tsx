import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, SignUpScreen, ForgotPasswordScreen } from "../screens";
import { colors } from "../constants/colors";

export type RootStackParams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNav = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerTintColor: colors.primary }}>
      <RootStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="SignUp" component={SignUpScreen} />
      <RootStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNav;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  LoginScreen,
  SignUpScreen,
  ForgotPasswordScreen,
  HomeScreen,
} from "../screens";
import { colors } from "../constants/colors";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";

export type RootStackParams = {
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Home: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootStackNav = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  return (
    <RootStack.Navigator screenOptions={{ headerTintColor: colors.primary }}>
      {isAuthenticated ? (
        <RootStack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
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
        </>
      )}
    </RootStack.Navigator>
  );
};

export default RootStackNav;

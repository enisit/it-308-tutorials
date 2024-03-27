import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { colors } from "../constants/colors";
import AppText from "./AppText";

type ButtonVariant = "primary" | "secondary";
type AppButtonProps = PressableProps & {
  variant?: ButtonVariant;
  text: string;
  containerStyle?: ViewStyle;
};
const ButtonVariantMap: Record<ButtonVariant, ViewStyle> = {
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
};
const AppButton = ({
  variant = "primary",
  text,
  containerStyle,
  ...rest
}: AppButtonProps) => {
  return (
    <Pressable
      style={[styles.container, ButtonVariantMap[variant], containerStyle]}
      {...rest}
    >
      <AppText style={styles.text} color="white" variant="h4">
        {text}
      </AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  text: {
    fontWeight: "600",
  },
});

export default AppButton;

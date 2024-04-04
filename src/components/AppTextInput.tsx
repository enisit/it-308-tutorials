import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import TypographyVariantMap, {
  TypographyVariant,
} from "../constants/typography";
import { colors } from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

type AppTextInputProps = TextInputProps & {
  textVariant?: TypographyVariant;
  containerStyle?: ViewStyle;
};
const AppTextInput = ({
  textVariant = "p",
  style,
  containerStyle,
  secureTextEntry,
  ...rest
}: AppTextInputProps) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        selectionColor={colors.primary}
        style={[TypographyVariantMap[textVariant], styles.input, style]}
        secureTextEntry={isSecure}
        {...rest}
      />
      {secureTextEntry && (
        <Pressable onPress={() => setIsSecure((curr) => !curr)}>
          <Ionicons
            name={isSecure ? "eye" : "eye-off"}
            size={20}
            color={colors.border}
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    lineHeight: undefined,
  },
});
export default AppTextInput;

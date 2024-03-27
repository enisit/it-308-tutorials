import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
import React from "react";
import TypographyVariantMap, {
  TypographyVariant,
} from "../constants/typography";
import { colors } from "../constants/colors";

type AppTextInputProps = TextInputProps & {
  textVariant?: TypographyVariant;
  containerStyle?: ViewStyle;
};
const AppTextInput = ({
  textVariant = "p",
  style,
  containerStyle,
  ...rest
}: AppTextInputProps) => {
  return (
    <View style={containerStyle}>
      <TextInput
        selectionColor={colors.primary}
        style={[TypographyVariantMap[textVariant], styles.input, style]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    lineHeight: undefined,
    borderBottomWidth: 1,
    borderColor: colors.border,
    paddingBottom: 10,
  },
});
export default AppTextInput;

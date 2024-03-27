import React, { PropsWithChildren } from "react";
import { TextProps, Text } from "react-native";
import { colors } from "../constants/colors";
import TypographyVariantMap, {
  TypographyVariant,
} from "../constants/typography";

type AppText = TextProps & {
  variant?: TypographyVariant;
  color?: keyof typeof colors;
};

const AppText = ({
  variant = "p",
  children,
  color = "black",
  style,
  ...rest
}: PropsWithChildren<AppText>) => {
  return (
    <Text
      style={[TypographyVariantMap[variant], { color: colors[color] }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default AppText;

import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 35,
  },
  label: {
    fontSize: 14,
    paddingVertical: 5,
    color: colors.text,
    fontFamily: "RobotoCondensed-Regular",
  },
  subLabel: {
    fontSize: 12,
    paddingVertical: 5,
    color: colors.text,
    fontFamily: "RobotoCondensed-Regular",
  },
});

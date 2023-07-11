import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    fontSize: 13,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    color: colors.text,
    paddingVertical: 5,
    fontFamily: "RobotoCondensed-Light",
  },
  errorContainer: {
    flex: 1,
    marginVertical: 5,
  },
  errorMessage: {
    fontSize: 12,
    paddingVertical: 5,
    color: colors.brightRed,
    fontFamily: "RobotoCondensed-Regular",
  },
});

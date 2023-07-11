import { StyleSheet } from "react-native";

import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  content: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    minHeight: 340,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  link: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    textAlign: "center",
  },
  linkText: {
    fontSize: 14,
    borderBottomColor: colors.tertiary,
    borderBottomWidth: 1,
    color: colors.tertiary,
    textAlign: "center",
  },
  submitContainer: {
    paddingVertical: 5,
  },
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "55%",
    minHeight: 110,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: colors.primary,
  },
  modalTitle: {
    fontSize: 14,
    textAlign: "center",
  },
});

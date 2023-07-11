/* eslint-disable no-case-declarations */
import { useReducer, useState } from "react";
import { View, Text, Modal, Button, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { styles } from "./styles";
import { Input } from "../../components";
import { clearError, signIn, signUp } from "../../store/auth.action";
import colors from "../../utils/colors";
import { UPDATE_FORM, onInputChange } from "../../utils/form";

const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { name, value, hasError, error, touched, isFormValid } = action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };
  }
};

const Auth = () => {
  const dispatch = useDispatch();
  const { error, isLoading, hasError } = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(true);
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const title = isLogin ? "Login" : "Register";
  const buttonTitle = isLogin ? "Login" : "Register";
  const messageText = isLogin ? "Don't have an account?" : "Already have an account?";
  const onHandleChangeAuth = () => {
    setIsLogin(!isLogin);
  };
  const onHandleAuth = async () => {
    const result = await dispatch(
      isLogin
        ? signIn({ email: formState.email.value, password: formState.password.value })
        : signUp({ email: formState.email.value, password: formState.password.value })
    );
    if (result.payload) {
      dispatch({ type: isLogin ? "SIGN_IN_SUCCESS" : "SIGN_UP_SUCCESS", payload: result.payload });
    }
  };
  const onHandleButtonModal = () => {
    dispatch(clearError());
  };
  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="Enter your email"
          placeholderTextColor={colors.gray}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandlerInputChange({ value: text, name: "email" })}
          value={formState.email.value}
          label="Email"
          error={formState.email.error}
          touched={formState.email.touched}
          hasError={formState.email.hasError}
        />
        <Input
          placeholder="Enter your password"
          placeholderTextColor={colors.gray}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => onHandlerInputChange({ value: text, name: "password" })}
          value={formState.password.value}
          label="Password"
          error={formState.password.error}
          touched={formState.password.touched}
          hasError={formState.password.hasError}
        />
        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.link} onPress={onHandleChangeAuth}>
            <Text style={styles.linkText}>{messageText}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submitContainer}>
          <Button
            disabled={!formState.isFormValid}
            title={buttonTitle}
            color={colors.tertiary}
            onPress={onHandleAuth}
          />
        </View>
      </View>
      <Modal visible={hasError || isLoading} transparent animationType="fade">
        <View style={styles.containerStyle}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{error ? error : "Loading"}</Text>
            {error ? (
              <Button title="OK" color={colors.text} onPress={onHandleButtonModal} />
            ) : (
              <ActivityIndicator size="small" color={colors.text} />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Auth;

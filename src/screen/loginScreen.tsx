import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.loginInput}>

        <Text style={styles.title}>Campus Navigator</Text>
        <Text style={styles.subTitle}>Hello!</Text>

        <TextInput
          style={styles.email}
          placeholder="Email"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.password}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.btnText}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.btnRegister}>Forgot Password / Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
    backgroundColor: "#f5f7fb",
  },

  loginInput: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  subTitle: {
    fontSize: 18,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },

  email: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginTop: 12,
    backgroundColor: "#fafafa",
  },

  password: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 14,
    marginTop: 15,
    backgroundColor: "#fafafa",
  },

  loginBtn: {
    backgroundColor: "blue",
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  btnText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 16,
  },

  forgotBtn: {
    alignItems: "center",
    marginTop: 15,
  },

  btnRegister: {
    color: "blue",
    fontSize: 14,
  },
});
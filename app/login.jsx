import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    router.replace("/(tabs)/home");
  }

  return (
    <View style={styles.container}>

      <Text style={styles.logo}>USTP</Text>

      <Text style={styles.title}>TRAIL GUIDE</Text>

      <Text style={styles.subtitle}>
        Find your way around campus
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>

        <Text style={styles.noAccount}>
          Don't have an account?
        </Text>

        <TouchableOpacity
          onPress={() => router.push("/register")}
        >
          <Text style={styles.registerText}>
            Register
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  logo: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    color: "#12C2D1",
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "#111827",
    marginTop: 5,
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#6B7280",
    marginTop: 8,
    marginBottom: 35,
  },

  input: {
    height: 52,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    backgroundColor: "#F8FAFC",
    marginBottom: 15,
  },

  loginButton: {
    height: 52,
    backgroundColor: "#FF8A24",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
  },

  loginText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },

  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 25,
  },

  noAccount: {
    color: "#6B7280",
    fontSize: 14,
  },

  registerText: {
    color: "#12C2D1",
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 5,
  },
});
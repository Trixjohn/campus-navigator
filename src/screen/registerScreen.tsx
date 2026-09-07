import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

import {useState} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterScreen({ navigation }: any) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {

    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      password === ""
    ) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const account = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    await AsyncStorage.setItem(
      "account",
      JSON.stringify(account)
    );

    Alert.alert("Success", "Account registered!");

    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <View style={styles.registerInput}>

        <Text style={styles.title}>Campus Navigator</Text>
        <Text style={styles.subTitle}>Register</Text>

        <TextInput
          style={styles.name}
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.name}
          placeholder="Last name"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={styles.name}
          placeholder="username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.name}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.registerContainer}
          onPress={register}
        >
          <Text style={styles.registerBtn}>Register</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },

  registerInput: {
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },

  subTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },

  name: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginTop: 20,
  },

  registerContainer: {
    backgroundColor: "blue",
    paddingVertical: 14,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  registerBtn: {
    padding: 10,
    fontWeight: "bold",
    color: "white",
  },
});
import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>USTP TRAIL GUIDE</Text>

      <Text style={styles.welcome}>
        Welcome to Campus Navigator
      </Text>

      <Text style={styles.subtitle}>
        Find buildings, rooms, and places around campus.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)/places")}
      >
        <Text style={styles.buttonText}>VIEW PLACES</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)/favorites")}
      >
        <Text style={styles.buttonText}>FAVORITES</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(tabs)/profile")}
      >
        <Text style={styles.buttonText}>PROFILE</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 25,
    paddingTop: 80,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#12C2D1",
    marginBottom: 25,
  },

  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 35,
    lineHeight: 24,
  },

  button: {
    backgroundColor: "#12C2D1",
    padding: 17,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
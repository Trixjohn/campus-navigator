import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Navigator</Text>
      <Text style={styles.subTitle}>Welcome to Home!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subTitle: {
    fontSize: 20,
    marginTop: 10,
  },
});
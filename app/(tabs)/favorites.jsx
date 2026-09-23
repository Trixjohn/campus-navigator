import { View, Text, StyleSheet } from "react-native";

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favorites
      </Text>

      <Text style={styles.ej}>IKAW AKONG FAVORITE SIRRRRR EJ!!!</Text>

      <Text style={styles.text}>
        Your saved places will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 25,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#12C2D1",
  },

  text: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 10,
  },
  ej: {
    fontSize:50,
    fontWeight:"bold"
  }
});
import { View, Text, StyleSheet } from "react-native";

export default function Map() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Map</Text>

      <View style={styles.mapPlaceholder}>
        <Text style={styles.mapIcon}>📍</Text>
        <Text style={styles.mapTitle}>USTP Campus Map</Text>
        <Text style={styles.mapText}>
          The campus map will appear here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0E0436",
    marginBottom: 20,
  },

  mapPlaceholder: {
    flex: 1,
    backgroundColor: "#E8F8FA",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  mapIcon: {
    fontSize: 50,
    marginBottom: 10,
  },

  mapTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0E0436",
  },

  mapText: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 8,
  },
});
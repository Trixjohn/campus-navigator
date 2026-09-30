import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>USTP Trail Guide</Text>

      <Text style={styles.subtitle}>
        Nawla ka? Ay'g kabalaka naa si TRAIL GUIDE
      </Text>

      {/* Search */}
      <Pressable
        style={styles.searchBox}
        onPress={() => router.push("/(tabs)/places")}
        accessibilityRole="button"
        accessibilityLabel="Search campus places"
        accessibilityHint="Opens the places screen where you can search for buildings, rooms, and places"
      >
        <Text style={styles.searchText}>
          🔍  Search buildings, rooms, places...
        </Text>
      </Pressable>

      {/* Campus Map */}
      <Text style={styles.sectionTitle}>Campus Map</Text>

      <Pressable
        style={styles.mapPlaceholder}
        onPress={() => router.push("/(tabs)/map")}
        accessibilityRole="button"
        accessibilityLabel="Explore USTP campus map"
        accessibilityHint="Opens the campus map"
      >
        <Text style={styles.mapIcon}>📍</Text>

        <Text style={styles.mapTitle}>Explore USTP Campus</Text>

        <Text style={styles.mapSubtitle}>
          Tap to view the campus map
        </Text>
      </Pressable>

      {/* Nearby Places */}
      <Text style={styles.sectionTitle}>Nearby Places</Text>

      <Pressable
        style={styles.placeCard}
        onPress={() => router.push("/place/1")}
        accessibilityRole="button"
        accessibilityLabel="Learning Resource Center"
        accessibilityHint="Opens details for the Learning Resource Center"
      >
        <View style={styles.placeIcon}>
          <Text>📚</Text>
        </View>

        <View style={styles.placeInfo}>
          <Text style={styles.placeName}>
            Learning Resource Center
          </Text>

          <Text style={styles.placeCategory}>
            Library
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </Pressable>

      <Pressable
        style={styles.placeCard}
        onPress={() => router.push("/place/2")}
        accessibilityRole="button"
        accessibilityLabel="Engineering Complex"
        accessibilityHint="Opens details for the Engineering Complex"
      >
        <View style={styles.placeIcon}>
          <Text>🏢</Text>
        </View>

        <View style={styles.placeInfo}>
          <Text style={styles.placeName}>
            Engineering Complex
          </Text>

          <Text style={styles.placeCategory}>
            Academic Building
          </Text>
        </View>

        <Text style={styles.arrow}>›</Text>
      </Pressable>

      <Pressable
        style={styles.viewAllButton}
        onPress={() => router.push("/(tabs)/places")}
        accessibilityRole="button"
        accessibilityLabel="View all campus places"
        accessibilityHint="Opens the complete list of campus places"
      >
        <Text style={styles.viewAllText}>
          View All Places
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0E0436",
  },

  subtitle: {
    fontSize: 16,
    color: "#6B7280",
    marginTop: 5,
    marginBottom: 20,
  },

  searchBox: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 16,
    marginBottom: 25,
  },

  searchText: {
    color: "#9CA3AF",
    fontSize: 14,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 12,
  },

  mapPlaceholder: {
    height: 200,
    backgroundColor: "#E8F8FA",
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
  },

  mapIcon: {
    fontSize: 45,
    marginBottom: 8,
  },

  mapTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0E0436",
  },

  mapSubtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 5,
  },

  placeCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },

  placeIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    backgroundColor: "#E8F8FA",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  placeInfo: {
    flex: 1,
  },

  placeName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#111827",
  },

  placeCategory: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 3,
  },

  arrow: {
    fontSize: 28,
    color: "#9CA3AF",
  },

  viewAllButton: {
    borderWidth: 1,
    borderColor: "#12C2D1",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    marginTop: 5,
  },

  viewAllText: {
    color: "#0E8F9A",
    fontWeight: "600",
  },
});


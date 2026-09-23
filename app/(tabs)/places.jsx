import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import { places } from "../../data/places";

export default function Places() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Campus Places</Text>

      <Text style={styles.subtitle}>
        USTP Cagayan de Oro Campus
      </Text>

      {places.map((place) => ( //kani map display each place kung id selected
        <Pressable
          key={place.id}
          style={styles.placeCard}
          onPress={() => router.push(`/place/${place.id}`)}
        >
          <View>
            <Text style={styles.placeName}>
              {place.name}
            </Text>

            <Text style={styles.category}>
              {place.category}
            </Text>
          </View>

          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 16,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#12C2D1",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 20,
  },

  placeCard: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  placeName: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111827",
    marginBottom: 4,
  },

  category: {
    fontSize: 14,
    color: "#6B7280",
  },

  arrow: {
    fontSize: 30,
    color: "#12C2D1",
  },
});
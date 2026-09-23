import { View, Text, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { places } from "../../data/places";

//dynamic route ang id allows the same screen to display different places
export default function PlaceDetails() {
  const { id } = useLocalSearchParams();

  const place = places.find((item) => item.id === id);

  if (!place) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Place Not Found</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>← Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{place.name}</Text>

      <Text style={styles.category}>
        {place.category}
      </Text>

      <Text style={styles.label}>Place ID</Text>

      <Text style={styles.text}>
        {place.id}
      </Text>

      <Text style={styles.label}>Description</Text>

      <Text style={styles.text}>
        {place.description}
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>
          ← Back to Places
        </Text>
      </Pressable>
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
    marginBottom: 10,
  },

  category: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 25,
  },

  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 15,
    marginBottom: 5,
  },

  text: {
    fontSize: 17,
    color: "#374151",
    lineHeight: 25,
  },

  button: {
    backgroundColor: "#12C2D1",
    padding: 15,
    borderRadius: 10,
    marginTop: 35,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
import { View, Text, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

    <View style={styles.info}>
      <Text>Name: Trix John D. Villaceran</Text>
      <Text>Year: 3rd </Text>
      <Text>Course: Bachelors Of Science in Information Technology</Text>




    </View>
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
  info:{
    paddingLeft:10,
    paddingVertical:10,
    fontSize:30,


  }
});
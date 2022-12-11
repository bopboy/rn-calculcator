import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const isError = true;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RN Calculator App</Text>
      <Text style={styles.text}>RN Calculator App2</Text>
      <Text style={[styles.text, styles.error]}>Error Message</Text>
      <Text style={[styles.error, styles.text]}>Error Message</Text>
      <Text style={[styles.text, isError && styles.error]}>Error Message</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color: "green",
  },
  error: {
    color: "red",
  },
});

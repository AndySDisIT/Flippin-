import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>Full-stack launchpad</Text>
      <Text style={styles.title}>Flippin mobile shell</Text>
      <Text style={styles.subtitle}>
        This Expo starter is ready to connect to your API, capture item details,
        and ship to APK and iOS with confidence.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Next steps</Text>
        <Text style={styles.cardText}>• Connect API base URL</Text>
        <Text style={styles.cardText}>• Add camera + upload workflow</Text>
        <Text style={styles.cardText}>• Configure build profiles</Text>
        <Text style={styles.cardText}>• Prioritize local marketplaces first</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 28
  },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 12,
    color: "#94a3b8",
    marginBottom: 12
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: 12
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#cbd5f5",
    marginBottom: 24
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: 16,
    padding: 20,
    width: "100%"
  },
  cardTitle: {
    color: "#f8fafc",
    fontWeight: "600",
    marginBottom: 12
  },
  cardText: {
    color: "#cbd5f5",
    marginBottom: 6
  }
});

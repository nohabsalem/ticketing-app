import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styles } from "./components/ThemedText";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text style={styles.text01}></Text>

      <Text>Navigation :</Text>

      <View style={{ padding: 10, backgroundColor: "#c5c5c5" }}>
        <Link href="/pages/login" style={styles.text01}>
          Go to Login Page (API)
        </Link>{" "}
        <Link href="/pages/dashboard" style={styles.text01}>
          Go to Dashboard
        </Link>{" "}
      </View>
      <Link href="/pages/tickets/creating-ticket" style={styles.text01}>
        Go to Creating Ticket Page
      </Link>
      <Link href="/pages/tickets/ticket-detail" style={styles.text01}>
        Ticket detail page{" "}
      </Link>
      <Text>Autres pages</Text>
    </View>
  );
}

import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { styles } from "../components/ThemedText";
export default function Dashboard() {
  const ticketsOuverts = 50;
  const ticketsFermes = 97;
  const totalTickets = ticketsOuverts + ticketsFermes;

  return (
    <>
      <View style={styles.container2}>
        <Text style={styles.welcome}>Welcome, @user</Text>

        <View style={styles.statsContainer}>
          <View style={[styles.card, { borderColor: "#4ecdc4" }]}>
            {/* <Text style={styles.label}>Tickets ouverts :</Text> */}
            <Link href="/pages/tickets/ticket-list" style={styles.label}>
              Tickets Ouverts :{" "}
            </Link>

            <Text style={styles.number}>{ticketsOuverts}</Text>
          </View>

          <View style={[styles.card, { borderColor: "#ff6b6b" }]}>
            <Link href="/pages/tickets/ticket-list" style={styles.label}>
              Tickets Fermés :{" "}
            </Link>{" "}
            <Text style={styles.number}>{ticketsFermes}</Text>
          </View>
        </View>

        <View style={styles.totalBox}>
          <Link href="/pages/tickets/ticket-list" style={styles.label}>
            Total de tickets :{" "}
          </Link>{" "}
          <Text style={styles.total}>{totalTickets}</Text>
        </View>

        <View style={styles.ticketsInfo}>
          <Text style={styles.noTicket}>• Vous n'avez ouvert aucun ticket</Text>
          <View>
            <Button
              title="Créer un nouveau ticket"
              onPress={() => console.log("Créer un ticket")}
            />
          </View>
        </View>
        <Text style={styles.footer}>
          <Link href="/" style={styles.text01}>
            Accueil
          </Link>{" "}
          © 2025 La Plateforme - Tous droits réservés
        </Text>
      </View>
    </>
  );
}

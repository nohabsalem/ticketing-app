import { Button, ButtonText } from "@/components/ui/button";
import { Link } from "expo-router";

import { Text, View } from "react-native";
import { styles } from "../components/ThemedText";
export default function Dashboard() {
  const ticketsOuverts = 50;
  const ticketsFermes = 97;
  const totalTickets = ticketsOuverts + ticketsFermes;

  return (
    <>
      <View style={{ alignItems: "flex-end", marginBottom: 8 }}>
        <Link href="/pages/tickets/creating-ticket">
          <Button className="bg-[#0062FF]" size="md" onPress={() => {}}>
            <ButtonText>Créer un nouveau ticket</ButtonText>
          </Button>{" "}
        </Link>
      </View>
      <View style={styles.container2}>
        <Text className="text-4xl font-semibold text-blue-600">
          Bienvenue @user
        </Text>{" "}
        <Text className="text-2xl font-semibold text-gray-300">
          La Plateforme
        </Text>{" "}
        <Text style={styles.welcome}>Les tickets de votre entreprise :</Text>
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
          Total de tickets :<Text style={styles.total}>{totalTickets}</Text>
        </View>
        {/* <View style={styles.ticketsInfo}>
          <Text style={styles.noTicket}>• Vous n'avez ouvert aucun ticket</Text>
        </View> */}
        {/* <Box className="bg-primary-500 p-5">
          <Text className="text-typography-0">This is the Box</Text>
        </Box> */}
        <Text style={styles.footer}>
          <Link href="/" style={styles.text01}>
            Accueil {"\n"}
          </Link>{" "}
          © 2025 La Plateforme - Tous droits réservés
        </Text>
      </View>
    </>
  );
}

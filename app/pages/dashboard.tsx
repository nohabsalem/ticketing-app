import { Button, ButtonText } from "@/components/ui/button";
import { Link, useRouter } from "expo-router";
import { Text, View } from "react-native";
import Footer2 from "../components/Footer2";
import { styles } from "../components/ThemedText";
export default function Dashboard() {
  const ticketsOuverts = 50;
  const ticketsFermes = 97;
  const totalTickets = ticketsOuverts + ticketsFermes;

  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch(
        "https://ticketing.development.atelier.ovh/api/mobile/auth/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // ⚠️ Mets ton vrai token ici
            Authorization: `Bearer TON_TOKEN_UTILISATEUR`,
          },
        }
      );

      if (res.ok) {
        console.log("Déconnexion réussie !");
        router.replace("/"); // retour vers la page d’accueil
      } else {
        console.error("Erreur logout:", await res.json());
      }
    } catch (err) {
      console.error("Erreur réseau logout:", err);
    }
  };

  return (
    <>
      {/* Bouton créer un ticket (inchangé, aligné à droite) */}
      <View style={{ alignItems: "flex-end", marginBottom: 8 }}>
        <Link href="/pages/tickets/creating-ticket">
          <Button className="bg-[#0062FF]" size="md">
            <ButtonText>Créer un nouveau ticket</ButtonText>
          </Button>
        </Link>
      </View>

      <View style={styles.container2}>
        <Text className="text-4xl font-semibold text-blue-600">
          Bienvenue @user
        </Text>
        <Text className="text-2xl font-semibold text-gray-300">
          La Plateforme
        </Text>

        {/* Nouveau bouton déconnexion placé ici */}
        {/* <View style={{ marginVertical: 16 }}>
          <Button className="bg-red-500" size="md" onPress={handleLogout}>
            <ButtonText>Se déconnecter</ButtonText>
          </Button>
        </View> */}

        <Text style={styles.welcome}>Les tickets de votre entreprise :</Text>

        <View style={styles.statsContainer}>
          <View style={[styles.card, { borderColor: "#4ecdc4" }]}>
            <Link href="/pages/tickets/ticket-list" style={styles.label}>
              Tickets Ouverts :
            </Link>
            <Text style={styles.number}>{ticketsOuverts}</Text>
          </View>

          <View style={[styles.card, { borderColor: "#ff6b6b" }]}>
            <Link href="/pages/tickets/ticket-list" style={styles.label}>
              Tickets Fermés :
            </Link>
            <Text style={styles.number}>{ticketsFermes}</Text>
          </View>
        </View>

        <View style={styles.totalBox}>
          Total de tickets :<Text style={styles.total}>{totalTickets}</Text>
        </View>
      </View>
      <>
        <Footer2 />
      </>
    </>
  );
}

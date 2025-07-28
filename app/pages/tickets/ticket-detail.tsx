import { Link, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";
import { styles } from "../../components/ThemedText";

export default function TicketDetail() {
  const { id, title, priority, date, description } = useLocalSearchParams();

  return (
    <>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          🎫 Détails du Ticket
        </Text>
        <Text style={{ fontSize: 16 }}>ID : {id}</Text>
        <Text style={{ fontSize: 16 }}>Sujet : {title}</Text>
        <Text style={{ fontSize: 16 }}>Priorité : {priority}</Text>
        <Text style={{ fontSize: 16 }}>Date de création : {date}</Text>
        <Text style={{ fontSize: 16 }}>Description : {description}</Text>
        {/* <TextInput
          placeholder="Écrire ici..."
          style={{ backgroundColor: "#fff" }}
        /> */}
        <Button title="Ajouter un commentaire" />

        <Button title="Fermer le ticket" color="#FE0000" />
      </View>
      <Text style={styles.footer}>
        <Link href="/" style={styles.text01}>
          Accueil
        </Link>{" "}
        © 2025 La Plateforme - Tous droits réservés
      </Text>
    </>
  );
}

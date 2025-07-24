import { Link } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { styles } from "../components/ThemedText";
export default function CreatingTicket() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Créer un nouveau ticket</Text>
        <TextInput style={styles.forminput} placeholder="Titre du ticket" />
        <TextInput
          style={styles.forminput}
          placeholder="Description"
          multiline
        />
        <Button title="Soumettre" onPress={() => console.log("Ticket créé")} />
      </View>
      <View>
        <Text style={styles.footer}>
          <Link href="/" style={styles.text01}>
            Accueil <br />
          </Link>{" "}
          © 2025 La Plateforme - Tous droits réservés
        </Text>
      </View>
    </>
  );
}

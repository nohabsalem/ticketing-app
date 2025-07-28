import { Link } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { styles } from "../../components/ThemedText";

const options = [
  { label: "Choisissez un sujet :", value: null },
  { label: "Extrascolaire", value: "extrascolaire" },
  { label: "Innovation", value: "innovation" },
  { label: "Création compte/accès", value: "compte" },
  { label: "Support étudiants", value: "etudiants" },
  { label: "Support suite Google", value: "google" },
  { label: "Support Alcasar", value: "alcasar" },
  { label: "Marketing", value: "marketing" },
  { label: "TUMO", value: "tumo" },
];

const priorities = [
  { label: "Faible", value: "faible" },
  { label: "Moyenne", value: "moyenne" },
  { label: "Élevée", value: "élevée" },
  { label: "Urgente", value: "urgente" },
];

export default function CreatingTicket() {
  return (
    <>
      <View>
        <Text style={styles.title}>Créer un nouveau ticket</Text>
        <br />
        <TextInput style={styles.text00} placeholder="Titre du ticket : " />
        <br />

        <TextInput
          placeholder="Écrire ici.."
          multiline
          style={{ backgroundColor: "#fff" }}
        />
        <RNPickerSelect
          onValueChange={(value) => console.log("Sujet choisi :", value)}
          items={options}
          placeholder={{ label: "Sélectionnez un sujet", value: null }}
        />

        <RNPickerSelect
          onValueChange={(value) => console.log("Priorité :", value)}
          items={priorities}
          placeholder={{ label: "Sélectionnez une priorité", value: null }}
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

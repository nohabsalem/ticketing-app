import { styles } from "@/app/components/ThemedText";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

const options = [
  { label: "Priorité : (Urgent d'abord)", value: "urgent" },
  { label: "Priorité : (Important d'abord)", value: "important" },
  { label: "Priorité : (Modéré d'abord)", value: "moderate" },
  { label: "Priorité : (Faible d'abord)", value: "weak" },
];

const tickets = [
  {
    id: "1",
    title: "Connexion impossible",
    priority: "urgent",
    date: "19/01/25",
    description:
      "Impossible de me connecter à la Plateforme, pourtant j'ai mis les bonnes cordonnées",
  },
  {
    id: "2",
    title: "Bug mineur sur l’UI",
    priority: "weak",
    date: "21/12/25",
    description:
      "L'affichage responsive n'est pas bien respecté sur toutes les pages ",
  },
  {
    id: "3",
    title: "Problème de paiement",
    priority: "important",
    date: "21/12/25",
    description: "Malgré ma ponctualité, je n'ai pas été payé.e ",
  },
  { id: "4", title: "Erreur 404", priority: "moderate", date: "21/09/25" },
];

export default function TicketList() {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const router = useRouter();

  return (
    <>
      <View>
        <Text style={styles.title}>Historique des Tickets :</Text>
        <View>
          <TextInput placeholder="Rechercher.." style={styles.forminput} />
          <RNPickerSelect
            onValueChange={(value) => setSelectedPriority(value)}
            items={options}
            placeholder={{ label: "Choisir une priorité...", value: null }}
            value={selectedPriority}
          />

          <Text style={styles.title}>TICKETS :</Text>
        </View>

        <FlatList
          data={tickets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/pages/tickets/ticket-detail",
                  params: {
                    id: item.id,
                    title: item.title,
                    priority: item.priority,
                    date: item.date,
                    description: item.description,
                  },
                })
              }
            >
              <Text style={styles.tickets}>
                {item.title} ({item.priority})
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <Text style={styles.footer}>
          <Text style={styles.text01}>Accueil</Text> © 2025 La Plateforme - Tous
          droits réservés
        </Text>
      </View>
    </>
  );
}

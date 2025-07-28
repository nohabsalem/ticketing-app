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
  { id: "1", title: "Connexion impossible", priority: "urgent" },
  { id: "2", title: "Bug mineur sur l’UI", priority: "weak" },
  { id: "3", title: "Problème de paiement", priority: "important" },
  { id: "4", title: "Erreur 404", priority: "moderate" },
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

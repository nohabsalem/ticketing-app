import { styles } from "@/app/components/ThemedText";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";
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

  return (
    <>
      <View style={{ alignItems: "flex-end", marginBottom: 8 }}>
        <Button title="Gérer l'assignation" />
      </View>

      <View>
        <Text style={styles.title}>Historique des Tickets :</Text>
        <View>
          <TextInput placeholder="Rechercher.." style={styles.forminput} />
          <View>
            <RNPickerSelect
              onValueChange={(value) => setSelectedPriority(value)}
              items={options}
              placeholder={{ label: "Choisir une priorité...", value: null }}
              value={selectedPriority}
            />
          </View>

          <View>
            <Text style={styles.title}>TICKETS :</Text>
          </View>
        </View>
        <FlatList
          style={styles.ticketcontainer}
          data={tickets}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.tickets}>
              {item.title} ({item.priority})
            </Text>
          )}
        />
      </View>

      <View>
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

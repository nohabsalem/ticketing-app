import { styles } from "@/app/components/ThemedText";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import {
  Select,
  SelectBackdrop,
  SelectContent,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
} from "@/components/ui/select";
import { Text } from "@/components/ui/text";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

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
    <ScrollView className="flex-1 bg-white p-6">
      <View className="items-end mb-4">
        <Button className="bg-[#0062FF]" size="sm">
          <ButtonText className="font-poppins">Gérer l'assignation</ButtonText>
        </Button>
      </View>

      <Text className="text-3xl font-poppinsSemiBold text-blue-600 mb-6">
        Historique des Tickets :
      </Text>

      <Input className="mb-4">
        <InputField
          placeholder="Rechercher.."
          className="font-poppins text-base"
        />
      </Input>

      <Select
        className="mb-6"
        onValueChange={(val) => setSelectedPriority(val)}
      >
        <SelectTrigger>
          <SelectInput
            placeholder="Choisir une priorité..."
            className="font-poppins text-base"
          />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            {options.map((opt) => (
              <SelectItem
                key={opt.value}
                label={opt.label}
                value={opt.value}
                className="font-poppins"
              />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>

      {/* Sous-titre */}
      <Text className="text-2xl font-poppinsSemiBold mb-4">TICKETS :</Text>

      {/* Liste des tickets */}
      <FlatList
        data={tickets}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => (
          <View className="h-[1px] bg-gray-200 my-2" />
        )}
        renderItem={({ item }) => (
          <Text className="font-poppins text-base">
            {item.title} ({item.priority})
          </Text>
        )}
      />

      {/* Footer */}
      <View className="mt-12">
        <Text style={styles.footer} className="font-poppins text-center">
          <Link href="/" style={styles.text01}>
            Accueil{"\n"}
          </Link>
          © 2025 La Plateforme - Tous droits réservés
        </Text>
      </View>
    </ScrollView>
  );
}

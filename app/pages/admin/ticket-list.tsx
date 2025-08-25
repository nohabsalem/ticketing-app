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
import { FlatList, Modal, ScrollView, View } from "react-native";

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

const users = [
  { label: "Roxan Roumégas", value: "Roxan" },
  { label: "Sambeau Prak", value: "Sambeau" },
];

export default function TicketList() {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState("");
  return (
    <ScrollView className="flex-1 bg-white p-6">
      <View className="items-end mb-4">
        <Button className="bg-[#0062FF]" size="sm">
          <Button onPress={() => setVisible(true)}>
            <ButtonText className="text-white">Gérer l'assignation</ButtonText>
          </Button>
          <Modal visible={visible} transparent animationType="fade">
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: 20,
              }}
            >
              <View
                style={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  padding: 20,
                  width: "100%",
                  maxWidth: 400,
                }}
              >
                <Text className="text-2xl text-center mb-4 font-semibold color-[#0062FF]">
                  Qui devra gérer ce ticket ?
                </Text>
                <Text className="font-poppins mb-6 text-justify-center">
                  Sélectionnez un membre de l'équipe pour assigner ce ticket.
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
                      placeholder="Choisir un utilisateur..."
                      className="font-poppins text-base cursor-pointer"
                    />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      {users.map((opt) => (
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
                <Button
                  style={{
                    backgroundColor: "#FE0000",
                    borderRadius: 8,
                  }}
                  onPress={() => {
                    setVisible(false);
                    setComment("");
                  }}
                >
                  <ButtonText style={{ color: "white" }}> Annuler</ButtonText>
                </Button>
                {/* <Button
                  style={{
                    backgroundColor: "#0062FF",
                    borderRadius: 8,
                    marginBottom: 10,
                  }}
                  onPress={() => {
                    console.log("Commentaire :", comment);
                    setVisible(false);
                    setComment("");
                  }}
                >
                  <ButtonText className="text-white"> Poster</ButtonText>
                </Button>

                <Button
                  style={{
                    backgroundColor: "#FE0000",
                    borderRadius: 8,
                  }}
                  onPress={() => {
                    setVisible(false);
                    setComment("");
                  }}
                >
                  <ButtonText style={{ color: "white" }}> Annuler</ButtonText>
                </Button> */}
              </View>
            </View>
          </Modal>{" "}
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

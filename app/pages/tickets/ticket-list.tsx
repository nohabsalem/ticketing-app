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
import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import Footer from "../../components/Footer";

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
      "Impossible de me connecter à la Plateforme, pourtant j'ai mis les bonnes coordonnées.",
    attachment: "Screenshot985ad.jpg",
  },
  {
    id: "2",
    title: "Bug mineur sur l’UI",
    priority: "weak",
    date: "21/12/25",
    description:
      "L'affichage responsive n'est pas bien respecté sur toutes les pages.",
    attachment: "responsive-img.jpg",
  },
  {
    id: "3",
    title: "Problème de paiement",
    priority: "important",
    date: "21/12/25",
    description:
      "Malgré ma ponctualité et mon assiduité au travail, je n'ai pas été payé.e.",
    attachment: "bank.jpg",
  },
];

const users = [
  { label: "Susie", value: "Susie" },
  { label: "Noelle", value: "Noelle" },
  { label: "Narciso Anasui", value: "Anasui" },
];

export default function TicketList() {
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  return (
    <>
      <ScrollView className="flex-1 bg-white p-6">
        {/* Bouton assignation de tâche */}

        {/* Titre */}
        <Text className="text-3xl font-poppinsSemiBold text-blue-600 mb-6">
          Historique des Tickets :
        </Text>

        {/* Recherche */}
        <Input className="mb-4">
          <InputField
            placeholder="Rechercher.."
            className="font-poppins text-base"
          />
        </Input>

        {/* Sélecteur de priorité */}
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

        {/* Liste des tickets */}
        <Text className="text-2xl font-poppinsSemiBold mb-4">TICKETS :</Text>

        <FlatList
          data={tickets}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          ItemSeparatorComponent={() => (
            <View className="h-[1px] bg-gray-200 my-2" />
          )}
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
                    attachment: item.attachment,
                  },
                })
              }
            >
              <View className="p-3 bg-gray-50 rounded-lg hover:bg-blue-300">
                <Text className="font-poppins text-base text-gray-800">
                  {item.title}{" "}
                  <Text className="text-sm text-gray-500">
                    ({item.priority})
                  </Text>
                </Text>
                <Text className="text-xs text-gray-500 mt-1">{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <Footer />
    </>
  );
}

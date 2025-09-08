import { Button, ButtonText } from "@/components/ui/button";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
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
import {
  FlatList,
  Modal,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
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
        <View className="items-end mb-4">
          <Button
            className="bg-[#0062FF]"
            size="sm"
            onPress={() => setModalVisible(true)}
          >
            <ButtonText className="text-white">Gérer l'assignation</ButtonText>
          </Button>
        </View>

        {/* Modal Assignation */}
        <Modal visible={modalVisible} transparent animationType="fade">
          <View className="flex-1 justify-center items-center bg-black/50 p-5">
            <View className="bg-white rounded-lg p-5 w-full max-w-md">
              <Text className="text-2xl text-center mb-4 font-semibold text-[#0062FF]">
                Qui devra gérer ce ticket ?
              </Text>
              <Text className="font-poppins mb-6 text-center">
                Sélectionnez un membre de l'équipe pour assigner ce ticket.
              </Text>

              {/* Sélecteur des users */}
              <Select
                className="mb-6"
                onValueChange={(val) => setSelectedUser(val)}
              >
                <SelectTrigger>
                  <SelectInput
                    placeholder="Choisir un utilisateur..."
                    className="font-poppins text-base cursor-pointer"
                  />
                </SelectTrigger>
                <SelectPortal>
                  <SelectBackdrop />
                  <SelectContent className="font-poppins cursor-pointer">
                    {users.map((opt) => (
                      <SelectItem
                        key={opt.value}
                        label={opt.label}
                        value={opt.value}
                        className="font-poppins cursor-pointer"
                      />
                    ))}
                  </SelectContent>
                </SelectPortal>
              </Select>

              {/* Boutons d’action */}
              <Button
                className="bg-[#0062FF] rounded-lg mb-3"
                onPress={() => {
                  console.log("Utilisateur assigné :", selectedUser);
                  setModalVisible(false);
                  setSelectedUser(null);
                }}
              >
                <ButtonText className="text-white"> Assigner</ButtonText>
              </Button>

              <Button
                className="bg-red-600 rounded-lg"
                onPress={() => {
                  setModalVisible(false);
                  setSelectedUser(null);
                }}
              >
                <ButtonText className="text-white"> Annuler</ButtonText>
              </Button>
            </View>
          </View>
        </Modal>

        {/* Titre */}
        <Text className="text-3xl font-poppinsSemiBold text-blue-600 mb-6">
          Historique des Tickets :
        </Text>

        {/* Checkbox personnalisée */}
        <View className="mb-4">
          <Checkbox
            isChecked={checked}
            onChange={setChecked}
            size="md"
            isDisabled={false}
            isInvalid={false}
            value={""}
          >
            <CheckboxIndicator
              className="border-2 border-[#0062FF]"
              style={{ backgroundColor: "#fff" }}
            >
              <CheckboxIcon as={CheckIcon} style={{ color: "#0062FF" }} />
            </CheckboxIndicator>
            <CheckboxLabel className="font-poppins text-base">
              Afficher uniquement mes tickets
            </CheckboxLabel>
          </Checkbox>
        </View>

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

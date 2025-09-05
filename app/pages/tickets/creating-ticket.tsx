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
import { ScrollView, View } from "react-native";
import Footer from "../../components/Footer";
const options = [
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
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-4xl font-poppinsSemiBold text-center text-blue-600 mb-8">
        Création de ticket :
      </Text>

      <Input className="mb-4">
        <InputField
          placeholder="Titre du ticket"
          className="font-poppins text-base"
        />
      </Input>

      <Input className="mb-4 h-32">
        <InputField
          placeholder="Écrire ici..."
          multiline
          className="font-poppins text-base"
        />
      </Input>

      <Select className="mb-4">
        <SelectTrigger>
          <SelectInput
            placeholder="Sélectionnez un sujet"
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

      <Select className="mb-4">
        <SelectTrigger>
          <SelectInput
            placeholder="Sélectionnez une priorité"
            className="font-poppins text-base"
          />
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            {priorities.map((opt) => (
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

      <View className="flex-row items-center mb-6 gap-2">
        <Text className="font-poppins">Joindre un fichier : (optionnel)</Text>
        <Button className="bg-[#0062FF]" size="sm" onPress={() => {}}>
          <ButtonText className="font-poppins">Parcourir...</ButtonText>
        </Button>
      </View>

      <Link href="/pages/tickets/ticket-list" asChild>
        <Button className="bg-[#0062FF]" size="sm">
          <ButtonText className="font-poppins">Soumettre</ButtonText>
        </Button>
      </Link>
      <Footer />
    </ScrollView>
  );
}

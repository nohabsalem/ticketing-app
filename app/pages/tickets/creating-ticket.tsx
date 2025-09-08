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
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import Footer from "../../components/Footer";
import { pickFile } from "../../hooks/upload";

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
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handlePickFile = async () => {
    const file = await pickFile();
    if (file) setSelectedFile(file.assets?.[0]?.name ?? null);
  };

  const handleRemoveFile = () => setSelectedFile(null);

  const handleSubmit = () => {
    let newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = "Le titre est requis.";
    if (!description.trim())
      newErrors.description = "La description est requise.";
    if (!subject.trim()) newErrors.subject = "Le sujet est requis.";
    if (!priority.trim()) newErrors.priority = "La priorité est requise.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/pages/tickets/ticket-list");
    }
  };

  return (
    <ScrollView className="flex-1 bg-white p-6">
      <Text className="text-4xl font-poppinsSemiBold text-center text-blue-600 mb-8">
        Création de ticket :
      </Text>

      <Input className="mb-2">
        <InputField
          placeholder="Titre du ticket"
          className="font-poppins text-base"
          value={title}
          onChangeText={setTitle}
        />
      </Input>
      {errors.title && (
        <Text className="text-red-500 font-poppins mb-2">{errors.title}</Text>
      )}

      <Input className="mb-2 h-32">
        <InputField
          placeholder="Écrire ici..."
          multiline
          className="font-poppins text-base"
          value={description}
          onChangeText={setDescription}
        />
      </Input>
      {errors.description && (
        <Text className="text-red-500 font-poppins mb-2">
          {errors.description}
        </Text>
      )}

      <Select
        className="mb-2"
        selectedValue={subject}
        onValueChange={(val) => setSubject(val)}
      >
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
      {errors.subject && (
        <Text className="text-red-500 font-poppins mb-2">{errors.subject}</Text>
      )}

      <Select
        className="mb-2"
        selectedValue={priority}
        onValueChange={(val) => setPriority(val)}
      >
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
      {errors.priority && (
        <Text className="text-red-500 font-poppins mb-2">
          {errors.priority}
        </Text>
      )}

      <View className="flex-row items-center mb-2 gap-2">
        <Text className="font-poppins">Joindre un fichier : (optionnel)</Text>
        <Button className="bg-[#0062FF]" size="sm" onPress={handlePickFile}>
          <ButtonText className="font-poppins">Parcourir...</ButtonText>
        </Button>
      </View>

      {selectedFile && (
        <View className="mb-6 flex-row items-center gap-2">
          <Text className="font-poppins text-sm text-gray-600">
            Fichier choisi : {selectedFile}
          </Text>
          <Button className="bg-red-500" size="sm" onPress={handleRemoveFile}>
            <ButtonText className="font-poppins">❌</ButtonText>
          </Button>
        </View>
      )}

      <Button className="bg-[#0062FF] mb-6" size="sm" onPress={handleSubmit}>
        <ButtonText className="font-poppins">Soumettre</ButtonText>
      </Button>

      <Footer />
    </ScrollView>
  );
}

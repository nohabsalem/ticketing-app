import { Button, ButtonText } from "@/components/ui/button";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../../components/Footer";
import { pickFile } from "../../hooks/upload"; // <-- import de ta fonction

export default function TicketDetail() {
  const { id, title, priority, date, description, attachment } =
    useLocalSearchParams();
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [attachmentFile, setAttachmentFile] = useState<any>(null); // pièce jointe choisie

  const handlePickFile = async () => {
    const res = await pickFile();
    if (res && res.assets && res.assets.length > 0) {
      setAttachmentFile(res.assets[0]); // on garde le premier fichier choisi
    }
  };

  return (
    <>
      <ScrollView className="flex-1">
        <View className="p-6">
          <Text className="text-3xl font-bold mb-6 text-center text-[#0062FF]">
            Détails du Ticket
          </Text>

          <View className="bg-white rounded-xl p-6 mb-8 shadow-md space-y-3">
            <Text className="text-lg font-semibold">
              ID : <Text className="font-light text-base">{id}</Text>
            </Text>
            <Text className="text-lg font-semibold">
              Sujet : <Text className="font-light text-base">{title}</Text>
            </Text>
            <Text className="text-lg font-semibold">
              Priorité :{" "}
              <Text
                className={`font-semibold ${
                  priority === "urgent" ? "text-red-600" : "text-orange-500"
                }`}
              >
                {priority}
              </Text>
            </Text>
            <Text className="text-lg font-semibold">
              Créé le : <Text className="font-light text-base">{date}</Text>
            </Text>
            <Text className="text-lg font-semibold">
              Description :{" "}
              <Text className="font-light text-base">{description}</Text>
            </Text>
            {attachment && (
              <Text className="text-lg font-semibold">
                Pièce jointe :{" "}
                <Text className="font-light underline underline-offset-2">
                  {attachment}
                </Text>
              </Text>
            )}
            <View className="h-[1px] bg-gray-300 my-2" />
            <Text className="text-lg font-semibold">Commentaires :</Text>
            <View className="bg-gray-100 rounded-md p-3">
              <View className="flex-row items-start justify-between mb-3">
                <View className="flex-row space-x-3 flex-1">
                  <View className="w-10 h-10 bg-gray-400 rounded-full" />

                  <View className="flex-col">
                    <Text className="text-base font-semibold text-gray-800">
                      Jean Dupont :
                    </Text>
                    <Text className="text-base text-gray-800">
                      Commentaire de Jean Dupont
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  className="ml-2 px-3 py-1 bg-[#0062FF] rounded-lg"
                >
                  <Text className="text-white text-sm">Répondre</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Button
            onPress={() => setVisible(true)}
            className="bg-[#0062FF] rounded-lg mb-5"
          >
            <ButtonText className="text-white">
              Ajouter un commentaire
            </ButtonText>
          </Button>

          <Modal visible={visible} transparent animationType="fade">
            <View className="flex-1 justify-center items-center bg-black/50 p-5">
              <View className="bg-white rounded-lg p-5 w-full max-w-md">
                <Text className="text-2xl text-center mb-4 font-semibold text-[#0062FF]">
                  Créer un commentaire :
                </Text>
                <TextInput
                  placeholder="Écrire ici..."
                  value={comment}
                  onChangeText={setComment}
                  multiline
                  className="bg-gray-100 rounded-md p-3 min-h-[80px] mb-4 text-left"
                  textAlignVertical="top"
                />

                <TouchableOpacity
                  onPress={handlePickFile}
                  className="items-center mb-3"
                >
                  <View className="w-12 h-12 bg-gray-400  mb-2" />
                  <Text className="text-sm text-gray-600">
                    Ajouter une pièce jointe
                  </Text>
                </TouchableOpacity>

                {attachmentFile && (
                  <Text className="text-sm text-gray-800 mb-3">
                    Fichier sélectionné : {attachmentFile.name}
                  </Text>
                )}

                <Button
                  className="bg-[#0062FF] rounded-lg mb-3"
                  onPress={() => {
                    console.log("Commentaire :", comment);
                    console.log("Pièce jointe :", attachmentFile);
                    setVisible(false);
                    setComment("");
                    setAttachmentFile(null);
                  }}
                >
                  <ButtonText className="text-white">Poster</ButtonText>
                </Button>

                <Button
                  className="bg-red-600 rounded-lg"
                  onPress={() => {
                    setVisible(false);
                    setComment("");
                    setAttachmentFile(null);
                  }}
                >
                  <ButtonText className="text-white">Annuler</ButtonText>
                </Button>
              </View>
            </View>
          </Modal>

          <Link href="/pages/tickets/ticket-list" asChild>
            <Button className="bg-red-600 rounded-lg mt-3">
              <ButtonText className="text-white">Fermer le ticket</ButtonText>
            </Button>
          </Link>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

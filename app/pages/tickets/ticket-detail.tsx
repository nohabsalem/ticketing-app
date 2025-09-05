import { Button, ButtonText } from "@/components/ui/button";
import { Link, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Modal, ScrollView, Text, TextInput, View } from "react-native";
import Footer from "../../components/Footer";
export default function TicketDetail() {
  const { id, title, priority, date, description, attachment } =
    useLocalSearchParams();
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: "bold",
            marginBottom: 15,
            textAlign: "center",
            color: "#0062FF",
          }}
        >
          Détails du Ticket
        </Text>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 15,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            marginBottom: 20,
          }}
        >
          <Text className="text-md font-semibold">
            ID : <Text className="font-light">{id}</Text>
          </Text>
          <Text className="text-md font-semibold">
            Sujet : <Text className="font-light">{title}</Text>
          </Text>
          <Text className="text-md font-semibold">
            Priorité :{" "}
            <Text
              style={{
                fontWeight: "bold",
                color: priority === "urgent" ? "#FE0000" : "#FF9900",
              }}
            >
              <Text className="font-medium">{priority}</Text>
            </Text>
          </Text>
          <Text className="text-md font-semibold">
            Créé le : <Text className="font-light">{date}</Text>
          </Text>

          <Text className="text-md font-semibold">
            Description : <Text className="font-light">{description}</Text>
          </Text>
          {attachment && (
            <Text className="text-md font-semibold">
              Pièce jointe :{" "}
              <Text className="font-light underline underline-offset-1 cursor-pointer">
                {attachment}
              </Text>
            </Text>
          )}
        </View>

        <Button
          onPress={() => setVisible(true)}
          style={{
            backgroundColor: "#0062FF",
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          <ButtonText className="text-white">Ajouter un commentaire</ButtonText>
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
                Créer un commentaire :
              </Text>
              <TextInput
                placeholder="Écrire ici..."
                value={comment}
                onChangeText={setComment}
                multiline
                style={{
                  backgroundColor: "#F0F0F0",
                  borderRadius: 6,
                  padding: 10,
                  minHeight: 80,
                  marginBottom: 15,
                  textAlignVertical: "top",
                }}
              />

              <Button
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
              </Button>
            </View>
          </View>
        </Modal>

        <Link href="/pages/tickets/ticket-list" asChild>
          <Button
            style={{
              backgroundColor: "#FE0000",
              borderRadius: 8,
              marginTop: 10,
            }}
          >
            <ButtonText style={{ color: "white" }}>Fermer le ticket</ButtonText>
          </Button>
        </Link>
      </View>
      <>
        <Footer />
      </>
    </ScrollView>
  );
}

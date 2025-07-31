import { Link, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Button, Modal, Text, TextInput, View } from "react-native";
import { styles } from "../../components/ThemedText";

export default function TicketDetail() {
  const { id, title, priority, date, description, attachment } =
    useLocalSearchParams();
  const [visible, setVisible] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          🎫 Détails du Ticket
        </Text>
        <Text style={{ fontSize: 16 }}>ID : {id}</Text>
        <Text style={{ fontSize: 16 }}>Sujet : {title}</Text>
        <Text style={{ fontSize: 16 }}>Priorité : {priority}</Text>
        <Text style={{ fontSize: 16 }}>Date de création : {date}</Text>
        <Text style={{ fontSize: 16 }}>Description : {description}</Text>

        <Text style={{ fontSize: 16 }}> Pièce jointe : {attachment}</Text>
        {/* <TextInput
          placeholder="Écrire ici..."
          style={{ backgroundColor: "#fff" }}
        /> */}
        <Button
          title="Ajouter un commentaire"
          onPress={() => setVisible(true)}
        />
        <Modal visible={visible} transparent={true} animationType="fade">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.3)", // fond un peu sombre
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 30,
                width: 500,
              }}
            >
              <Text style={styles.title}>Créer un commentaire :</Text>
              <TextInput
                placeholder="Écrire ici..."
                value={comment}
                style={{ backgroundColor: "#ebebebff" }}
                onChangeText={setComment}
                multiline
              />
              <Button
                title="POSTER"
                onPress={() => {
                  console.log("Commentaire :", comment);
                  setVisible(false);
                  setComment("");
                }}
              />
              <Button
                title="Annuler"
                onPress={() => setVisible(false)}
                color="#FE0000"
              />
            </View>
          </View>
        </Modal>
        <Link href="/pages/tickets/ticket-list">
          <Button title="Fermer le ticket" color="#FE0000" />
        </Link>
        <Text style={styles.footer}>
          <Link href="/" style={styles.text01}>
            Accueil {"\n"}
          </Link>{" "}
          © 2025 La Plateforme - Tous droits réservés
        </Text>
      </View>
    </>
  );
}

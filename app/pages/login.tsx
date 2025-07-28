import { Label } from "@react-navigation/elements";
import { Link } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";

import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "../components/ThemedText";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.formcontainer}>
        <Text style={styles.formtitle}>Connexion</Text>

        <Label style={styles.label}>Email :</Label>
        <TextInput
          style={styles.forminput}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Label style={styles.label}>Mot de passe :</Label>
        <TextInput
          style={styles.forminput}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* <TouchableOpacity style={styles.button}>
          <Text>Se connecter</Text>
        </TouchableOpacity> */}
        <Button
          title="Se connecter"
          onPress={() => console.log("Ticket créé")}
        />

        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButton}>Se connecter avec Google</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>
          <Link href="/" style={styles.text01}>
            Accueil <br />
          </Link>{" "}
          © 2025 La Plateforme - Tous droits réservés
        </Text>
      </View>
    </>
  );
}

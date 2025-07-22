import { Label } from '@react-navigation/elements';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "../components/ThemedText";

export default function Login (){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.formcontainer}>
      <Text style={styles.formtitle}>Connexion</Text>

      <Label style={styles.label}>Email :</Label>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Label style={styles.label}>Mot de passe :</Label>

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <Text style={styles.googleButton}>Se connecter avec Google</Text>
      </TouchableOpacity>
    </View>
  );
};

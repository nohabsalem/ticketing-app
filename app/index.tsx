import { Button, ButtonText } from "@/components/ui/button";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Text, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

const API_BASE_URL = "https://ticketing.development.atelier.ovh/api/mobile";

export default function Index() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const promptAsync = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. Récupérer URL d'auth Google depuis API backend
      const response = await axios.get(`${API_BASE_URL}/auth/google/url`);
      const googleAuthUrl = response.data.auth_url;

      // 2. Ouvrir navigateur pour authentification Google (popup)
      const result = await WebBrowser.openAuthSessionAsync(
        googleAuthUrl,
        // Le redirect URI configuré dans backend, par ex. votre URL callback API
        `${API_BASE_URL}/auth/google/callback`
      );

      if (result.type !== "success") {
        throw new Error("Authentification annulée ou échouée");
      }

      // 3. Le popup se ferme automatiquement, résultat contient l'URL de redirection
      // Extraire code OAuth de l'URL retournée
      const url = result.url;
      const codeMatch = url.match(/[?&]code=([^&]+)/);
      if (!codeMatch) throw new Error("Code OAuth non reçu");

      const code = decodeURIComponent(codeMatch[1]);

      // 4. Échanger code contre tokens auprès du backend
      const authResponse = await axios.post(`${API_BASE_URL}/auth/google`, {
        code,
      });

      // Stocker tokens / user selon votre gestion (async-storage, contexte Redux...)
      console.log("Connexion réussie !", authResponse.data.user.email);

      // 5. Naviguer / afficher page principale ou dashboard
      // Exemple avec React Navigation : navigation.navigate('Home');
      // Ici placeholder :
      alert(`Bienvenue ${authResponse.data.user.email}`);
    } catch (e: any) {
      setError(e.message);
      console.error("Erreur lors de la connexion Google:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <Text className="mb-8 text-2xl font-bold">Connexion Google</Text>
      {error && <Text className="mb-4 text-red-600 font-medium">{error}</Text>}
      <Button
        className="bg-[#0062FF] px-8 py-3 rounded-md"
        size="md"
        disabled={loading}
        onPress={promptAsync}
      >
        <ButtonText>
          {loading ? "Connexion en cours..." : "Se connecter avec Google"}
        </ButtonText>
      </Button>
    </View>
  );
}

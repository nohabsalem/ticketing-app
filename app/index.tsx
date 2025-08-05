import { makeRedirectUri } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";

import { useRouter } from "expo-router";

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const router = useRouter(); // Initialize router
  const [userToken, setUserToken] = useState<string | null>(null);

  const redirectUri = makeRedirectUri({
    scheme: "atelier",
  });

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "http://localhost:8081",
    androidClientId:
      "1077299977879-58ugmg1d484n6sk8fkt1695264ccerrj.apps.googleusercontent.com",
    iosClientId:
      "1077299977879-t3njpke1ncbplbbtlgrvg9gi4951o2jh.apps.googleusercontent.com",
    webClientId:
      "1077299977879-hitllervgsdd5k28f5u05dv43aufbc6o.apps.googleusercontent.com",
    redirectUri: redirectUri,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      setUserToken(id_token);
      console.log("TOKEN UTILISATEUR", userToken);
      console.log("ID TOKEN", id_token);
      router.replace("/pages/dashboard"); // Redirection après succès
    } else if (response?.type === "error") {
      console.error("Erreur d'authentification", response.error);
    }
  }, [response]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {!userToken ? (
        <Button
          disabled={!request}
          title="Se connecter avec Google"
          onPress={() => promptAsync()}
        />
      ) : (
        <>
          <View>
            <Button
              title="Se déconnecter"
              onPress={() => {
                setUserToken(null);
                router.replace("/"); // Redirection à la déconnexion
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

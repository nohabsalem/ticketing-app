import * as Google from "expo-auth-session/providers/google";
import { useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { Button, View } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "1077299977879-hitllervgsdd5k28f5u05dv43aufbc6o.apps.googleusercontent.com",
    iosClientId:
      "1077299977879-t3njpke1ncbplbbtlgrvg9gi4951o2jh.apps.googleusercontent.com",
  });
  const router = useRouter();
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    console.log("Response type:", response?.type);
    console.log("Response:", response);

    if (response?.type === "success") {
      const { id_token } = response.params;
      setUserToken(id_token);
      console.log("TOKEN UTILISATEUR", id_token);
      router.replace("/pages/dashboard");
    } else if (response?.type === "error") {
      console.error("Erreur d'authentification:", response.error);
      console.error("Error details:", response);
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
          onPress={() => {
            console.log("Tentative de connexion...");
            promptAsync();
          }}
        />
      ) : (
        <View>
          <Button
            title="Se déconnecter"
            onPress={() => {
              setUserToken(null);
              router.replace("/");
            }}
          />
        </View>
      )}
    </View>
  );
}

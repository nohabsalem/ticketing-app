import { Button, ButtonText } from "@/components/ui/button";
import * as Google from "expo-auth-session/providers/google";
import { Link, useRouter } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

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
      <Text className="text-4xl font-semibold text-blue-600 text-center mb-6">
        Bienvenue sur la Plateforme !
      </Text>
      <Link href="/pages/dashboard" className="mb-4">
        <Text className="text-lg text-blue-500 underline">
          Accéder au tableau de bord sans se connecter
        </Text>
      </Link>

      {!userToken ? (
        <>
          {/* <Link href="/pages/dashboard">Naviguer quand même</Link> */}
          <Button
            className="bg-[#0062FF]"
            size="md"
            onPress={() => promptAsync()}
          >
            <ButtonText>Se connecter avec Google</ButtonText>
          </Button>
        </>
      ) : (
        <View></View>
      )}
    </View>
  );
}

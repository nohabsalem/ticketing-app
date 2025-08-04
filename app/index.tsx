import { makeRedirectUri } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import { Button, View } from "react-native";
console.log("URL AUTORISÉE/ ATTENDUE ", makeRedirectUri());

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  // État pour stocker les infos utilisateur (ici on conserve le idToken)
  const [userInfo, setUserInfo] = useState(null);

  // Configure la requête OAuth Google avec ton clientId
  // Remplace "monlien.apps.googleusercontent.com" par ton vrai clientId web OAuth2
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "http://localhost:8081",
    // Si tu as androidClientId et iosClientId, tu peux les ajouter ici :
    androidClientId:
      "1077299977879-58ugmg1d484n6sk8fkt1695264ccerrj.apps.googleusercontent.com",
    iosClientId:
      "1077299977879-t3njpke1ncbplbbtlgrvg9gi4951o2jh.apps.googleusercontent.com",
    webClientId:
      "1077299977879-hitllervgsdd5k28f5u05dv43aufbc6o.apps.googleusercontent.com",
    redirectUri: makeRedirectUri({
      // Si tu utilises un schéma personnalisé, ajoute-le ici, sinon laisse vide
      // scheme: "com.monnomapp",
    }),
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      {!userInfo ? (
        <Button
          disabled={!request}
          title="Se connecter avec Google"
          onPress={() => promptAsync()}
        />
      ) : (
        <>
          <Button
            title="Se déconnecter"
            onPress={() => {
              setUserInfo(null);
            }}
          />
        </>
      )}
    </View>
  );
}

import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Footer() {
  return (
    <View className="items-center bg-blue-600 p-4 flex-shrink-0">
      <View className="flex-row justify-center space-x-6 mb-2">
        <Link href="/" className="text-lg underline text-white">
          Accueil
        </Link>
        <Link
          href="/pages/tickets/ticket-list"
          className="text-lg underline text-white"
        >
          Tickets
        </Link>
        <Link href="/" className="text-lg underline text-white">
          Accueil
        </Link>
        <Link href="/" className="text-lg underline text-white">
          Accueil
        </Link>
      </View>
      <Text className="text-sm text-white mt-1 text-center">
        © 2025 La Plateforme - Tous droits réservés
      </Text>
    </View>
  );
}

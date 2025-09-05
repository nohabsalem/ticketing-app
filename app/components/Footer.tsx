import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Footer() {
  return (
    <View className="items-center bg-blue-600 p-4 mt-8">
      <Link href="/" className="text-lg underline text-white mb-2">
        Accueil {"\n"}
      </Link>
      <Text className="text-md text-white">
        © 2025 La Plateforme - Tous droits réservés
      </Text>
    </View>
  );
}

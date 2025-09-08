// app/hooks/upload.tsx
import * as DocumentPicker from "expo-document-picker";

export async function pickFile() {
  try {
    const res = await DocumentPicker.getDocumentAsync({
      type: "*/*", // change en "image/*" si tu veux seulement des images
      copyToCacheDirectory: true,
    });

    if (res.canceled) {
      console.log("Annulé par l’utilisateur");
      return null;
    }

    if (res.assets && res.assets.length > 0) {
      console.log("Fichier choisi :", res.assets[0].name);
    }
    return res; // res contient { assets: [{ name, size, uri, mimeType }] }
  } catch (err) {
    console.error("Erreur lors de la sélection :", err);
    return null;
  }
}

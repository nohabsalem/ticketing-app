import { StyleSheet, type TextProps } from "react-native";

type Props =  TextProps &{
  /***
   * Ces propriétés sont utilisées pour définir le style du texte.
   * Si `text` est fourni, il remplacera le style du texte par défaut.
   * Si `color` est fourni, il remplacera la couleur par défaut.
   */
    text?: string,
    color?: string
}

export const styles = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text01: {
    fontSize: 16,
    color: "#0062ff",
    fontWeight: "light",
    fontFamily: "poppins",
  },

  text02: {
    fontSize: 16,
    color: "#0062ff",
    fontWeight: "regular",
    fontFamily: "poppins",

  },

  text03: {
    fontSize: 16,
    color: "#0062ff",
    fontWeight: "semibold",
    fontFamily: "poppins",
  },

  text04: {
    fontSize: 16,
    color: "#0062ff",
    fontWeight: "bold",
    fontFamily: "poppins",
  },

  text05: {
    fontSize: 16,
    color: "#0062ff",
    fontWeight: "black",
    fontFamily: "poppins",
  }

});


export default function ThemedText({ text, color, ...rest }: Props) {
    
}
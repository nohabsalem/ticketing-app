import { StyleSheet, type TextProps } from "react-native";

type Props =  TextProps &{
  /***
   * Ces propriétés sont utilisées pour définir le style du texte.
   * Si `text` est fourni, il remplacera le style du texte par défaut.
   * Si `color` est fourni, il remplacera la couleur par défaut.
   */
    text?: string,
    color?: string
    button?: string,
    buttonText?: string,
    input?: string,
  
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
  },

  
  title: {
    fontSize: 25,
    color: "#fe0000",
    fontWeight: "bold",
    fontFamily: "poppins",
  },
  
  formcontainer: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  
  formtitle: {
    fontSize: 25,
    color: "#0062ff",
    fontWeight: "bold",
    fontFamily: "poppins",
  },
  
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontFamily: "poppins",
  },

  input: {
    height: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 16,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
   
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  googleButton: {
    backgroundColor: '#4285F4',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default function ThemedText({ text, color, button, buttonText, input, ...rest }: Props) {
    
}
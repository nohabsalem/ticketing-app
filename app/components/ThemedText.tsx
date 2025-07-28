import { StyleSheet, type TextProps } from "react-native";

type Props = TextProps & {
  /***
   * Ces propriétés sont utilisées pour définir le style du texte.
   * Si `text` est fourni, il remplacera le style du texte par défaut.
   * Si `color` est fourni, il remplacera la couleur par défaut.
   */
  text?: string;
  color?: string;
  button?: string;
  buttonText?: string;
  input?: string;
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text00: {
    fontSize: 16,
    color: "#000",
    fontWeight: "light",
    fontFamily: "poppins",
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
    color: "#0062ff",
    fontWeight: "bold",
    fontFamily: "poppins",
  },

  formcontainer: {
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
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
    color: "#333",
    marginBottom: 8,
    fontFamily: "poppins",
  },

  forminput: {
    height: 30,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 16,
  },

  button: {
    backgroundColor: "#0062ff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  googleButton: {
    backgroundColor: "#6cb3ffff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    fontWeight: "bold",
    color: "#fff",
  },

  container2: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  welcome: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 30,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  card: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
  },
  label2: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  number: {
    fontSize: 24,
    fontWeight: "bold",
  },
  totalBox: {
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    marginBottom: 40,
    width: "80%",
  },
  total: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  ticketsInfo: {
    width: "100%",
    alignItems: "center",
  },
  noTicket: {
    backgroundColor: "#d0e7ff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
    color: "#333",
  },
  button2: {
    width: "80%",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    width: "100%",
  },

  ticketcontainer: {
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    borderRadius: 8,
  },

  tickets: {
    borderWidth: 2,
    borderColor: "black",
    borderStyle: "solid",
    padding: 10,
    borderRadius: 8,
  },
});

export default function ThemedText({
  text,
  color,
  button,
  buttonText,
  input,
  ...rest
}: Props) {}

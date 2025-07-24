import { Text, View } from "react-native";
export default function Dashboard() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Dashboard Page</Text>
        <Text>TICKETS OUVERTS</Text>
        <Text>TICKETS FERMÉS </Text>
        <Text>TOTAL DE TICKETS </Text>
      </View>
    </>
  );
}

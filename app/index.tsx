import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        
      }}
    >
      <Text>Bloc Index :</Text>

      <Text>Navigation :</Text>

      <View style={{padding: 10, backgroundColor:"#c5c5c5"}}>
          <Text>1. Login (via google)</Text>
          <Text>a - Dashbboard </Text>
      </View>
            <Text>2. Register ?</Text>

      <Text>Autres pages</Text>
      

    </View>

  );
}


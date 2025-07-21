import { Link } from 'expo-router';
import { Text, View } from "react-native";
import { styles } from "./components/ThemedText";

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
      <Text style={styles.text01}>
        
      </Text>

      <Text>Navigation :</Text>
      
      <View style={{padding: 10, backgroundColor:"#c5c5c5"}}>
        <Link href="/pages/login" style={styles.text01}>
        Go to Login Page (API)
      </Link>          <Text>a - Dashbboard </Text>
      </View>
            <Text>2. Register ?</Text>

      <Text>Autres pages</Text>
      

    </View>

  );
}


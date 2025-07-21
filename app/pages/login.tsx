import { Text, View } from 'react-native';
import { styles } from "../components/ThemedText";


export default function Login(){
    return (
        <View
        style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
        }}
        >
        <Text style={styles.text01}>Login Page</Text>
        </View>
    );
}
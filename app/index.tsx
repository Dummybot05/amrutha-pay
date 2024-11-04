import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    style={styles.headerImage}
                    source={require('../assets/images/logo.png')} />
                <Text style={styles.headerText}>Amrutha Pay</Text>
            </View>
            <FontAwesome name="user-circle-o" size={64} color="black" />
            <Text style={styles.headerText}>Create Account</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} placeholder="Email" />
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} placeholder="Password" />
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput style={styles.input} placeholder="Confirm Password" />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Already have an account?</Text>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    headerContainer: {
        width: '94%',
        height: 80,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: 20,
    },
    headerImage: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        width: "90%"
    },
    input: {
        height: 60,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '90%',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        width: '90%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

})
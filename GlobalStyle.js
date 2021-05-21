import { StyleSheet } from "react-native";

const blu = '#046CDE'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "white"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: 30
    },
    input: {
        borderWidth: 1,
        borderColor: blu,
        borderRadius: 7,
        padding: 10,
        fontSize: 20,
        marginBottom: 25
    },
    button: {
        borderRadius: 7,
        padding: 15,
        marginBottom: 20,

    },
    buttonText: {
        fontSize: 23,
        textAlign: 'center',
        color: 'white'
    },
    msg: {
        fontSize: 17,
    }
})
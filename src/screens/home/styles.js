import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#C22A1F"
    },

    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        color: '#fff',
        width: '100%',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center'
    },

    linha: {
        marginTop: 20,
        marginBottom: 20,
        borderBottomColor: '#C22A1F',
        borderBottomWidth: 1,
    },

    buttonEnviar: {
        backgroundColor: '#C22A1F',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export default styles;

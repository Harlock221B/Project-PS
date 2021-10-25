import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },

    banner: {
        width: '100%',
        resizeMode: 'contain'
    },

    title: {
        color: '#C22A1F',
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

});

export default styles;

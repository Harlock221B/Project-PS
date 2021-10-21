import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: "#222",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        textAlign: "center"
    },
    title: {
        fontSize: 20,
        color: "#222",
        marginBottom: 10,
    },
    radio:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,
    },
    radioText:{
        fontSize: 17,
        color: "#222",
    },
    radioButton:{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#222",
        justifyContent: "center",
        alignItems: "center",
    },
    radioChecked:{
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#222",
    },
    input:{
        borderWidth: 1,
        borderColor: "#222",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    button:{
        backgroundColor: "#222",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    buttonText:{
        color: "#fff",
        fontSize: 17,
        textAlign: "center",
    },
    container:{
        flex: 1,
        padding: 10,
    },
});


export default styles;
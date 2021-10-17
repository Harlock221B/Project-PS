import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },

  containerLogo: {
    flex: 1,
    justifyContent: "center",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },

  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    padding: 10,
    borderRadius: 7,
  },

  btnSubmit: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CB262D",
    width: "90%",
    height: 45,
    padding: 10,
    borderRadius: 7,
  },

  submitText: {
    color: "#fff",
    fontSize: 17,
  },

  btnRegister: {
    alignItems: "center",
    color: "#00BFFF",
    width: "90%",
    height: 45,
    padding: 10,
    borderRadius: 7,
    marginTop: 15,
  },
});

export default styles;
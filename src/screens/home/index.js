import React from "react";
import { View, Text, ScrollView } from "react-native";
import Formulario from "../../components/Form";
import styles from "./styles";
export default function principal() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>
        Pesquisa de Satisfação
      </Text>
      <View style={styles.container}>
        <Formulario title=" 1. " />
        <View style={styles.linha} />
        <Formulario title=" 2. " />
        <View style={styles.linha} />
        <Formulario title=" 3. " />
        <View style={styles.linha} />
        <Formulario title=" 4. " />
        <View style={styles.linha} />
        <Formulario title=" 5. " />
        <View style={styles.linha} />
        <Formulario title=" 6. " />
        <View style={styles.linha} />
        <Formulario title=" 7. " />
        <View style={styles.linha} />
        <Formulario title=" 8. " />
        <View style={styles.linha} />
        <Formulario title=" 9. " />
        <View style={styles.linha} />
        <Formulario title=" 10. " />
        <View style={styles.linha} />
        <Formulario title=" 11. " />
        <View style={styles.linha} />
        <Formulario title=" 12. " />
        <View
          style={styles.buttonEnviar}
          onPress={() => {
            alert("Enviado com sucesso!");
          }}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </View>
      </View>
    </View>
  );
}

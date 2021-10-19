import React from "react";
import styles from './style';
import {
  View, 
  Text
} from "react-native";


export default function principal() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>Pesquisa de Satisfação</Text>
    </View>
  );
}

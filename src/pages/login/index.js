import React, { useState, useEffect } from "react";
import { styles } from "./style";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  Text,
  Animated,
} from "react-native";

export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
          style={{
            width: 300,
            height: 100,
          }}
          source={require("../../assets/logo.png")}
        />
      </View>
      <Animated.View
        style={[
          styles.container,
          {
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCorrected={false}
          onChange={() => { }}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          autoCorrected={false}
          onChange={() => { }}
        />

        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.submitText}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

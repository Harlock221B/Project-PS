import React, { useState, useEffect } from "react";
import styles from "./style";
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  Image,
  TextInput,
  Text,
  Animated,
} from "react-native";

import firebase from "../../config/firebase.js"

export default function Login(navigation) {
  //Database connection
  const database = firebase.firestore();

  //Login Configuration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const Login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        let user = userCredential.user;
        // navigation.navigate("Home", { user: user });
        console.log(user);
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
      });

  }
  //Animations 
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
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
          placeholder="Informe o seu Email"
          type="text"
          onChange={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Informe a sua Senha"
          secureTextEntry={true}
          type="text"
          onChange={(text) => setPassword(text)}
          value={password}
        />
        {errorLogin === true
          ?
          <View style={styles.contentAlert}>
            <Text style={styles.warningAlert}>Email ou senha incorretos</Text>
          </View>
          :
          <View />
        }
        {email === "" || password === ""
          ?
          <TouchableOpacity
            disable={true}
            style={styles.btnSubmit}
          >
            <Text style={styles.submitText}>Entrar</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            style={styles.btnSubmit}
            onPress={Login}
          >
            <Text style={styles.submitText}>Entrar</Text>
          </TouchableOpacity>


        }
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

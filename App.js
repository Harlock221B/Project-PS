import React, { useState, useEffect } from 'react';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  StyleSheet,
  Image,
  TextInput,
  Text,
  Animated
} from 'react-native';


export default function App() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(()=> {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
      })
    ]).start();
    }, []);
  


  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.containerLogo}>
        <Image
        style={{
          width: 300,
          height: 100,
          }
        }
          source={require('./src/assets/logo.png')}
        />
      </View>
      <Animated.View 
        style={[
          styles.container,
          {
            transform: [
              { translateY: offset.y }
            ]
          }
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

        <TouchableOpacity style={styles.btnRegister}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    margin: -100,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },

  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    padding: 10,
    borderRadius: 7,
  },

  btnSubmit: { 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BFFF',
    width: '90%',
    height: 45,
    padding: 10,
    borderRadius: 7,
  },

  submitText: {
    color: '#fff',
    fontSize: 17,
  },

  btnRegister: {
    alignItems: 'center',
    color: '#00BFFF',
    width: '90%',
    height: 45,
    padding: 10,
    borderRadius: 7,
    marginTop: 15,
  },
});



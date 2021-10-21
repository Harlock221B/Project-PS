import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles';


class Formulario extends Component { 
    constructor() {
        super();
        this.state = {
            data: ['Alta', 'Média', 'Baixa'],
            checked: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.radio}>
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <View>
                                    <Text style={styles.text}>{item}</Text>
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.radioButton}
                                        onPress={() => this.setState({ checked: index })}
                                    >
                                        {
                                            this.state.checked === index &&
                                            <View style={styles.radioChecked} />
                                        }
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </View>
                <Text>
                    Comentários:
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui"
                    multiline={true}
                    numberOfLines={4}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>
                        Enviar
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Formulario;






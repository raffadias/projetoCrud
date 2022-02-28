import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './style';

export default function RegisterForm(){
    return (
        <View style={styles.container}>
            <View>
                <Text>Cadastrar Cliente</Text>
                <TextInput
                placeholder='Nome'
                />

                <TextInput
                placeholder='E-mail'
                />

                <TextInput
                placeholder='Contato'
                />

                <TextInput
                placeholder='CEP'
                />

                <TouchableOpacity>
                    Cadastrar
                </TouchableOpacity>


            </View>
        </View>
    );
}
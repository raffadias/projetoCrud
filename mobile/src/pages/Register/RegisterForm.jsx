import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';

import api from '../../services/api';
import styles from './style';

export default function RegisterForm(){

    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [contact, setContact] = useState([]);
    const [zipcode, setZipcode] = useState([]);

   async function register(data){
    const baseURL = 'http://192.168.0.103:3333';
   return api({
        url: `${baseURL}/register`,
        method: "POST",
        timeout: 5000,
        data: data,
        headers: {
            Accept: 'application/json'
        }
   }).then((response) => {
       return Promise.resolve(response)
   }).catch((error) =>{
       return Promise.reject(error)
   })
        
   };

   const saveClient = () => {
        const data = {
            name: name,
            email: email,
            contact: contact,
            zipcode: zipcode
        };

        register(data)
        .then((response) => {
            console.log(response);
            Alert.alert('Sucesso! Cliente cadastrado.');
        })
        .catch((error) => {
            console.log('Deu Erro');
            console.log(error);
        });
   };

    return (
        <View style={styles.container}>
                    <Text style={styles.inputTitle}>
                        Cadastrar Cliente
                    </Text>
                <View style={styles.inputContainer}>
                <TextInput
                placeholder='Nome'
                style={styles.inputRegister}
                autoComplete={'name'}
                keyboardType={'default'}
                value={String(name)}
                onChangeText={value => setName(value)}
                />

                <TextInput
                placeholder='E-mail'
                style={styles.inputRegister}
                autoComplete={'email'}
                keyboardType={'email-address'}
                value={String(email)}
                onChangeText={value => setEmail(value)}
                />

                <TextInput
                placeholder='Contato'
                style={styles.inputRegister}
                autoComplete={'tel'}
                keyboardType={'number-pad'}
                maxLength={11}
                value={String(contact)}
                onChangeText={value => setContact(value)}
                />

                <TextInput
                placeholder='CEP'
                style={styles.inputRegister}
                autoComplete={'postal-code'}
                keyboardType={'number-pad'}
                maxLength={8}
                value={String(zipcode)}
                onChangeText={value => setZipcode(value)}
                />
                </View>
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() => saveClient()}
                >
                    <Text style={styles.detailsButtonText}>Cadastrar</Text>
                </TouchableOpacity>
        </View>
    );
}
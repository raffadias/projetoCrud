import React from 'react';
import {View, Text, Alert} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, Avatar } from 'react-native-elements';
import styles from './style';
import api from '../../services/api';

export default function Profile(){

    const navigation = useNavigation();
    
    const route = useRoute();

    const client = route.params.client;

    function navigateToEditProfile(){
        navigation.navigate('EditProfile', ({ client }));
    }

    function navigateToHome(){
        navigation.navigate('Home');
    }

    async function deleteClient(id){
        const response = await api.delete(`clients/${id}`);
        Alert.alert('Cliente deletado com sucesso!');
        console.log(response);
    }

    

    return (
        <View style={styles.container}>
                <View style={styles.avatarClient}>
                    <Avatar
                    size={80}              
                    rounded
                    source={{uri: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png'}}              
                    />                         
                </View>
                <View style={styles.client}>
						<View style={styles.clientInfo}>
                            <View style={styles.clientMainInfo}>
                                <Text style={styles.clientProperty}>ID:</Text>
                                <Text style={styles.clientValue}>{client.id}</Text>
                                <Text style={styles.clientProperty}>Nome:</Text>
                                <Text style={styles.clientValue}>{client.name}</Text>
                                <Text style={styles.clientProperty}>Contato:</Text>
							    <Text style={styles.clientValue}>{client.contact}</Text>
                            </View>
                            
                            <Text style={styles.clientProperty}>E-mail:</Text>
                            <Text style={styles.clientValue}>{client.email}</Text>
							<Text style={styles.clientProperty}>CEP:</Text>
							<Text style={styles.clientValue}>{client.zipcode}</Text>
			            </View>
                        <View style={styles.udButtons}>
                            <Button
                            title="Editar Perfil" 
                            buttonStyle={styles.editClient}
                            onPress={navigateToEditProfile}/>


                            <Button 
                            title="Deletar Perfil" 
                            buttonStyle={styles.deleteClient} 
                            onPress={()=>deleteClient(client.id)}
                            />
                        </View>
                </View>
        </View>
    );
}
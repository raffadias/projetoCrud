import React, { useState, useEffect } from 'react';
import { Text,View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';


import api from '../../services/api';
import styles from './style';


export default function Home(){
	const [clients, setClients] = useState([]);
	const navigation = useNavigation();

	function navigateToProfile(client) {
		navigation.navigate('Profile', { client });
	};

	async function loadClients() {
		const response = await api.get('clients');
		setClients(response.data);
	}

	useEffect(() => {
		loadClients();
	}, []);


			return (
				<View style={styles.container}>
				<TouchableOpacity
				style={styles.refreshButton}
				onPress={() => loadClients()}
				>
					<Text style={styles.refreshButtonText}>Atualizar Lista</Text>
				</TouchableOpacity>
				<FlatList
					data={clients}
					style={styles.clientList}
					keyExtractor={client => String(client.id)}
					showsVerticalScrollIndicator = {false}
					renderItem={({ item: client }) => (
					<View style={styles.client}>
						<View style={styles.clientInfo}>
							<Text style={styles.clientProperty}>Nome:</Text>
							<Text style={styles.clientValue}>{client.name}</Text>
							<Text style={styles.clientProperty}>Contato:</Text>
							<Text style={styles.clientValue}>{client.contact}</Text>
						</View>
						
						<TouchableOpacity 
						style={styles.detailsButton} 
						onPress={() => navigateToProfile(client)}>
							<Text style={styles.detailsButtonText}>Ver Perfil</Text>
							<Icon name="arrow-right" type="feather" size={16} color="#121113" />
						</TouchableOpacity>
					</View>
					)}
				/>	
				</View>
			);
}
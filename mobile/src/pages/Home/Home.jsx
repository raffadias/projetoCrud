import React from 'react';
import {Text,View, FlatList} from 'react-native';

import styles from './style';

const DATA =[
	{
		"id": "8c2c",
		"name": "Matheus Ribeiro Dias",
		"email": "tuezin@gmail.com",
		"contact": "(11) 99891-9292",
		"zipcode": "18205-000"
	},
	{
		"id": "bb47",
		"name": "Rafael Ribeiro Dias",
		"email": "rafanesck_@gmail.com",
		"contact": "(11) 99891-9292",
		"zipcode": "18205-000"
	},
	{
		"id": "b0fe",
		"name": "Otavio Ribeiro Dias",
		"email": "otaviodias@gmail.com",
		"contact": "(11) 99891-9292",
		"zipcode": "18205-000"
	}
]

  const Item = ({ name, email, contact }) => (
    <View style={styles.listItem}>
      <Text>{name} - {email} - {contact}</Text>
    </View>
  );


export default function Home(){

        const renderItem = ({ item }) => (
            <Item name={item.name} email={item.email} contact={item.contact}/>
        )

    return (
        <View style={styles.container}>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatList}
            />
        </View>
    );
}
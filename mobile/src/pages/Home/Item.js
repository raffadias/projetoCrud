import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function Item({ title }){
    <View>
        <Text style={styles.listItem}>{title}</Text>
    </View>
}
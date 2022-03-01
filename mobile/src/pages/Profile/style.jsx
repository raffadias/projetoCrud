import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#899878',
    },

    avatarClient: {
        marginTop: 10,
        alignItems: 'center',
    },

    clientMainInfo: {
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },

    clientInfo: {
            marginTop: 20,
            marginLeft: 12,
            marginRight: 12
    },

    client: {
        marginTop: 50,
        marginRight: 10,
        marginLeft: 10,
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#e4e6c3',
    },

    clientProperty: {
        fontSize: 20,
        color: '#121113',
        fontWeight: 'bold',
    },

    clientValue: {
        fontSize: 20,
        marginBottom: 24,
        color: '#222725',
    },

    udButtons: {
        marginTop: 10,
    }, 

    editClient: {
        backgroundColor: '#121113',
        borderRadius: 8,
        marginBottom: 10,
    },
    
    deleteClient: {
        backgroundColor: '#e02041',
        borderRadius: 8,
        marginBottom: 10,
    },
});
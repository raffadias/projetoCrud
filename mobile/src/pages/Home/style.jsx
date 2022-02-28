import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#899878',
    },

    flatList: {
        paddingTop: 200,
        marginHorizontal: 20
        
    },

    clientList: {
        marginTop: 32,
        marginLeft: 12,
        marginRight: 12
    },

    client: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#e4e6c3',
        marginBottom: 16
    },

    clientInfo: {
        //flexDirection: 'row',
        //alignItems: 'baseline',
        //justifyContent: 'space-between'
    },

    clientProperty: {
        fontSize: 14,
        color: '#121113',
        fontWeight: 'bold',
    },

    clientValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#222725',
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText: {
        color: '#121113',
        fontSize: 15,
        fontWeight: 'bold'
    },


});
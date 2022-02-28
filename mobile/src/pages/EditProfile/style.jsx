import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#899878',
    },
    inputTitle: {
        paddingTop: 30,
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#121113',
    },
    inputContainer : {
        alignContent: 'space-around',
        marginTop: 50,
        margin: 24,
        padding: 24,
        backgroundColor: '#e4e6c3',
        borderRadius: 8,
    },
    inputRegister: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f7f7f2',
        borderRadius: 8,
    },
    detailsButton: {
        alignSelf: 'center',
        backgroundColor: '#222725',
        padding: 15,
        paddingRight: 100,
        paddingLeft: 100,
        borderRadius: 8,
    },
    detailsButtonText: {
        color: '#f7f7f2',
        fontWeight: 'bold',
        fontSize: 20,
    },

})
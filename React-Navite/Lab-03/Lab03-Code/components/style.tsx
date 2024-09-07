import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: '#cdf5f7',
    },
    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTop: {
        fontSize: 60,
        fontWeight: 'bold',
    },
    
    icon: {
        width: '100%',
        height: '100%',
    },

    body: {
        flex: 1,
    },

    title: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '75%',
        textAlign: 'center',
    },

    bottom: {
        flex: 1,
        marginBottom: 60,
    },

    input: {
        flex: 1,
        flexDirection: 'row',

    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    TObtn: {
        padding: 10,
        backgroundColor: '#e3c100',
        width: '100%',
        height: '50%',
        textAlign: 'center',
        justifyContent: 'center',
    },
    TextBtn: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    shawdow: {
        flex: 1,
    },

});

export default style;
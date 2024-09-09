import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    // Container
    container: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    // Header
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },

    // Body
    body: {
        flex: 2,
        width: '100%',
    },
    login: {
        flex: 3,
        width: '100%',
    },
    input: {
        flex: 2,
        width: '100%',
        alignContent: 'space-between',
    },
    username: {
        flex: 1,
        alignItems: 'center',
    },
    inputusername: {
        width: '100%',
        height: '60%',
        backgroundColor: '#dddddd',
        borderRadius: 4,
        paddingHorizontal: 20,
        fontSize: 20,
    },

    password: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },

    inputpassword: {
        width: '75%',
        height: '60%',
        marginVertical: 10,
        backgroundColor: '#dddddd',
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        paddingHorizontal: 20,
        fontSize: 20,
    },
    contaiIcon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        height: '60.2%',
        backgroundColor: '#dddddd',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        
    },

    icon: {
        fontSize: 30,
        color: 'black',
    },

    button: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnLogin: {
        width: '100%',
        height: '60%',
        backgroundColor: '#f53d2d',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    textLogin: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },

    fotget: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        color: 'black',
    },
    textblue: {
        color: 'blue',
    },

    // Footer
    footer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },

    iconfooter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%',
        backgroundColor: '#1593c6',
        marginHorizontal: 5,
        borderRadius: 4,
    },
    icon_f: {
        fontSize: 40,
        color: 'white',
    },

})

export default styles
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        flex: 1,
        backgroundColor: 'red',
        width: '100%',
    },
    body: {
        flex: 2,
        backgroundColor: 'blue',
        width: '100%',
    },
    footer: {
        flex: 1,
        backgroundColor: 'green',
        width: '100%',
    },
    icon: {
        fontSize: 90,
        color: 'green',
        height: 100,
    },
})

export default styles
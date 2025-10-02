import { Text, View, StyleSheet, Image, br, Button, ScrollView,} from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1}}>

            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/fotos/download.png') }
                    style={ estilos.foto }
                />
                
                <Text style={estilos.nome}>Meus Contatos</Text>
            </View>

            <Text style={estilos.contato}>
                Email: vitorhugotavares765@gmail.com ✉✉
            </Text>
            <Text style={estilos.contato}>
                Telefone: 18 99732 3298 📞📞
            </Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    contato: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#000",
    },

    cabecalho: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#',
        padding: 10,
        marginBottom: 10,
    },

    foto: {
        width: 110,
        height: 110,
    },

    nome: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#",
    }
});

export default TelaInicio;
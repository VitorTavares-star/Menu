import { Text, View, StyleSheet, Image, br, Button, ScrollView,} from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1}}>
            <View style={estilos.cabecalho}>
                <Image
                    source={ require('../assets/fotos/eu.jpeg') }
                    style={ estilos.foto }
                />
                
                <Text style={estilos.nome}>Vitor Tavares</Text>
            </View>

            <ScrollView>
            <Text style={estilos.texto}>
                Sou um programador em formação, com experiência prática no desenvolvimento de sistemas e grande domínio em Excel, 
                ferramenta na qual desempenho com mais eficiência. Atualmente, estou cursando Desenvolvimento de Sistemas, 
                com uma base anterior em Robótica, o que ampliou minha capacidade lógica e técnica para resolver problemas.
            </Text>
            <Text style={estilos.texto}>
                Atualmente trabalho em uma UBS (Unidade Básica de Saúde), o que me proporcionou habilidades interpessoais, 
                organização e responsabilidade no ambiente de trabalho. Estou em busca de oportunidades para aplicar e 
                expandir meus conhecimentos em tecnologia.
            </Text>
            <Text style={estilos.texto}>
                    Habilidades: 
                    Programação e lógica de sistemas,
                    Excel (avançado),
                    Montagem e estruturação de sistemas,
                    Organização e responsabilidade no ambiente profissional,
                    Facilidade com tecnologia e aprendizado rápido
            </Text>
            <Text style={estilos.texto}>
                Cursos: 
                Curso Técnico em Desenvolvimento de Sistemas (em andamento) e
                Curso de Robótica (concluído)
            </Text>
            </ScrollView>

            <Button title="Sair" 
            color="#000"
            onPress={() => {}} />

        </View>
    );
}

const estilos = StyleSheet.create({
    cabecalho: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#000',
        padding: 10,
        marginBottom: 10,
    },
    nome: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#fff",
    },
    foto: {
        width: 110,
        height: 110,
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',
        padding:13
    },


});

export default TelaInicio;


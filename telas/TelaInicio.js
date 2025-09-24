import { Text, View, StyleSheet, Image, br } from 'react-native';

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
            <Text style={estilos.texto}>
                Meu nome é Vitor Hugo Tavares Abrão, nasci no dia 1º de
                    novembro de 2006 e moro em Rubiácea, uma cidade 
                    pequena, mas que faz parte de quem eu sou. Ainda 
                    estou estudando e, enquanto isso, faço estágio no 
                    posto da cidade — uma experiência que, apesar de 
                    simples, tem me ensinado bastante sobre rotina, r
                    esponsabilidade e gente. 
                </Text>
                <Text style={estilos.texto}>
                    Sou uma pessoa muito calma, talvez até demais. Mas calma não quer dizer 
                    “bonzinho” o tempo todo. Eu mesmo costumo brincar dizendo que sou calmo, 
                    falso, Judas e Caim — e, sim, isso diz muito sobre meu humor, meu jeito 
                    direto e, talvez, sobre minha sinceridade um pouco ácida.
                </Text>
                <Text style={estilos.texto}>
                    Nos meus momentos livres, gosto de jogar. Mas não qualquer jogo. Curto os 
                    difíceis, aqueles que fazem muita gente desistir. Sekiro é um dos meus favoritos, porque exige 
                    foco, estratégia e paciência — coisas que, de certa forma, também aplico na vida.
                    Ainda não conquistei nada que dê pra colocar numa prateleira ou usar como
                    medalha, mas estou só começando. Tento aprender com o que a vida coloca 
                    no meu caminho e sigo em frente, do meu jeito: observando, pensando e, às vezes, rindo do absurdo das coisas.
                </Text>
            
            {/* Foto
            Nome
            Biografia
            Hobbies
            Sonhos */}
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
    },
    nome: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    foto: {
        width: 80,
        height: 80,
    },
    texto: {
        fontSize: 16,
        fontWeight: 'bold',

    }
});

export default TelaInicio;
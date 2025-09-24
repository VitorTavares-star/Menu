import { Text, View, StyleSheet, Image } from 'react-native';

function TelaInicio() {
    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={estilos.containerHorizontal}>
                <Image
                    source={require('../assets/fotos/eu.jpeg')}
                    style={estilos.fotoGrande}
                />
                <View style={estilos.textosContainer}>
                    <Text style={estilos.nome}>Vitor Tavares</Text>

                    <Text style={estilos.texto}>
                        Meu nome é Vitor Hugo Tavares Abrão, nasci no dia 1º de
                        novembro de 2006 e moro em Rubiácea, uma cidade
                        pequena, mas que faz parte de quem eu sou. Ainda
                        estou estudando e, enquanto isso, faço estágio no
                        posto da cidade — uma experiência que, apesar de
                        simples, tem me ensinado bastante sobre rotina,
                        responsabilidade e gente.
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
                </View>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    containerHorizontal: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10,
    },
    fotoGrande: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10,
    },
    textosContainer: {
        flex: 1,
    },
    nome: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    texto: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: 'justify',
    },
});

export default TelaInicio;

import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import Botao from './botao'; //importar componentes de outro arquivo
import inicio from './inicio';


constructor(props){ // transformar uma classe, como pública, para ser usada em qualquer lugar do app
    super(props);
    this.mostrarTexto = true; // acessar uma variável de fora da render
    this.mostrarBotao = false;
}



    mostrarConteudo(){ //também é possivel utilizar funções para remderizar algo
        if(this.mostrarTexto){ 
            return ( 
                <View style={styles.exemplo}>
                    <inicio></inicio>
                </View>
            );
            }else{
            return(
                <View style={styles.exemplo}>
                    <Botao></Botao>
                </View>
            
            );
            }
    };



export default class App extends React.Component{ // dessa forma, o mesmo resultado é obtido

    ExemploComponente = () => { //criação de componentes fora da tela, que podem ser chamados com uma ação ou necessidade
        return(
            <Text>texto</Text>
        );
    }

    ExemploComponente2 = () => { 
        return(
            <Text>texto2</Text>
        );
    }



    render(){

        if(this.mostrarTexto){ // if e else podem ser utilizados para alternar entre telas
        return ( 
            <View style={styles.exemplo}>
                <inicio></inicio>
            </View>
        );
        }else{
        return(
            <View style={styles.exemplo}>
                <Botao></Botao>
            </View>
        
        );
        }
    }
}



export default function App() { //o estado inicial do aplicativo será utilizado como App
    
    return ( //Return= retorne o código abaixo na tela
        <View style={styles.exemplo}> //View = uma seção do aplicativo, tudo que há dentro dele se comporta como um só
            
            <Text>pudim besta</Text> //Text = uma simples linha de texto
            
            <StatusBar style="auto"></StatusBar> //StatusBar = alteração do estado da barra de notificações, oculta, a mostra
            
            <Image style={styles.imagem} //Image= componente de imagem, podendo ser local, ou externa
                source={{
                    uri: 'https://br.pinterest.com/pin/500673683577380329/', //uri: link da imagem externa
                }}
            ></Image>

        <View>
            <this.ExemploComponente></this.ExemploComponente> //chamando um componente fora da View principal do app
            <this.ExemploComponente2></this.ExemploComponente2>

            <Botao></Botao>
            <inicio></inicio> //chamando um componente externo 

        </View>
        
        </View>
    );
}



const Botao = () =>{ //pode ser usado de varias formas, uma delas, é usá-lo como um componente
    return(
        <Button title="Clique"></Button>
    )
}



const styles = StyleSheet.create({ //Styles = estilos do aplicativo, tamanho de objetos, bordas, a interface no geral
    
    exemplo: { //um nome qualquer pode ser dado ao estilo, e depois ser puxado em qualquer parte do aplicativo
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem:{
        width:50,
        height:50,
    },
})
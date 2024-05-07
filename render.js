import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import Botao from './botao';


export default class App extends React.Component{


    constructor(props){ // transformar uma classe, como pública, para ser usada em qualquer lugar do app
        super(props);
        this.mostrarTexto = true; // acessar uma variável de fora da render
        this.mostrarBotao = false;
    }



    render(){

    var mostrarTexto = true; //var= há várias utilidades, uma delas é setar estados de renderização

    return(
        <ScrollView>
            {
                (mostrarTexto) // utilizando if e else para gerenciar a renderização do app
                ?
                <Text>Texto</Text>// se (mostrarTexto) for verdade
                :
                <Text>nao texto</Text>// se não se (mostrarTexto) não for verdade
            }
            {
                (this.mostrarBotao)
                ?
                <Button title="botao"></Button>
                :
                <Text>sem botao</Text>
            }
        </ScrollView>
    );
};
};
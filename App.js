import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function App(){

  const [numero, setNumero] = useState(0); //guarda o tempo atual do cronômetro.
  const [botao, setBotao] = useState('VAI');
  const [ultimo, setUltimo] = useState(null);
  const [timer, setTimer] = useState(null);

  function vai() {
  if (timer !== null) {
    clearInterval(timer);
    setTimer(null);
    setBotao('VAI');
  } else {
    const novoTimer = setInterval(() => {
      setNumero(valor => valor + 0.1);
    }, 100);

    setTimer(novoTimer);
    setBotao('PARAR');
  }
}

function limpar() {
  if (timer !== null) {
    clearInterval(timer);
    setTimer(null);
  }

  setUltimo(numero);
  setNumero(0);
  setBotao('VAI');
}

  return(
    <View style={styles.container} >
      <Image
      source={require('./src/baixados.jpeg')}
      style={styles.cronometro}
      />

      <Text style={styles.timer} >{numero.toFixed(1)}</Text>

      <View style={styles.btnContainer}>
      <View style={styles.btnArea} >
        <TouchableOpacity style={styles.btn} onPress={vai}>
          <Text style={styles.btnTexto} >{botao}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnArea} >
        <TouchableOpacity style={styles.btn} onPress={limpar}>
          <Text style={styles.btnTexto} >LIMPAR</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },
    cronometro: {
      width: 200,
      height: 200,
      
    },
   timer:{
    color: '#000',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    height: 40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#4040ca',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  })


export default App;

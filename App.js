import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  function calcular(){
    if(peso !== '' && altura !== ''){
      const alt = altura / 100
      const imc = peso / (alt * alt)

      if (imc < 18.5){
        alert("Você está abaixo do peso! Seu IMC: " + imc.toFixed(2))
      }
      else if(imc >= 18.5 && imc < 24.9){
        alert("Você está no Peso! Seu IMC: " + imc.toFixed(2))
      }
      else if (imc >= 25 && imc < 29.9){
        alert("Você está acima do peso! Seu IMC: " + imc.toFixed(2))
      }
      else{
        alert("Você está com algum grau de Obesidade! Seu IMC: " + imc.toFixed(2))
      }

    }else{
      alert("Falta preencher os campos!!")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>
      <TextInput 
      style={styles.input}
      value={peso}
      keyboardType="numeric"
      placeholder="Digite o seu Peso em Kg"
      onChangeText={(peso) => setPeso(peso)}
      />
      <TextInput 
      style={styles.input}
      value={altura}
      keyboardType="numeric"
      placeholder="Digite a sua Altura em cm"
      onChangeText={(altura) => setAltura(altura)}
      />
      <TouchableOpacity onPress={calcular} style={styles.btn}>
        <Text style={styles.txtbtn}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo:{
    color: '#000',
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  btn:{
    marginTop: 10,
    backgroundColor:'#00F',
    width:200,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  txtbtn:{
    color: '#FFF',
    fontSize: 20,
  },
  input:{
    width: 200,
    borderRadius: 20,
    padding: 10,
    margin: 15,
    color: '#fff',
    backgroundColor: '#000',
  }
});

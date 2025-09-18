import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleCadastro = () => {
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Senha:', senha);
    console.log('WhatsApp:', whatsapp);
  };

  function Inicio() {
    roteador.push('/');
  }

  const roteador = useRouter();

  return (
    <LinearGradient
<<<<<<< Updated upstream
      colors={['#fedea6','#fc7ea7', '#7466e6']}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 1 }} 
=======
      colors={['#8000d5','#f910a3', '#fddf00']}
>>>>>>> Stashed changes
      style={styles.container}
    >
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Cadastro</Text>

        
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#aaa"
          value={nome}
          onChangeText={setNome}
        />

     
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

       
     

        <TouchableOpacity style={styles.botao} onPress={handleCadastro}>
          <Text style={styles.textoBotao}>Login</Text>
        </TouchableOpacity>

       

      </View>
    </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 26,
    fontFamily: 'negrito',
    color: '#FFF',
    textAlign: 'center',
  },

  input: {
    height: 50,
    borderRadius: 20,
    borderWidth: 2,
    paddingHorizontal: 14,
    fontSize: 16,
    fontFamily: 'normal',
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  botao: {
    backgroundColor: '#1d1436',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'negrito',
    
  },
});

export default Cadastro;

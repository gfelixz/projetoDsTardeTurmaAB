import { Text, TouchableOpacity, TextInput, View, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function Index() {
  function cadastro() {
    roteador.push('/cadastrar');
  }

  const roteador = useRouter();

  return (
    <LinearGradient
    colors={['#8000d5','#f910a3', '#fddf00']}
  
          style={styles.container}
        >
    <View style={styles.container}>


      <Text style={styles.title}>Login</Text>
      


      <View style={styles.form}>
      <View style={styles.formContainer}>
        <View style={styles.inputBlock}>
         
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputBlock}>
        
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor="#aaa"
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={cadastro}>
        <Text style={styles.footer}>
          Não tem uma conta?{' '}
          <Text style={styles.footerLink}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
    </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',

  },
  inputBlock: {
    marginBottom: 20,
  },
 
  form: {
    marginTop: 150,
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 14,
    fontSize: 16,
    fontFamily: 'normal',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#1d1436',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'negrito',
  },
  title: {
    fontSize: 26,
    fontFamily: 'negrito',
    color: '#000',
    textAlign: 'center',
  },
  subtitle:{
    fontSize:15,
    fontFamily: 'normal',
    color: '#666',
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    fontFamily: 'normal',
  },
  footerLink: {
    color: '#333',
    fontFamily: 'negrito',
    textDecorationLine: 'underline',
  },
});
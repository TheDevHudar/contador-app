import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Números</Text>
      <Text style={styles.contador}>{contador}</Text>
      <TouchableOpacity style={styles.botao} onPress={incrementarContador}>
        <Text style={styles.textoBotao}>Incrementar +1</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  contador: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#007bff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

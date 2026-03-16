import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function CadastroContato({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const salvarContato = () => {
    const novoContato = { 
      name: nome,
      email: email,
      telefone
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(novoContato)
    })
    .then(() => navigation.navigate("ListaContato"))
    .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.text}>Telefone</Text>
      <TextInput
        style={styles.input}
        value={telefone}
        onChangeText={setTelefone}
      />

      <View style={styles.buttonContainer}>
        <Button title="Salvar" onPress={salvarContato} />
      </View>
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
  input: {
    height: 40,
    width: 180,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
  },
  buttonContainer: {
    width: 180,
    marginVertical: 5,
    gap: 4
  },
  text: {
    fontWeight: 'bold',
    paddingLeft: 12
  }
});
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function AlteracaoContato({ route }) {
  const { nome, telefone, email } = route.params;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.text}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
        />
      </View>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
        />
      </View>
      <View>
        <Text style={styles.text}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Salvar"
        />
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
  tinyLogo: {
    width: 90,
    height: 90,
  },
  text: {
    fontWeight: 'bold',
    paddingLeft: '12px'
  }
});
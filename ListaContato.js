import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

export default function ListaContato({ navigation }) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    const carregarContatos = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setContatos(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    carregarContatos();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.contato}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <Text>{item.telefone}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  contato: {
    marginBottom: 10,
    borderBottomWidth: 1,
    paddingBottom: 5
  }
});
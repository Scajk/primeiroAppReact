import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";

export default function ListaContato({ navigation }) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setContatos(data))
      .catch((err) => console.error(err));
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
  },
  botao: { marginTop: 10,
    padding: 10,
    backgroundColor: "#ccc",
    alignItems: "center"
  }
});
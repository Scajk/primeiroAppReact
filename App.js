import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import ListaContato from './ListaContato';
import CadastroUsuario from './CadastroUsuario';
import AlteracaoContato from './AlteracaoContato';
import CadastroContato from './CadastroContato';
import { Ionicons } from '@expo/vector-icons';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const Stack = createNativeStackNavigator();

export default function App() {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0],
  );

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
      name="Login"
      component={Login}
      />
      <Stack.Screen
        name="ListaContato"
        component={ListaContato}
        options={({ navigation }) => ({
            headerRight: () => (
              <Ionicons
                name='add'
                size={24}
                color='black'
                style={{ marginRight: 16 }}
                onPress={() => navigation.navigate('CadastroContato')}
              />
            ),
            headerLeft: null
          })}
      />
      <Stack.Screen
        name="CadastroUsuario"
        component={CadastroUsuario}
      />
      <Stack.Screen
        name="AlteracaoContato"
        component={AlteracaoContato}
      />
      <Stack.Screen
        name="CadastroContato"
        component={CadastroContato}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,
  }
});
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Tô na área</Text>
      <Text style={styles.subtitle}>Selecione a figura geométrica e calcule sua área facilmente.</Text>
      <Button title="Começar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain', // Assegura que a imagem mantém a proporção correta
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
});

import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ShapeContext } from '../context/ShapeContext';

export default function ResultScreen({ navigation }) {
  const { area, shape } = useContext(ShapeContext);

  const shapeNames = {
    circle: 'círculo',
    rectangle: 'retângulo',
    triangle: 'triângulo',
    square: 'quadrado',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área Calculada:</Text>
      <Text style={styles.result}>A área do {shapeNames[shape]} é: {area}</Text>
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
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
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  result: {
    fontSize: 30,
    marginBottom: 20,
  },
});

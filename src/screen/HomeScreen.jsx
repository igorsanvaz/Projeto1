import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione a figura:</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.figure} onPress={() => navigation.navigate('Area', { shape: 'circle' })}>
          <Image source={require('../images/circle.png')} style={styles.image} />
          <Text style={styles.figureText}>Círculo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.figure} onPress={() => navigation.navigate('Area', { shape: 'rectangle' })}>
          <Image source={require('../images/rectangle.png')} style={styles.image} />
          <Text style={styles.figureText}>Retângulo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.figure} onPress={() => navigation.navigate('Area', { shape: 'triangle' })}>
          <Image source={require('../images/triangle.png')} style={styles.image} />
          <Text style={styles.figureText}>Triângulo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.figure} onPress={() => navigation.navigate('Area', { shape: 'square' })}>
          <Image source={require('../images/square.png')} style={styles.image} />
          <Text style={styles.figureText}>Quadrado</Text>
        </TouchableOpacity>
      </View>
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
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  figure: {
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  figureText: {
    marginTop: 10,
    fontSize: 16,
  },
});

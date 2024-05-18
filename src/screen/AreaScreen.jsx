import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ShapeContext } from '../context/ShapeContext';

export default function AreaScreen({ route, navigation }) {
  const { shape } = route.params;
  const [dimensions, setDimensions] = useState({ radius: '', length: '', width: '', height: '', side: '' });
  const [errors, setErrors] = useState({});
  const { setArea, setShape } = useContext(ShapeContext);

  const validateInputs = () => {
    let valid = true;
    let errors = {};

    if (shape === 'circle' && !dimensions.radius) {
      errors.radius = 'Preenchimento obrigatório';
      valid = false;
    } else if (shape === 'rectangle' && (!dimensions.length || !dimensions.width)) {
      if (!dimensions.length) errors.length = 'Preenchimento obrigatório';
      if (!dimensions.width) errors.width = 'Preenchimento obrigatório';
      valid = false;
    } else if (shape === 'triangle' && (!dimensions.length || !dimensions.height)) {
      if (!dimensions.length) errors.length = 'Preenchimento obrigatório';
      if (!dimensions.height) errors.height = 'Preenchimento obrigatório';
      valid = false;
    } else if (shape === 'square' && !dimensions.side) {
      errors.side = 'Preenchimento obrigatório';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const calculateArea = () => {
    if (validateInputs()) {
      let result = 0;
      if (shape === 'circle') {
        result = 3.14 * Math.pow(parseFloat(dimensions.radius), 2);
      } else if (shape === 'rectangle') {
        result = parseFloat(dimensions.length) * parseFloat(dimensions.width);
      } else if (shape === 'triangle') {
        result = 0.5 * parseFloat(dimensions.length) * parseFloat(dimensions.height);
      } else if (shape === 'square') {
        result = Math.pow(parseFloat(dimensions.side), 2);
      }
      setShape(shape);
      setArea(result);
      navigation.navigate('Result');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insira as dimensões para {shape === 'circle' ? 'círculo' : shape === 'rectangle' ? 'retângulo' : shape === 'triangle' ? 'triângulo' : 'quadrado'}:</Text>
      {shape === 'circle' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.radius && styles.errorInput]}
            placeholder="Raio"
            keyboardType="numeric"
            value={dimensions.radius}
            onChangeText={(text) => setDimensions({ ...dimensions, radius: text })}
          />
          {errors.radius && <Text style={styles.errorText}>{errors.radius}</Text>}
        </View>
      )}
      {shape === 'rectangle' && (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.length && styles.errorInput]}
              placeholder="Comprimento"
              keyboardType="numeric"
              value={dimensions.length}
              onChangeText={(text) => setDimensions({ ...dimensions, length: text })}
            />
            {errors.length && <Text style={styles.errorText}>{errors.length}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.width && styles.errorInput]}
              placeholder="Largura"
              keyboardType="numeric"
              value={dimensions.width}
              onChangeText={(text) => setDimensions({ ...dimensions, width: text })}
            />
            {errors.width && <Text style={styles.errorText}>{errors.width}</Text>}
          </View>
        </>
      )}
      {shape === 'triangle' && (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.length && styles.errorInput]}
              placeholder="Base"
              keyboardType="numeric"
              value={dimensions.length}
              onChangeText={(text) => setDimensions({ ...dimensions, length: text })}
            />
            {errors.length && <Text style={styles.errorText}>{errors.length}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, errors.height && styles.errorInput]}
              placeholder="Altura"
              keyboardType="numeric"
              value={dimensions.height}
              onChangeText={(text) => setDimensions({ ...dimensions, height: text })}
            />
            {errors.height && <Text style={styles.errorText}>{errors.height}</Text>}
          </View>
        </>
      )}
      {shape === 'square' && (
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, errors.side && styles.errorInput]}
            placeholder="Lado"
            keyboardType="numeric"
            value={dimensions.side}
            onChangeText={(text) => setDimensions({ ...dimensions, side: text })}
          />
          {errors.side && <Text style={styles.errorText}>{errors.side}</Text>}
        </View>
      )}
      <Button title="Calcular Área" onPress={calculateArea} />
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
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

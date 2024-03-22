import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [namesList, setNamesList] = useState([]);

  useEffect(() => {
    // This effect will trigger whenever namesList changes
    console.log('Names list updated:', namesList);
  }, [namesList]);

  const handleInputChange = (text, inputType) => {
    if (inputType === 'name') {
      setName(text);
    } else if (inputType === 'surname') {
      setSurname(text);
    }
  };

  const handleClear = () => {
    setName('');
    setSurname('');
  };

  const handleSubmit = () => {
    if (name && surname) {
      setNamesList([...namesList, { name, surname }]);
      setName('');
      setSurname('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Image container */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/farm.png')} 
          style={styles.image}
        />
      </View>

      {/* Text input containers */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={(text) => handleInputChange(text, 'name')}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          placeholderTextColor="#666"
          value={surname}
          onChangeText={(text) => handleInputChange(text, 'surname')}
        />
      </View>

      {/* Button container */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonSubmit} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonClear} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </TouchableOpacity>
      </View>

      {/* Display saved names */}
      <View style={styles.savedNamesContainer}>
        <Text style={styles.savedNamesTitle}>Saved Names:</Text>
        {namesList.map((item, index) => (
          <Text key={index} style={styles.savedName}>{item.name} {item.surname}</Text>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE54',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight + 20, 
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
  },
  inputContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
  buttonSubmit: {
    backgroundColor: '#006400', // Dark green color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonClear: {
    backgroundColor: '#006400', // Dark green color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  savedNamesContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  savedNamesTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  savedName: {
    fontSize: 14,
    marginBottom: 5,
  },
});

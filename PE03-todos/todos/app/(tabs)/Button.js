import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

const Button = ({ title, submitTodo }) => (
  <View style={styles.buttonContainer}>
    <TouchableOpacity onPress={submitTodo} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
    marginTop: 15
  },
  button: {
    height: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: '#000'
  }
})

export default Button

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>Siraphat Mingsorn </Text>
    <Text style={styles.text}>MS in Computer Science</Text>
    <Text style={styles.text}>City University of Seattle</Text>
  </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
    fontWeight: 'bold',
  },
});

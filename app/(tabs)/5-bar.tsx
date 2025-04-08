import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import * as Speech from 'expo-speech';

const FiveBarTab = () => {
  const [results, setResults] = useState<string[]>([]);
  const [counter, setCounter] = useState(0);
  const isRunningRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startGame = () => {
    isRunningRef.current = true;
    setResults([]);
    setCounter(0);
    playRound();
  };

  const playRound = async () => {
    if (!isRunningRef.current) return;

    // "Ready, set" phase
    Speech.speak('Ready, set', { language: 'en' });
    await delay(2000);

    // Random wait phase (3-10 seconds)
    const randomWait = Math.floor(Math.random() * 8 + 3) * 1000;
    await delay(randomWait);

    // Word selection phase
    const randomValue = Math.random();
    const selectedWord = 
      randomValue < 0.2 ? 'high-lane' : 
      randomValue < 0.5 ? 'wall' : 'lane';
    
    Speech.speak(selectedWord, { language: 'en', volume: 1.0 });
    
    // Update UI
    setResults(prev => [...prev, selectedWord]);
    setCounter(prev => prev + 1);

    // Schedule next round
    if (isRunningRef.current) {
      timeoutRef.current = setTimeout(playRound, 5000);
    }
  };

  const stopGame = () => {
    isRunningRef.current = false;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const delay = (ms: number) => 
    new Promise(resolve => setTimeout(resolve, ms));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-Bar</Text>
      <Text style={styles.counter}>Completed loops: {counter}</Text>
      
      {!isRunningRef.current ? (
        <Button title="Start" onPress={startGame} />
      ) : (
        <Button title="Stop" onPress={stopGame} />
      )}

      <ScrollView style={styles.results}>
        {results.map((result, index) => (
          <Text key={index} style={styles.result}>
            {index + 1}. {result}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  counter: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: 'center',
    color: '#333',
  },
  results: {
    marginTop: 20,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  result: {
    fontSize: 16,
    paddingVertical: 5,
    color: '#444',
  },
});

export default FiveBarTab;
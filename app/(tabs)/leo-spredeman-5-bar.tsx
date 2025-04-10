import React, { useState, useRef } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const LeoSpredemanFiveBar = () => {
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
    const words = ['wall', 'lane', 'bounce-wall', 'bounce-lane'];
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    
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
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/soccer-field.png')}
          style={StyleSheet.absoluteFillObject}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Leo Spredeman 5-Bar</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Completed loops: {counter}</ThemedText>
        {!isRunningRef.current ? (
          <ThemedText onPress={startGame} style={styles.button}>Start</ThemedText>
        ) : (
          <ThemedText onPress={stopGame} style={styles.button}>Stop</ThemedText>
        )}
      </ThemedView>

      <ThemedView style={styles.resultsContainer}>
        {results.map((result, index) => (
          <ThemedText key={index} style={styles.result}>
            {index + 1}. {result}
          </ThemedText>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  resultsContainer: {
    gap: 8,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  result: {
    fontSize: 16,
    paddingVertical: 5,
  },
  button: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default LeoSpredemanFiveBar;
import { Image, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
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
        <ThemedText type="title">Foosball Trainer App</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">5-Bar</ThemedText>
        <ThemedText>
          5-Bar randomly waits between 3 and 10 seconds, then randonly chooses either wall, lane or high-lane (2nd man). 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Leo Spredeman 5-Bar</ThemedText>
        <ThemedText>
          Leo Spredeman 5-Bar randomly waits between 3 and 10 seconds, then randonly chooses either wall, lane, bounce-lane or bounce-wall. Inspired by Spredeman Leo WCS
        </ThemedText>
      </ThemedView>      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Snake</ThemedText>
        <ThemedText>
          Snake  randomly waits between 3 and 13 seconds, then randomly chooses either left, right or center.
        </ThemedText>
      </ThemedView>
            <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">SnakeLR</ThemedText>
        <ThemedText>
          SnakeLR  randomly waits between 3 and 13 seconds, then randomly chooses either left or right.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pull</ThemedText>
        <ThemedText>
          Pull  randomly waits between 3 and 13 seconds, then randomly chooses either short, middle or long.
        </ThemedText>
      </ThemedView>      
    </ParallaxScrollView>
  );
}

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
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

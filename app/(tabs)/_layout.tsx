import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="house-siding" color={color} />,
        }}
      />
      <Tabs.Screen
        name="pull"
        options={{
          title: 'Pull',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="subdirectory-arrow-right" color={color} />,
        }}
      />      
      <Tabs.Screen
        name="5-bar"
        options={{
          title: '5-bar',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="call-split" color={color} />,
        }}
      />
      <Tabs.Screen
        name="snake"
        options={{
          title: 'Snake',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="sync" color={color} />,
        }}
      />      
      <Tabs.Screen
        name="snake-LR"
        options={{
          title: 'Snake-LR',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="replay" color={color} />,
        }}
      />  
      <Tabs.Screen
        name="leo-spredeman-5-bar"
        options={{
          title: 'Leo Spredeman 5 Bar',
          tabBarIcon: ({ color }) => <MaterialIcons size={24} name="call-missed" color={color} />,
        }}
      />          
      
    </Tabs>
  );
}

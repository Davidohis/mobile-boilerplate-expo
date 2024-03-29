import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import ReactQueryProvider from '@/lib/ReactQueryProvider';

export default function App() {
  return (
    <ReactQueryProvider>
      <View className="flex-1 items-center justify-center bg-primary">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </ReactQueryProvider>
  );
}

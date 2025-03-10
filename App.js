import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import WeatherApp from './Weather';

export default function App() {
  return (
    <SafeAreaProvider>
      <WeatherApp />
    </SafeAreaProvider>
  );
}
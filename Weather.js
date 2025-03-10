import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from './tailwind'; // path to your tailwind.js file

const WeatherApp = () => {
  return (
    <View style={tw`flex-1 p-5 bg-gray-100`}>
      <Text style={tw`text-2xl font-bold text-center mb-5`}>
        Weather App
      </Text>

      <View style={tw`flex-row mb-5`}>
        <View style={tw`flex-1 h-12 border border-gray-300 rounded-lg bg-white mr-2`} />
        <TouchableOpacity style={tw`w-24 h-12 bg-blue-500 rounded-lg justify-center items-center`}>
          <Text style={tw`text-white font-bold`}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WeatherApp;
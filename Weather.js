import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from './tailwind';

const API_KEY = '4de4aa778282d41fdf1aefa709f1a701';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (city.trim() === '') {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const data = await response.json();
      console.log('data',data);

      if (data.cod!== 200) {
        throw new Error(data.message);
      }

      setWeather(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };


  const getWeatherIcon = (iconCode) => {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  };


  const formatDate = () => {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <SafeAreaView style={tw`flex-1  bg-blue-50`}>
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />
      <ScrollView contentContainerStyle={tw`px-5 py-4`}>
      <Text style={tw`text-3xl font-bold  mt-4 text-center text-gray-800 mb-10 border-solid border-2 px-4 bg-gray-100 hover:bg-gray-200 py-1 border-gray-300 rounded-lg self-center`}>
   Weather App
</Text>


        <View style={tw`flex-row gap-2 mb-5   `}>
          <TextInput
            style={tw`flex-1 h-12 px-4 border  border-gray-300 rounded-lg bg-white`}
            placeholder="Enter city name"
            value={city}
            onChangeText={setCity}
          />
          <TouchableOpacity
            style={tw`w-24 h-12 bg-blue-500 rounded-lg justify-center items-center`}
            onPress={fetchWeather}
          >
            <Text style={tw`text-white font-bold`}>Search</Text>
          </TouchableOpacity>
        </View>

        {error && (
          <Text style={tw`text-red-500 text-center mb-4`}>{error}</Text>
        )}

        {loading ? (
          <ActivityIndicator size="large" color="#3b82f6" style={tw`my-8`} />
        ) : weather ? (
          <View style={tw`bg-white rounded-xl shadow-sm p-6 mt-4`}>
            <Text style={tw`text-2xl font-bold text-center text-gray-800`}>
              {weather.name}, {weather.sys.country}
            </Text>
            <Text style={tw`text-gray-500 text-center mb-4`}>
              {formatDate()}
            </Text>

            <View style={tw`flex-row items-center justify-center`}>
              <Image
                source={{ uri: getWeatherIcon(weather.weather[0].icon) }}
                style={tw`w-24 h-24`}
              />
              <Text style={tw`text-5xl font-bold text-gray-800`}>
                {Math.round(weather.main.temp)}°C
              </Text>
            </View>

            <Text style={tw`text-lg text-center capitalize text-gray-600 mb-6`}>
              {weather.weather[0].description}
            </Text>

            <View style={tw`flex-row justify-between mb-6`}>
              <View style={tw`items-center`}>
                <Text style={tw`text-gray-500 mb-1`}>Feels Like</Text>
                <Text style={tw`text-lg font-semibold text-gray-800`}>
                  {Math.round(weather.main.feels_like)}°C
                </Text>
              </View>

              <View style={tw`items-center`}>
                <Text style={tw`text-gray-500 mb-1`}>Humidity</Text>
                <Text style={tw`text-lg font-semibold text-gray-800`}>
                  {weather.main.humidity}%
                </Text>
              </View>

              <View style={tw`items-center`}>
                <Text style={tw`text-gray-500 mb-1`}>Wind</Text>
                <Text style={tw`text-lg font-semibold text-gray-800`}>
                  {weather.wind.speed} m/s
                </Text>
              </View>
            </View>

            <View style={tw`pt-4 border-t border-gray-200`}>
              <Text style={tw`text-center text-gray-600`}>
                Min: {Math.round(weather.main.temp_min)}°C / Max: {Math.round(weather.main.temp_max)}°C
              </Text>
            </View>
          </View>
        ) : (
          <Text style={tw`text-gray-500 text-center my-8`}>
            Enter a city name to get weather information
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WeatherApp;
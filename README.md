Weather App 🌦️ (React Native)
A simple React Native Weather App that fetches real-time weather data from the OpenWeatherMap API and displays essential weather details like feels-like temperature, humidity, wind speed, and min/max temperature.
🚀 Features

✔️ Fetches real-time weather data from OpenWeatherMap API
✔️ Displays feels-like temperature, humidity, wind speed, and min/max temperature
✔️ Dynamic UI with Tailwind CSS (twrnc)
✔️ Search for any city and get instant weather updates

🛠️ Technologies Used

React Native (Frontend framework)

Tailwind CSS (twrnc) (For styling)

OpenWeatherMap API (For weather data)


📦 Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/amitmamgai2k/Weather-App.git
cd Weather-App

2️⃣ Install dependencies

npm install

3️⃣ Set up OpenWeatherMap API

Create a free account at OpenWeatherMap

Get your API Key

Replace API_KEY in WeatherApp.js with your key:

const API_KEY = 'your_api_key_here';

4️⃣ Run the app

For Android:

npx react-native run-android

For iOS:

npx react-native run-ios

📝 How Tailwind CSS is Integrated?

1️⃣ Install Tailwind for React Native:

npm install twrnc

2️⃣ Create a tailwind.config.js file:
3️⃣ Set up tailwind.js:

import { create } from 'twrnc';  
const tw = create(require('./tailwind.config.js'));  
export default tw;

4️⃣ Use it inside components:

import tw from './tailwind';  
<View style={tw`flex-1 p-5 bg-blue-500`}></View>


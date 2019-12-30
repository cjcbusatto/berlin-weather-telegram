import Telegraf from 'telegraf';
import './env';
import fetch from 'node-fetch';
import OpenWeatherAPI from './interfaces/OpenWeatherAPI';
const { OPEN_WEATHER_API_TOKEN, LOCATION, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;

const URL_WEATHER_API = 'https://api.openweathermap.org/data/2.5/weather';
const weatherUrl = new URL(URL_WEATHER_API);
weatherUrl.searchParams.set('zip', LOCATION);
weatherUrl.searchParams.set('APPID', OPEN_WEATHER_API_TOKEN);
weatherUrl.searchParams.set('units', 'metric');

const bot = new Telegraf(TELEGRAM_TOKEN);

const getWeatherData = async () => {
    const response = await fetch(weatherUrl.toString());
    return await response.json();
};

const createWeatherMessage = (weatherData: OpenWeatherAPI) => {
    return `The weather in ${weatherData.name}: ${weatherData.weather[0].description}. Current temperature is ${weatherData.main.temp}, with a low temperature of ${weatherData.main.temp_min} and a high temperature of ${weatherData.main.temp_max}.`;
};

const main = async () => {
    const weatherData = await getWeatherData();
    await bot.telegram.sendMessage(TELEGRAM_CHAT_ID, createWeatherMessage(weatherData));
};

main();

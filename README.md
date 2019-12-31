# Berlin Weather on Telegram

## Introduction

This bot sends a message everyday to me through Telegram informing the temperature of Berlin. The message is triggered by Github Actions everyday around 7am (CEST).

## Usage

If you want to use it on a different location, simply follow the steps:

1. Fork the repository
2. Create a token on [Open Weather API](https://openweathermap.org/api)
3. Create a [Telegram Token](https://core.telegram.org/bots)
4. Discover your Chat ID on Telegram, in order to let the bot send you private messages
5. Discover your ZIP Code and Country Code
6. Create the following Secrets on your repository

| Variable name          | Type   | Comment                                                                                                 |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| OPEN_WEATHER_API_TOKEN | string | Register on [OpenWeatherAPI](https://openweathermap.org/) to receive your token                         |
| TELEGRAM_TOKEN         | string | Documentation available [here](https://core.telegram.org/bots)                                          |
| TELEGRAM_CHAT_ID       | number | Your own chat ID, in order let your bot send you a PM. Talk to `@get_id_bot` on Telegram to discover it |
| LOCATION               | string | A string in the format `ZIPCODE,COUNTRYCODE` e.g. 10247,de                                              |

7. Edit the `action.yml` to the desired time to receive the message. Github Actions works using UTC, therefore, you need to adapt the value to your timezone.
8. Enjoy!

## Acknowledgement

This project is based on the Github Actions [video from BYTESIZED channel](https://www.youtube.com/watch?v=J4EhgEskSZA).  
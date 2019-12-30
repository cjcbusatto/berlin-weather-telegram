import Coordinate from './Coordinate';
import Weather from './Weather';
import Wind from './Wind';
import Clouds from './Clouds';
import Main from './Main';
import System from './System';

interface OpenWeatherAPI {
    coord: Coordinate;
    weather: Array<Weather>;
    base: string;
    main: Main;
    wind: Wind;
    clouds: Clouds;
    visibility: number;
    dt: number;
    sys: System;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export default OpenWeatherAPI;

import './styles/main.scss';

import { getWeather } from './networking/weather';
import { buttonClick, getCity, updateInteface } from './dom-manipulation/domManipulation';

export const displayWeather = async () => {
    const city = getCity();
    if(city) {
        const weather = await getWeather(city);
        updateInteface(weather);
    }
}

if(buttonClick) buttonClick.onclick = displayWeather;

// Add logic to get your city as default for initial testing.
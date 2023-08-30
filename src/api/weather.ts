import { CurrentWeather } from "../models/current-weather";
import { ForecastData } from "../models/forecast";

// --- MockedData -------------------------------------------------------------
const mockedCurrentWeather: CurrentWeather[] = [
	{
		timestamp: new Date(),
		feelsLike: 18.2,
		humidity: 0.87,
		temperature: 18.0,
		maxTemperature: 22,
		minTemperature: 16,
		sky: "clear"
	}
];

const mockedForecastWeather: ForecastData[] = [
	{
		forecast: [
			{
				timestamp: new Date((new Date()).setDate((new Date()).getDate()+1)),
				maxTemperature: 21,
				minTemperature: 18,
				sky: "clear"
			},
			{
				timestamp: new Date((new Date()).setDate((new Date()).getDate()+2)),
				maxTemperature: 22,
				minTemperature: 16,
				sky: "clear"
			},
			{
				timestamp: new Date((new Date()).setDate((new Date()).getDate()+3)),
				maxTemperature: 17,
				minTemperature: 10,
				sky: "clear"
			},
		]
	}
];

// --- MockedAPICalls ---------------------------------------------------------
export const getLocationCurrentWeather = async (
	_path: string,
	_locationId: string
): Promise<CurrentWeather> => {

	return mockedCurrentWeather[0];
}

export const getLocationForecastWeather = async (
	_path: string,
	_locationId: string
): Promise<ForecastData> => {

	return mockedForecastWeather[0];
}

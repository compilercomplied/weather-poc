import { Sky } from "./sky"

export interface CurrentWeather {
	timestamp: Date
	feelsLike: number
	humidity: number
	temperature: number
	maxTemperature: number
	minTemperature: number
	sky: Sky
}

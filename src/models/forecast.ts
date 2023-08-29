import { Sky } from "./sky"

export interface ForecastData {
	forecast: Forecast[]
}

export interface Forecast {
	sky: Sky
	timestamp: Date
	maxTemperature: number
	minTemperature: number
}

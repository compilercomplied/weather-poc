
export interface HourlyForecast {
  measures: Measure[]
}

export interface Measure {
  timestamp: string
  precipitation: number
  precipitationProbability: number
  temperature: number
  pressure: number
}

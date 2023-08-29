import useSWR from "swr";
import { useContext } from "react";
import styles from "./weather-forecast.module.css";
import { LocationContext } from "../../../contexts/location";
import { getLocationForecastWeather } from "../../../api/weather";
import { Forecast, ForecastData } from "../../../models/forecast";
import WeatherIcon from "../icon/weather-icon";


export default function WeatherForecast() {

	const { location } = useContext(LocationContext);
	type NewType = ForecastData;

	const { data } = useSWR<NewType>(
		location?.id ? `/location/${location.id}/weather/forecast/daily` : false,
		(path) => getLocationForecastWeather(path, location!.id)
	);

	if (!data) { return (<div> loading placeholder</div>); }
	else {

		return (
			<div className={`${styles.forecast} flexDisplayGap`}>
				{
					data.forecast.map((day: Forecast, idx: number) => {
						return (
							<div key={idx} className={`${styles.day}`}>
								<div className={`${styles.icon}`}>
									<WeatherIcon{...{ sky: day.sky }} />
								</div>
								<div>
									<div className={`titleText`}>
										{`${day.minTemperature}/${day.maxTemperature} ºC`}
									</div>
									<div className={`bodyText`}>
										{`${day.timestamp.getDate()}`} {day.timestamp.toLocaleDateString('en-US', { weekday: 'short' })}
									</div>
								</div>
							</div>
						);
					})
				}
			</div>
		);
	}
}

import { useContext } from "react";
import useSWR from "swr";
import styles from "./weather-current.module.css";
import { LocationContext } from "../../../contexts/location";
import { getLocationCurrentWeather } from "../../../api/weather";
import WeatherIcon from "../icon/weather-icon";
import { CurrentWeather } from "../../../models/current-weather";


export default function WeatherCurrent() {

	const { location } = useContext(LocationContext);

	const { data } = useSWR<CurrentWeather>(
		location?.id ? `/location/${location.id}/weather/current` : false,
		(path) => getLocationCurrentWeather(path, location!.id)
	);

	return (!data)
		? (<div>loading placeholder</div>)
		: (
			<div className={styles.main}>
				<div className={`displayText`}>
					{`${data.temperature} °C`}
				</div>
				<div className={`${styles.iconContainer}`}>
					<WeatherIcon {... { sky: data.sky }} />
				</div>
			</div>
		);
}

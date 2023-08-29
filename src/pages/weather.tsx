import { useContext, useEffect } from "react";
import { LocationContext } from "../contexts/location";
import useSWR from "swr";
import { DomainLocation } from "../models/location";
import { getLocation } from "../api/location";
import { useSearchParams } from "react-router-dom";
import styles from "./weather.module.css";
import TopBar from "../components/top-bar/top-bar";
import WeatherCurrent from "../components/weather/current/weather-current";
import WeatherForecast from "../components/weather/forecast/weather-forecast";

export default function Weather() {

	const { setLocation, location } = useContext(LocationContext);
	const [searchParams] = useSearchParams();

	const shouldRefetch = ((!location) && searchParams.get("locationId"));
	const { data: domainLocation } = useSWR<DomainLocation>(
		shouldRefetch ? `/location/${searchParams.get("locationId")}` : false,
		getLocation
	);

	useEffect(() => {
		if (domainLocation) { setLocation(domainLocation); }
	}, [domainLocation]);

	if (!location) {
		// TODO use a combination of dependencies within an useEffect to manage 
		// this scenario. Important to use error from useSWR, which would also keep
		// data as undefined.
		return (<div>edge case loading</div>);
	}
	else {
		return (
			<div className={`${styles.main} flexGap`}>
				<TopBar />
				<WeatherCurrent />
				<WeatherForecast />
			</div>
		);
	}
}

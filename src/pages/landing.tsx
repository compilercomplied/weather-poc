import { SyntheticEvent, useContext, useEffect, useState } from "react";
import { DomainGeolocation, DomainLocation } from "../models/location";
import useSWR from "swr";
import { getLocationByCoords } from "../api/location";
import { LocationContext } from "../contexts/location";
import { useNavigate } from "react-router-dom";
import { GeolocationPin, GeolocationPinProps } from "../components/geolocation-pin/geolocation-pin";
import styles from "./landing.module.css";


export default function Landing() {

	const navigate = useNavigate();

	const [geolocation, setGeolocation] =
		useState<DomainGeolocation | undefined>(undefined);

	const { location, setLocation } = useContext(LocationContext);

	const { data: locationFromServer } = useSWR<DomainLocation>(
		geolocation ? "/location" : false,
		(path) => getLocationByCoords(
			path, geolocation!.latitude, geolocation!.longitude
		)
	);


	const onGeolocationClick = (_: SyntheticEvent) => {
		// Initially, this was pulling data from browser's geolocation API, but
		// since we're simply mocking and randomizing backend responses, it 
		// doesn't make sense to keep doing it.
		setGeolocation(new DomainGeolocation(0, 0));
	};

	useEffect(() => {
		if (locationFromServer) {
			setLocation(locationFromServer);
		}
	}, [locationFromServer]);

	useEffect(() => {
		if (location) {
			navigate(`/weather?locationId=${location.id}`)
		}
	}, [location]);


	const geoPinProps: GeolocationPinProps = {
		onClick: onGeolocationClick
	};

	return (
		<div className={styles.main}>
			<GeolocationPin {...geoPinProps} />
		</div>
	);
}


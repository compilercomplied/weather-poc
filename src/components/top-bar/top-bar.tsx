"use client";
import styles from "./top-bar.module.css";
import { SyntheticEvent, useContext } from "react";
import { LocationContext } from "../../contexts/location";
import { GeolocationPin } from "../geolocation-pin/geolocation-pin";
import { useNavigate } from "react-router-dom";

export default function TopBar(
) {
	const navigate = useNavigate();
	const { location } = useContext(LocationContext);

	const onPinClick = (_: SyntheticEvent) => {
		navigate("/");
	};

	return (

		<div className={`${styles.main} flexGap topbar titleText`}>
			<div className={`${styles.pin}`}>
				<GeolocationPin {...{ onClick: onPinClick }} />
			</div>
			<div> {location?.name} ({location?.region})</div>
		</div>
	);
}

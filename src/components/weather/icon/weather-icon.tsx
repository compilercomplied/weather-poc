import { Sky } from "../../../models/sky";
import Placeholder from "./icons/placeholder";

export interface WeatherIconProps {
	sky: Sky
}
export default function WeatherIcon(
	{ sky }: WeatherIconProps
) {

	let icon = <Placeholder />;

	switch (sky) {
		case "clear":
			icon = <Placeholder />;
			break;
		default:
			icon = <Placeholder />;
	}

	return (icon);
}

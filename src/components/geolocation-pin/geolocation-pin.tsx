
import { SyntheticEvent } from "react";
import styles from "./geolocation-pin.module.css";

export interface GeolocationPinProps {
	onClick: (e: SyntheticEvent) => void
}

export function GeolocationPin(props: GeolocationPinProps) {


	return (
			<svg onClick={props.onClick} width="40" height="67" viewBox="0 0 40 67" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className={styles.pin} d="M20 67L0.947441 26.5H39.0526L20 67Z"/>
				<circle className={styles.pin} cx="20" cy="20" r="20"/>
				<g filter="url(#filter0_i_31_54)">
					<circle className={styles.innerCircle} cx="20.5" cy="20.5" r="7.5"/>
				</g>
				<defs >
					<filter id="filter0_i_31_54" x="13" y="13" width="15" height="19" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
						<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
						<feBlend mode="normal" in2="shape" result="effect1_innerShadow_31_54" />
					</filter>
				</defs>
			</svg>
	)
}

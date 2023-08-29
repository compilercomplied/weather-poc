import { Dispatch, SetStateAction, createContext } from "react";
import { DomainLocation } from "../models/location";


export type LocationContextState = {
	location: DomainLocation | undefined,
	setLocation: Dispatch<SetStateAction<DomainLocation | undefined>>
}

export const LocationContext = createContext<LocationContextState>({
	location: undefined,
	setLocation: () => { }
});

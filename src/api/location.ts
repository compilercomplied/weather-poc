import { DomainLocation } from "../models/location";


// --- MockedData --------------------------------------------------------------
const mockedLocations: DomainLocation[] = [
	{ 
		id: "d845eb10-7198-488f-97a2-dc585ad87458", 
		name: "Oviedo", 
		region: "Spain" ,
		geolocation: 
		{
			latitude: 43.362390,
			longitude: -5.843960
		}
	}
];

// --- MockedAPICalls ----------------------------------------------------------
export const getLocationByCoords = async (
	_path: string, 
	_lat: number, 
	_long: number
): Promise<DomainLocation> => {

	const idx: number = Math.floor(Math.random() * (mockedLocations.length - 1));
	return mockedLocations[idx];

};

export const getLocation = 
	async (path: string): Promise<DomainLocation> => {

	const uuid = path.split("/").pop();

	// TODO handle undefined fetch case. Also remove null forgiving.
	return mockedLocations.find(location => location.id == uuid)!;
};


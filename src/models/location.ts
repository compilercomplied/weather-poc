
export interface DomainLocation {
	id: string
	name: string
	region: string
	geolocation: DomainGeolocation
}

export class DomainGeolocation {
	constructor(public latitude: number, public longitude: number) { }
}

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing';
import Weather from './pages/weather';
import { useState } from 'react';
import { DomainLocation } from './models/location';
import { LocationContext } from './contexts/location';


export default function App() {
	const [location, setLocation] =
		useState<DomainLocation | undefined>(undefined);


	const router = createBrowserRouter([
		{
			path: "/",
			element: <Landing />
		},
		{
			path: "/weather",
			element: <Weather />
		},
	]);

	return (
		<LocationContext.Provider value={{ location, setLocation }}>
			<RouterProvider router={router} />
		</LocationContext.Provider>
	)
}

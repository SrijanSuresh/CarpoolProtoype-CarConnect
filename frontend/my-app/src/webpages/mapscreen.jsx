// MapScreen.jsx
import React, { useState } from 'react';
import Map from './map';
import SearchBox from './searchbox';

const MapScreen = () => {
    const [position, setPosition] = useState({ lat: 51.505, lng: -0.09 });
    const [zoom, setZoom] = useState(13);

    const handlePlaceSelect = (place) => {
        const location = place.geometry.location;
        setPosition({ lat: location.lat(), lng: location.lng() });
        setZoom(15);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="h-1/2 flex flex-col items-center justify-center bg-gray-200">
                <h1 className="text-3xl font-bold mb-4">My Map Screen</h1>
                <SearchBox onPlaceSelect={handlePlaceSelect} />
            </div>
            <div className="h-1/2">
                <Map position={position} zoom={zoom} />
            </div>
        </div>
    );
}

export default MapScreen;

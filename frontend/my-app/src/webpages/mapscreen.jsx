// MapScreen.jsx
import React from 'react';
import Map from './map';

const MapScreen = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="h-1/2 flex items-center justify-center bg-gray-200">
                <h1 className="text-3xl font-bold">My Map Screen</h1>
            </div>
            <div className="h-1/2">
                <Map />
            </div>
        </div>
    );
}

export default MapScreen;

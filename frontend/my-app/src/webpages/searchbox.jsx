// SearchBox.jsx
import React, { useState } from 'react';
import { LoadScript, StandaloneSearchBox } from '@react-google-maps/api';

const libraries = ['places'];

const SearchBox = ({ onPlaceSelect }) => {
    const [searchBox, setSearchBox] = useState(null);

    const onLoad = (ref) => {
        setSearchBox(ref);
    };

    const onPlacesChanged = () => {
        const places = searchBox.getPlaces();
        if (places.length > 0) {
            onPlaceSelect(places[0]);
        }
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBuStdDeWkNTyDN8ddLyj4vHd3gqBvlrJI" libraries={libraries}>
            <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
                <input
                    type="text"
                    placeholder="Search for a place"
                    className="w-full p-2 border border-gray-300 rounded"
                />
            </StandaloneSearchBox>
        </LoadScript>
    );
};

export default SearchBox;

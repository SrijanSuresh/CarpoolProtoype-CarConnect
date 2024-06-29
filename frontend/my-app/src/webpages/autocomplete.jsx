// AutocompleteInput.jsx
import React, { useEffect, useRef } from 'react';

const AutocompleteInput = ({ onPlaceSelected }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      onPlaceSelected(place);
    });
  }, [onPlaceSelected]);

  return <input ref={inputRef} type="text" placeholder="Enter a location" />;
};

export default AutocompleteInput;

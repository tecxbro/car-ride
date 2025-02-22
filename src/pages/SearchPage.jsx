
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUser, faLocationDot, faPlane, faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function SearchPage() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropoffSuggestions, setDropoffSuggestions] = useState([]);
  const navigate = useNavigate();
  const mapRef = useRef(null);
  const pickupMarkerRef = useRef(null);
  const dropoffMarkerRef = useRef(null);

  useEffect(() => {
    // Initialize Leaflet map
    mapRef.current = L.map('map').setView([30.2672, -97.7431], 12); // Austin, TX coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, []);

  useEffect(() => {
    // Function to fetch location suggestions from Google Maps API
    const fetchLocationSuggestions = async (input, setSuggestions) => {
      if (!input) {
        setSuggestions([]);
        return;
      }

      const autocompleteService = new window.google.maps.places.AutocompleteService();

      autocompleteService.getPlacePredictions({
        input: input,
        componentRestrictions: { country: 'US' },
        types: ['geocode']
      }, (predictions, status) => {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
          console.warn("Google Maps API returned status: ", status);
          setSuggestions([]);
          return;
        }

        const formattedSuggestions = predictions.map(prediction => ({
          id: prediction.place_id,
          name: prediction.description,
          address: prediction.structured_formatting.secondary_text,
        }));
        setSuggestions(formattedSuggestions);
      });
    };

    // Fetch pickup suggestions
    fetchLocationSuggestions(pickupLocation, setPickupSuggestions);
  }, [pickupLocation]);

  useEffect(() => {
    // Function to fetch location suggestions from Google Maps API
    const fetchLocationSuggestions = async (input, setSuggestions) => {
      if (!input) {
        setSuggestions([]);
        return;
      }

      const autocompleteService = new window.google.maps.places.AutocompleteService();

      autocompleteService.getPlacePredictions({
        input: input,
        componentRestrictions: { country: 'US' },
        types: ['geocode']
      }, (predictions, status) => {
        if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
          console.warn("Google Maps API returned status: ", status);
          setSuggestions([]);
          return;
        }

        const formattedSuggestions = predictions.map(prediction => ({
          id: prediction.place_id,
          name: prediction.description,
          address: prediction.structured_formatting.secondary_text,
        }));
        setSuggestions(formattedSuggestions);
      });
    };

    // Fetch dropoff suggestions
    fetchLocationSuggestions(dropoffLocation, setDropoffSuggestions);
  }, [dropoffLocation]);

  const updateMapLocation = (lat, lng, markerRef) => {
    if (mapRef.current) {
      const newLatLng = new L.LatLng(lat, lng);
      mapRef.current.setView(newLatLng, 13);

      if (markerRef.current) {
        markerRef.current.setLatLng(newLatLng);
      } else {
        markerRef.current = L.marker(newLatLng).addTo(mapRef.current);
      }
    }
  };

  const handleLocationSelect = async (suggestion, isPickup) => {
    if (isPickup) {
      setPickupLocation(suggestion.name);
      // Fetch place details to get coordinates
      const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
      placesService.getDetails({
        placeId: suggestion.id,
        fields: ['geometry']
      }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          updateMapLocation(lat, lng, pickupMarkerRef);
        } else {
          console.error("PlacesService returned status:", status);
        }
      });
    } else {
      setDropoffLocation(suggestion.name);
      // Fetch place details to get coordinates
      const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
      placesService.getDetails({
        placeId: suggestion.id,
        fields: ['geometry']
      }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          updateMapLocation(lat, lng, dropoffMarkerRef);
        } else {
          console.error("PlacesService returned status:", status);
        }
      });
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-4 px-4 shadow-md">
        <div className="flex items-center">
          <button onClick={() => navigate(-1)} className="mr-4">
            <FontAwesomeIcon icon={faArrowLeft} size="lg" />
          </button>
          <h1 className="text-xl font-semibold">Plan your ride</h1>
        </div>
      </div>

      {/* Options */}
      <div className="bg-white py-2 px-4 flex items-center justify-end">
        <button className="bg-gray-100 rounded-full px-4 py-2 text-sm flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          For me
        </button>
      </div>

      {/* Location Inputs */}
      <div className="bg-white px-4 py-4">
        <div className="relative">
          <div className="absolute left-2 top-2">
            <div className="flex flex-col items-center">
              <FontAwesomeIcon icon={faLocationDot} size="sm" />
              <div className="h-4 w-0.5 bg-gray-400"></div>
              <FontAwesomeIcon icon={faPlane} size="sm" />
            </div>
          </div>
          <div className="ml-8">
            <input
              type="text"
              placeholder="St"
              className="w-full border rounded-lg py-2 px-3 mb-2"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            />
            <input
              type="text"
              placeholder="Where to?"
              className="w-full border rounded-lg py-2 px-3"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
            />
          </div>
          <button className="absolute right-2 top-2 bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center mr-2">
            +
          </button>
        </div>
      </div>

      {/* Date Selection */}
      <div className="bg-white px-4 py-2">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendar} className="mr-2 text-gray-500" />
          <input
            type="date"
            className="border rounded-lg py-2 px-3"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={(e) => handleDateChange(new Date(e.target.value))}
          />
        </div>
      </div>

      {/* Map */}
      <div id="map" className="h-64"></div>

      {/* Suggestions */}
      <div className="bg-white px-4 py-2 flex-grow overflow-y-auto">
        {pickupSuggestions.length > 0 && (
          <div>
            <h3 className="font-semibold">Pickup Suggestions</h3>
            {pickupSuggestions.map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center py-3 border-b border-gray-200"
                onClick={(
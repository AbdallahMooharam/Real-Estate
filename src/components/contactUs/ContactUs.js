import React, { useState, useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { getDistance } from 'geolib';
import property1 from '../../assets/web-in15-6-1.jpg'; // تأكد من أن المسار صحيح

// Center location for the company (Cairo, Egypt)
const companyPosition = [30.0444, 31.2357]; // Cairo's coordinates

const ContactUs = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    // Get the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserPosition([latitude, longitude]);

        // Calculate the distance between the user and the company
        if (userPosition) {
          const distanceInKm = getDistance(
            { latitude, longitude },
            { latitude: companyPosition[0], longitude: companyPosition[1] }
          ) / 1000; // Convert meters to kilometers
          setDistance(distanceInKm.toFixed(2));
        }
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );
  }, [userPosition]);

  const LocationMarker = () => {
    const map = useMapEvents({
      click() {
        if (userPosition) {
          map.setView(userPosition);
        }
      },
    });

    return null;
  };

  return (
    <div className="relative overflow-hidden bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={property1}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section 1: Contact Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 relative bg-opacity-80">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-600 mr-3 text-2xl" />
                <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
              </div>
              <div className="flex items-center mb-4">
                <FaFacebook className="text-gray-600 mr-3 text-2xl" />
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Facebook Page</a>
              </div>
              <div className="flex items-center mb-4">
                <FaWhatsapp className="text-gray-600 mr-3 text-2xl" />
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">WhatsApp</a>
              </div>
              <div className="text-gray-800 text-xl mb-4">
                Call Center: <span className="font-semibold">1234</span>
              </div>
              {distance && (
                <div className="text-gray-800 text-xl">
                  Distance to our office: <span className="font-semibold">{distance} km</span>
                </div>
              )}
            </div>
            {/* Map */}
            <div className="h-64 md:h-80">
              <MapContainer center={companyPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={companyPosition}>
                  <Popup>
                    Our Company Location<br /> Cairo, Egypt
                  </Popup>
                </Marker>
                {userPosition && (
                  <Marker position={userPosition}>
                    <Popup>
                      Your Location
                    </Popup>
                  </Marker>
                )}
                <LocationMarker />
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

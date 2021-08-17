import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import dataTypes from "../types/types";
import api from "../services/services";

const center: LatLngTuple = [48.865572, 2.283523];
const zoom:number = 4;

const LeafletMap:React.FC = () => {
    const [cities, setCities] = useState<Array<dataTypes>>([]);
 
    const retrieveCities = () => {
        api.getAll()
        .then((response) => {
            setCities(response.data);
            console.log(response.data)
        })
        .catch((e) => {
            console.log(e);
        });
    };
    
    useEffect(() => {
        retrieveCities();
    }, []);
    
   return (
   <MapContainer 
     id="mapId"
     center={center}
     zoom={zoom}>
         <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    {cities.map(city => (
    <Marker 
      key={city.id} 
      position={[city.lat, city.long]}
     >
         <Popup>
             <h4>{city.title}</h4>
             <p>Latitude: {city.lat}</p>
             <p>Longitude: {city.long}</p>
         </Popup>
    </Marker>
     
    ))}
    </MapContainer>
);
}
export default LeafletMap
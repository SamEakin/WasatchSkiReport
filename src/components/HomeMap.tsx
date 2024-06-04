import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { coordinates } from "../routes/App";

export default function HomeMap() {
    const [position, setPosition] = useState<any>([0, 0]);
    const coordsArray = Object.values(coordinates);
    const resorts = Object.entries(coordinates);

    useEffect(() => {
        setPosition(findCenter())
    }, []);


    function findCenter() {
        const xCoords = coordsArray.map(coords => coords[0]);
        const yCoords = coordsArray.map(coords => coords[1]);
        const xMax = Math.max(...xCoords);
        const xMin = Math.min(...xCoords);
        const yMax = Math.max(...yCoords);
        const yMin = Math.min(...yCoords);

        // Need to decide whether to use Average or Median...
        // const mean = [xCoords.reduce((a, b) => a + b, 0) / xCoords.length, yCoords.reduce((a, b) => a + b, 0) / yCoords.length];
        const median = [ xMin + ((xMax - xMin)/2), yMin + ((yMax - yMin)/2) ]
        return median;
    }

    function ResortMap() {
        const map = useMap()
        map.setView(position, map.getZoom())
        return null
    }

    return (
        <MapContainer center={position} zoom={12} style={{ height: 536, zIndex: 1 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {

                resorts.map( (resort, index) => {
                    let name = resort[0];
                    let coords = resort[1];
                    return (
                        <Marker key={index} position={coords as any}>
                            <Popup>
                               {name} <br /> {coords}
                            </Popup>
                        </Marker>
                    )
                })
        }
            <ResortMap />
        </MapContainer>
    )
}
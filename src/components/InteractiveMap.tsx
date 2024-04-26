import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Resorts, Coords } from "src/App";

type InteractiveMapProps = {
    resort: Resorts
};
export default function InteractiveMap({ resort }: InteractiveMapProps) {
    const [position, setPosition] = useState<any>([0, 0]);

    useEffect(() => {
        setPosition(coordinates[resort])
    }, [resort]);

    const coordinates: Record<Resorts, Coords> = {
        'Snowbird': [40.5819, -111.6557],
        'Alta': [40.5883, -111.6372],
        'Brighton': [40.5997, -111.5844],
        'Solitude': [40.6196, -111.5913],
        'Park City': [40.6461, -111.4979],
        'Deer Valley': [40.6375, -111.4783],
    }

    function ResortMap() {
        const map = useMap()
        map.setView(position, map.getZoom())
        // console.log('map center:', map.getCenter())
        return null
    }

    return (
        <MapContainer center={position} zoom={13} style={{ height: 536 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            <ResortMap />
        </MapContainer>
    )

    return (
        <MapContainer center={[40.6196, -111.5913]} zoom={13} scrollWheelZoom={false} style={{ height: 536 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[40.6196, -111.5913]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
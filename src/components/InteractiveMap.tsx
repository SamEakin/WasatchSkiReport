import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { Resorts, Coordinates } from "../App";

type InteractiveMapProps = {
    resort: Resorts
};
export default function InteractiveMap({ resort }: InteractiveMapProps) {
    const [position, setPosition] = useState<any>([0, 0]);

    useEffect(() => {
        setPosition(Coordinates[resort])
    }, [resort]);

    function ResortMap() {
        const map = useMap()
        map.setView(position, map.getZoom())
        return null
    }

    return (
        <MapContainer center={position} zoom={13} style={{ height: 536, zIndex: 1 }}>
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
}
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import { Resorts, coordinates } from "../routes/App";
import UtahSkiLiftsData from '/public/data/UtahSkiLiftsData.json';
import { GeoJSON } from 'react-leaflet/GeoJSON'
import { Feature, FeatureCollection } from 'geojson';

type ChairliftMapProps = {
    resort: Resorts
};

export default function ChairliftMap({ resort }: ChairliftMapProps) {
    const [position, setPosition] = useState<any>([0, 0]);

    useEffect(() => {
        setPosition(coordinates[resort])
        // TODO: where should this get called
        // generateChairliftLayers()
    }, [resort]);

    function getResortName() {
        switch (resort) {
            case 'Snowbird': return 'Snowbird Ski and Summer Resort'
            case 'Alta': return 'Alta Ski Area'
            case 'Brighton': return 'Brighton Ski Resort'
            case 'Solitude': return 'Solitude Mountain Resort'
            case 'Deer Valley': return 'Deer Valley Resort'
            default: return resort;
        }
    }

    function generateChairliftLayers(): Feature[] | any {
        const resortName = getResortName()
        const ski_lift_data: FeatureCollection = UtahSkiLiftsData
        ski_lift_data.features.forEach((feature: Feature) => {
            if (feature.properties && feature.properties.RESORT === resortName) {
                // console.log(feature.properties.LIFT_NAME)
            }
        })

        let chairlifts = ski_lift_data.features.map((feature: Feature) => {
            <GeoJSON data={feature} key={feature.id} />
        })

        // console.log(chairlifts)

        return chairlifts;
    }

    function renderLift(feature: Feature) {
        return <GeoJSON data={feature} key={feature.id} />
    }

    function Chairlifts() {
        const map = useMap()
        map.setView(position, map.getZoom())
        return null
    }

    const resortName = getResortName();

    const great_western = {
        "type":"Feature",
        "id":1,
        "geometry":{
            "type":"LineString",
            "coordinates":[[-12421253.7744,4953431.2371],[-12418980.5887,4952442.7482]]
        },
        "properties":{
            "OBJECTID":1,
            "RESORT":"Brighton Ski Resort",
            "LIFT_NAME":"Great Western Express",
            "TYPE":"Detachable Chair",
            "CAPACITY":4,
            "BASE_ELEVATION":8763,
            "TOP_ELEVATION":10456,
            "COUNTY":"Salt Lake"
        }
    }

    return (
        <MapContainer center={position} zoom={13} style={{ height: 536, zIndex: 1 }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* {
                UtahSkiLiftsData.features.map((feature: Feature) => {
                    if (feature.properties && feature.properties.RESORT === resortName) {
                        feature.properties && console.log(feature.properties.LIFT_NAME)
                        feature.geometry && console.log(feature.geometry)
                        return (
                            <GeoJSON data={feature} key={feature.id} />
                        )
                    }
                })
            } */}

            <GeoJSON data={great_western as Feature} key={great_western.id} />
            {/* <GeoJSON key={(this.props.map.data.json)} data={this.props.map.x`xxxdata.json} /> */}


            <Chairlifts />
        </MapContainer>
    )
}
import { Skeleton } from "@mantine/core";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Resorts } from "src/App";

type Coords = number[];
type WeatherReportProps = {
    resort: Resorts
};

export default function WeatherReport({ resort }: WeatherReportProps) {
    const coordinates: Record<Resorts, Coords> = {
        'Snowbird':    [40.5819, -111.6557],
        'Alta':        [40.5883, -111.6372],
        'Brighton':    [40.5997, -111.5844],
        'Solitude':    [40.6196, -111.5913],
        'Park City':   [40.6461, -111.4979],
        'Deer Valley': [40.6375, -111.4783],
    }

    const [weather, setWeather] = useState({});


    
    async function fetch7daySnowfall(latitude: any, longitude: any) {
    try {
        const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=snowfall_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
        const response = await axios.get(endpoint)
        console.log(response.data)
        setWeather(response.data)
    } catch (error) {
            console.error(error)
        }
    }


    useEffect(() => { 
        let lat = coordinates[resort][0];
        let lon = coordinates[resort][1];
        fetch7daySnowfall(lat, lon)
    }, [resort]);
    
    return (
        <div>
            weather report for {resort}
            
            {/* {weather.elevation.toString()} */}
            <Skeleton h={28} mt="sm" animate={false} />
            {weather ? JSON.stringify(weather) : 'no weather data'}

            <Skeleton h={28} mt="sm" animate={false} />
            <Skeleton h={28} mt="sm" animate={false} />
            <Skeleton h={28} mt="sm" animate={false} />
            <Skeleton h={28} mt="sm" animate={false} />
            <Skeleton h={28} mt="sm" animate={false} />
            <Skeleton h={28} mt="sm" animate={false} />
        </div>
    );
};



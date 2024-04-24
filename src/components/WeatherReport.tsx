import { Skeleton, Table } from "@mantine/core";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Resorts } from "src/App";

type Coords = number[];

type WeatherResponse = {
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    daily_units: {
        time: "iso8601",
        snowfall_sum: "inch" | "cm"
    },
    daily: {
        time: string[],
        snowfall_sum: number[]
    }
}

type WeatherReportProps = {
    resort: Resorts
};

export default function WeatherReport({ resort }: WeatherReportProps) {
    const [weather, setWeather] = useState<WeatherResponse>();
    const coordinates: Record<Resorts, Coords> = {
        'Snowbird': [40.5819, -111.6557],
        'Alta': [40.5883, -111.6372],
        'Brighton': [40.5997, -111.5844],
        'Solitude': [40.6196, -111.5913],
        'Park City': [40.6461, -111.4979],
        'Deer Valley': [40.6375, -111.4783],
    }

    async function fetch7daySnowfall(latitude: number, longitude: number){
        try {
            const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=snowfall_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
            const response = await axios.get(endpoint);
            const data = response.data as WeatherResponse;
            console.log(data)
            setWeather(data)
        } catch (error) {
            console.error(error)
        }
    }

    function snowfall(daily: WeatherResponse['daily']){
        let rows = [];
        for (let i = 0; i < daily.time.length; i++){
            rows.push(
                <Table.Tr key={i}>
                    <Table.Td>{daily.time[i]}</Table.Td>
                    <Table.Td>{daily.snowfall_sum[i]}</Table.Td>
                </Table.Tr>
            )
        }
        return rows;
    }

    useEffect(() => {
        fetch7daySnowfall(coordinates[resort][0], coordinates[resort][1])
    }, [resort]);

    if (weather === undefined) return ('no weather data');
     
    return (
        <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Day</Table.Th>
            <Table.Th>Snowfall (inches)</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
            {snowfall(weather.daily)}
        </Table.Tbody>
      </Table>   
    );
}

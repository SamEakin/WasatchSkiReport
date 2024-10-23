import { Table } from "@mantine/core";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Resorts, coordinates } from "../routes/App";
import WeatherReportSnowfallRow from "./WeatherReportSnowfallRow";
import StatsSegments from './SegmentedStats';

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

    async function fetchSnowfallHistory(latitude: number, longitude: number, start_date: string, end_date: string) {
        try {
            const start_date = '2024-03-01'
            const end_date = '2024-03-31'
            const endpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${start_date}&end_date=${end_date}&daily=snowfall_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver`
            const response = await axios.get(endpoint);
            const data = response.data as WeatherResponse;


        } catch(error) {
            console.error(error)
        }
    }

    async function fetchSnowfall(latitude: number, longitude: number, past_days: number) {
        try {
            const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=snowfall_sum&timezone=America%2FDenver&past_days=${past_days}&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
            const response = await axios.get(endpoint);
            const data = response.data as WeatherResponse;
            setWeather(data)
        } catch (error) {
            console.error(error)
        }
    }

    function totalSnowfall(snowfall_sum: number[]): string {
        return snowfall_sum.reduce((a, b) => a + b, 0).toFixed(2)
    }

    useEffect(() => {
        let past_days = 7
        fetchSnowfall(coordinates[resort][0], coordinates[resort][1], past_days)
    }, [resort]);

    if (weather === undefined) return ('no weather data');

    return (
        <>
            <StatsSegments weather={weather}/>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Elevation</Table.Th>
                        <Table.Th>Latitude</Table.Th>
                        <Table.Th>Longitude</Table.Th>
                        <Table.Th>Snowfall Sum (last 7 days)</Table.Th>

                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Td>{weather.elevation}</Table.Td>
                        <Table.Td>{weather.latitude}</Table.Td>
                        <Table.Td>{weather.longitude}</Table.Td>
                        <Table.Td>{totalSnowfall(weather.daily.snowfall_sum)}</Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>

            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Date</Table.Th>
                        <Table.Th>Snowfall (inches)</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {
                        weather.daily.time.map((time, index) => {
                            const snowfall = weather.daily.snowfall_sum[index];
                            return <WeatherReportSnowfallRow key={index} index={index} snowfall={snowfall} date={time} />
                        })
                    }
                </Table.Tbody>
            </Table>
        </>

    );
}

import { Table } from "@mantine/core";
import axios from 'axios';
import { useEffect, useState } from "react";
import { Resorts, Coordinates } from "../App";
import WeatherReportSnowfallRow from "./WeatherReportSnowfallRow";

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

    async function fetch7daySnowfall(latitude: number, longitude: number) {
        try {
            const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=snowfall_sum&timezone=America%2FDenver&past_days=7&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
            const response = await axios.get(endpoint);
            const data = response.data as WeatherResponse;
            console.log(data)
            setWeather(data)
        } catch (error) {
            console.error(error)
        }
    }

    function totalSnowfall(snowfall_sum: number[]): string {
        console.log(snowfall_sum)
        return snowfall_sum.reduce((a, b) => a + b, 0).toFixed(2)
    }

    useEffect(() => {
        fetch7daySnowfall(Coordinates[resort][0], Coordinates[resort][1])
    }, [resort]);

    if (weather === undefined) return ('no weather data');

    return (
        <>
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
                    <Table.Td>{weather.elevation}</Table.Td>
                    <Table.Td>{weather.latitude}</Table.Td>
                    <Table.Td>{weather.longitude}</Table.Td>
                    <Table.Td>{totalSnowfall(weather.daily.snowfall_sum)}</Table.Td>
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

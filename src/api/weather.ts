import axios from 'axios';

export type WeatherResponse = {
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

export async function fetchSnowfallHistory(latitude: number, longitude: number, start_date: string, end_date: string) {
    try {
        const start_date = '2024-03-01'
        const end_date = '2024-03-31'
        const endpoint = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${start_date}&end_date=${end_date}&daily=snowfall_sum&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FDenver`
        const response = await axios.get(endpoint);
        return response.data as WeatherResponse;
    } catch(error) {
        console.error(error)
    }
}

export async function fetchSnowfall(latitude: number, longitude: number, past_days: number) {
    try {
        const endpoint = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=snowfall_sum&timezone=America%2FDenver&past_days=${past_days}&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch`
        const response = await axios.get(endpoint);
        return response.data as WeatherResponse;
    } catch (error) {
        console.error(error)
    }
}
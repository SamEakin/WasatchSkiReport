type WeatherReportProps = {
    resort: string
};

export default function WeatherReport({ resort }: WeatherReportProps) {
    const fetchWeatherData = async () => {
        try {
            const response = await fetch('https://api.example.com/weather');
            const data = await response.json();
            // Process the data here
        } catch (error) {
            // Handle the error here
        }
    };

    return (
        <div>
            weather report
        </div>
    );
};



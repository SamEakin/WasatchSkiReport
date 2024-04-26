import { Table } from "@mantine/core";

type WeatherReportSnowfallRowProps = {
    index: number,
    date: string,
    snowfall: number,
};

export default function WeatherReportSnowfallRow({ index, date, snowfall }: WeatherReportSnowfallRowProps) {
    return (
        <Table.Tr>
            <Table.Td>{snowfallDateLabels(index, date)}</Table.Td>
            <Table.Td>{snowfall.toFixed(2)}</Table.Td>
        </Table.Tr>
    )

}

function snowfallDateLabels(index: number, date: string) {
    switch (index) {
        case 6:
            return 'Yesterday';
        case 7:
            return 'Today';
        case 8:
            return 'Tomorrow';
        default:
            return date;
    }
}

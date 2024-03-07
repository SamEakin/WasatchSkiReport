import { Image, Group, Title } from '@mantine/core';

import alta from '../../public/icons/alta.png';
import brighton from '../../public/icons/brighton.svg';
import deer_valley from '../../public/icons/deer_valley.svg';
import park_city from '../../public/icons/park_city.svg';
import snowbird from '../../public/icons/snowbird.svg';
import solitude from '../../public/icons/solitude.svg';


type HeaderComponentProps = {
    resort: string
};

export default function HeaderComponent({ resort }: HeaderComponentProps) {
    function resortIcon(resort: string): string {
        let icon: string = '';
        switch (resort) {
            case 'Brighton':
                icon = brighton
                break
            case 'Solitude':
                icon = solitude
                break
            case 'Alta':
                icon = alta
                break
            case 'Deer Valley':
                icon = deer_valley
                break
            case 'Park City':
                icon = park_city
                break
            case 'Snowbird':
                icon = snowbird
                break
        }
        return icon
    }
    
    return (
        <>
            <Group justify='center'>
                <h2 style={{position: 'absolute', left: 10}}>Wasatch Ski Reports</h2>
                <Image src={resortIcon(resort)} alt="resort" h='55'/>
                <Title>{resort}</Title>
            </Group>
        </>
    );
}
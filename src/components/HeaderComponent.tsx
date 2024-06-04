import alta from '/icons/alta.png';
import brighton from '/icons/brighton.svg';
import deer_valley from '/icons/deer_valley.svg';
import park_city from '/icons/park_city.svg';
import snowbird from '/icons/snowbird.svg';
import solitude from '/icons/solitude.svg';
import { Image, Group, Title } from '@mantine/core';
import { useNavigate} from 'react-router-dom';
import { Resorts } from 'src/routes/App';


type HeaderComponentProps = {
    resort: string | undefined,
    onResortSelect: (value: Resorts | undefined) => void;
};

export default function HeaderComponent({ resort, onResortSelect }: HeaderComponentProps) {
    const navigate = useNavigate();

    function resortIcon(resort: string | undefined): string {
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

    function handleClick() {
        onResortSelect(undefined);
        navigate('/');
    }
    
    return (
        <Group justify='center'>
            <Title 
                style={{position: 'absolute', left: 10}} 
                order={2}
                onClick={() => handleClick()}
            >Wasatch Ski Reports</Title>
            <Image src={resortIcon(resort)} alt="resort" h='55'/>
            <Title>{resort}</Title>
        </Group>
    );
}
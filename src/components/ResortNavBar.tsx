import {  NavLink } from '@mantine/core';
import { useState } from 'react';
import { Resorts } from 'src/routes/App';
import { useNavigate} from 'react-router-dom';

type ResortNavBarProps = {
    onResortSelect: (value: Resorts) => void;
};

export default function ResortNavBar({ onResortSelect }: ResortNavBarProps){
    const [active, setActive] = useState(0);
    const navigate = useNavigate();

    const resorts: Resorts[] = ['Alta', 'Brighton', 'Solitude', 'Deer Valley', 'Park City', 'Snowbird', 'Mt. Everest', 'Saas Fee']
    
    function handleResortSelect(resort: Resorts) {
        onResortSelect(resort)
        setActive(active)
        navigate('/' + resort)
    }

    return (
        resorts.map((resort) =>
            <NavLink
                key={resort} 
                label={resort}
                onClick={() => handleResortSelect(resort)}
            />
        ) 
    );
};
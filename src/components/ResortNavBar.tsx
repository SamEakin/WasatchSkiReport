import { NavLink } from '@mantine/core';
import { useState } from 'react';
import { Resorts } from 'src/App';

type ResortNavBarProps = {
    onResortSelect: (value: Resorts) => void;
};

export default function ResortNavBar({ onResortSelect }: ResortNavBarProps){
    const [active, setActive] = useState(0);

    const resorts: Resorts[] = ['Alta', 'Brighton', 'Solitude', 'Deer Valley', 'Park City', 'Snowbird']
    
    function handleResortSelect(resort: Resorts) {
        onResortSelect(resort)
        setActive(active)
    }

    return (
        resorts.map((resort) =>
            <NavLink
                href={`#${resort}`}
                label={resort}
                onClick={() => handleResortSelect(resort)}
            />
        ) 
    );
};
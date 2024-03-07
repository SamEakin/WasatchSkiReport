import { NavLink } from '@mantine/core';
import { useState } from 'react';

type ResortNavBarProps = {
    onResortSelect: (value: string) => void;
};

export default function ResortNavBar({ onResortSelect }: ResortNavBarProps){
    const [active, setActive] = useState(0);

    const resorts: string[] = ['Alta', 'Brighton', 'Solitude', 'Deer Valley', 'Park City', 'Snowbird']
    
    function handleResortSelect(resort: string) {
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
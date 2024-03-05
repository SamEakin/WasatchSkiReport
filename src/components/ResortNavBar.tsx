import { NavLink } from '@mantine/core';

type ResortNavBarProps = {
    onResortSelect: (value: string) => void;
};

export default function ResortNavBar({ onResortSelect }: ResortNavBarProps){
    const resorts: string[] = ['Alta', 'Brighton', 'Solitude', 'Deer Valley', 'Park City', 'Snowbird']
    
    return (
        resorts.map((resort) =>
            <NavLink 
                label={resort}
                onClick={() => onResortSelect(resort)}
            />
        ) 
    );
};
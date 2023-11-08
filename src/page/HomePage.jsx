import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';

export const HomePage = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(
            ({ data }) => setCountries(data)
        )
    }, [])

    return (
        <>
            <Controls />
            <List>
                {countries.map((c) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region
                            },
                            {
                                title: 'Capital',
                                description: c.capital
                            },

                        ]
                    };
                    return (
                        <Link key={c.name} to={`/country/${c.name}`}>
                            <Card {...countryInfo} />
                        </Link>
                    )
                })}
            </List>
        </>
    );
};

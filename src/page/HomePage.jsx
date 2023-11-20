import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountry } from '../store/slice/countrySlice';


export const HomePage = () => {
    const countres = useSelector(state => state.country.countres)
    const search = useSelector(state => state.sort.search)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountry())
    }, [dispatch])

    const filterCountres = countres.filter((country) => {
        if (country.name.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
        return false
    }).map((country) => (

        <Link key={country.name} to={`/country/${country.name}`}>
            <Card {...country} />
        </Link>
    ))

    return (
        <>
            <Controls />
            <List>
                {filterCountres}
            </List>
        </>
    );
};

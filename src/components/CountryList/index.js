import React from 'react';
import PropTypes from 'prop-types';
import {countries} from '../../data/country';
import './country.scss'

function CountryList() {
    console.log(countries);
    return (
        <>
            <ul className='country'>
                {countries.map((itemCountry)=>
                (
                    <li className='country-items' key={itemCountry.id}>
                        <span className='country-text'>{itemCountry.name}</span>
                        <ul className='country-city-list'>
                            {itemCountry.city.map((itemCity)=>
                            <li className='country-city-items' key={itemCity.id}>{itemCity.name}</li>
                            )}
                        </ul>
                        
                    </li>
                ))}
            </ul>
        </>
    );
}

export default CountryList;
import React, { useState, useEffect } from 'react';
import Bar from '../../components/bar-chart';

export const BarChart = () => {
    const API = 'https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/f8357c439bbb7b4bd3dc6e8807c52105fb137ec6/pokemon-es.json ';

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setPokemons(data));
    });
    let pok = fetch(API).then(response => response.json()).then(data => setPokemons(data));

    return (
    <>
        <div className='barchart-container'>
            {console.log('Pok', pokemons)}
            <Bar data={pok} />
        </div>
    </>
    );
};
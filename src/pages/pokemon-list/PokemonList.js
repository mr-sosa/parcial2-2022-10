import React, {useState, useEffect} from 'react';
import './PokemonList.scss';
import { FormattedMessage } from 'react-intl';

export const PokemonList = (props) => {
  const { ln } = props;
  const API_ESP = 'https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/f8357c439bbb7b4bd3dc6e8807c52105fb137ec6/pokemon-es.json ';
  const API_EN = 'https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json';
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      if(ln === 'en-US') {
        fetch(API_EN)
        .then(response => response.json())
        .then(data => setPokemons(data));
      }
      else{
        fetch(API_ESP)
        .then(response => response.json())
        .then(data => setPokemons(data));
      }
  });

  return (
    <>
      <div className='pokemon-container'>
        <h1><FormattedMessage id="Tittle"/></h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>
                <FormattedMessage id="Image"/>
              </th>
              <th scope='col'>
                <FormattedMessage id="Name"/>
              </th>
              <th scope='col'>
                <FormattedMessage id="Description"/>
              </th>
              <th scope='col'>
                <FormattedMessage id="Height"/>
              </th>
              <th scope='col'>
                <FormattedMessage id="Weight"/>
              </th>
              <th scope='col'>
                <FormattedMessage id="Type"/>
              </th>
            </tr>
          </thead>
          <tbody>
          
            {pokemons.map((e, i) => (
              <tr>
                <th scope='row'>{i+1}</th>
                <td key={e.ThumbnailImage}><img src={e.ThumbnailImage}/></td>
                <td key={e.name}>{e.name}</td>
                <td key={e.description}>{e.description}</td>
                <td key={e.height}>{e.height}</td>
                <td key={e.weight}>{e.weight}</td>
                <td key={e.name+'type'}>{e.type.map((t) => (
                    <span className="badge badge-primary" key={e.name+t}>{t}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

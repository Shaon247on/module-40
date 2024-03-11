import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    }

   

    return (
        <div className={`country ${visited? 'visited': 'Non-visited'}`}>
            <h3 style={{color: visited ? 'orange': 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Polulation: {population} People</p>
            <p>Area: {area} Km</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={()=> handleVisitedCountry(country)}>Mark Visited</button><br/><br/>
            <button onClick={handleVisited}>{visited? 'Visited': 'Not Visited'}</button>
            <p>{visited? `I have visited ${name.common}` : `I want to visit ${name.common}`}</p>
        </div>
    );
};

export default Country;
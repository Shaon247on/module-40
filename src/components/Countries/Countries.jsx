import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"
import './countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([])
    const [visitedCountires, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedflags] = useState([])

    useEffect((()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }),[])

    const handleVisitedCountry = country =>{
        const newVisitedCountry = [...visitedCountires, country]
        setVisitedCountries(newVisitedCountry)
    }

    const handlsVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedflags(newVisitedFlags)
    }
    //remove item from an array in a state
    //use filter to select all the elements execpt the one you want to remove

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountires.length}</h4>
                <h3>The countries I have visited:</h3>
                <ul>
                {
                    visitedCountires.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
                </ul>
            </div>
            <div className="Flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>
            {/* Display Countries */}
            <div className="countries">
            {
                countries.map(country => <Country
                    key={country.cca3} 
                    handleVisitedCountry={handleVisitedCountry} handlsVisitedFlags={handlsVisitedFlags} 
                    country={country}></Country>)
            }
            </div>
        </div>
    )
}


export default Countries
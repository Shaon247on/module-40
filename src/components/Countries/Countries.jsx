import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"
import './countries.css'

const Countries = () => {
    const [countries, setCountries]= useState([])
    const [visitedCountires, setVisitedCountries] = useState([])

    useEffect((()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }),[])

    const handleVisitedCountry = country =>{
        console.log('add this to your visited country')
        // console.log(country)
    }
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries</h4>
                <ul>

                </ul>
            </div>
            <div className="countries">
            {
                countries.map(country => <Country handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    )
}


export default Countries
import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    // const {country, handlsVisitedFlags, handleVisitedCountry} = props
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handlsVisitedFlags={handlsVisitedFlags}
            ></CountryData> */}
            <CountryData
            {...props}
            ></CountryData>
        </div>
    );
};

export default CountryDetails;
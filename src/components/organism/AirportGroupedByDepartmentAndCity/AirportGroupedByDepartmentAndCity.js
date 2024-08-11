import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';

const AirportsGroupedByDepartmentAndCity = ({groupedData}) => {
    return (
        
        <div className='airports-grouped-by-city'>
            {Object.keys(groupedData).map(departmentName => {
                const cityObject = groupedData[departmentName];
                return (
                    <div key={departmentName} className="department">
                        <h2 style={{fontFamily:'system-ui'}}>{departmentName}</h2>
                        {Object.keys(cityObject).map(cityName => {
                            const airportsList = cityObject[cityName].airportsList;

                            return (
                                <div key={cityName} className="city">
                                    <h3 style={{fontFamily:'system-ui'}}>{cityName}</h3>
                                    <CardsContainer dataList={airportsList} color={"white"} selected={1} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default AirportsGroupedByDepartmentAndCity;

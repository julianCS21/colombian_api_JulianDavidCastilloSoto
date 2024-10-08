import React from 'react';
import CardsContainer from '../CardsContainer/CardsContainer';

const TouristicAttractionsGroupedByDepartmentAndCity = ({ groupedData }) => {
    return (
        <div className='touristic-attraction-grouped'>
            {Object.keys(groupedData).map(departmentName => {
                const cityObject = groupedData[departmentName];

                return (
                    <div key={departmentName} className="department">
                        <h2 style={{fontFamily:'system-ui'}}>{departmentName}</h2>
                        {Object.keys(cityObject).map(cityName => {
                            const attractions = cityObject[cityName].touristicAttractionNames;

                            return (
                                <div key={cityName} className="city">
                                    <h3 style={{fontFamily:'system-ui'}}>{cityName}</h3>
                                    <CardsContainer 
                                        dataList={attractions} 
                                        color={"white"} 
                                        selected={2} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default TouristicAttractionsGroupedByDepartmentAndCity;

import React, { useEffect, useState } from 'react';
import { fetchAirports } from '../../../utils/GetEntities';
import { groupAirportsByDepartmentsAndCities } from '../../../utils/GroupEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';

const AirportsTemplate = ({ isSelected }) => {
    const [airports, setAirports] = useState([]);
    const [data, setData] = useState([]);
    const [dataStructured, setDataStructured] = useState([]);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: airportsData, elapsedTime } = await fetchAirports();
                setAirports(airportsData);
                
                const groupedData = await groupAirportsByDepartmentsAndCities();
                setData(groupedData);
                
                // Future use for dataStructured
                // const groupedDataByManyOptions = await groupAirportsByRegionAndDepartmentsAndCitiesAndType();
                // setDataStructured(groupedDataByManyOptions);
                
            } catch (error) {
                console.error('Error fetching and grouping data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = () => {
        setFilter(!filter);
    };

    const containerStyle = {
        display: isSelected ? 'block' : 'none'
    };

    return (
        <div className='airports-template' style={containerStyle}>
            <input
                type='checkbox'
                checked={filter}
                onChange={handleFilterChange}
            />
            Group by Departments and Cities

            {filter ? (
                Object.keys(data).map(departmentName => {
                    const cityObject = data[departmentName];
                    
                    return (
                        <div key={departmentName} className="department">
                            <h2>{departmentName}</h2>
                            {Object.keys(cityObject).map(cityName => {
                                const airportsList = cityObject[cityName].airportsList;

                                return (
                                    <div key={cityName} className="city">
                                        <h3>{cityName}</h3>
                                        <CardsContainer dataList={airportsList} color={"blue"} selected={1} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })
            ) : (
                <CardsContainer dataList={airports} color={"blue"} selected={1} />
            )}
        </div>
    );
};

export default AirportsTemplate;

import React, { useEffect, useState } from 'react';
import { fetchTouristicAttractions } from '../../../utils/GetEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
import { groupTouristicAttractionsByDepartmentsAndCities } from '../../../utils/GroupEntities';

const TouristicAttractionsTemplate = ({ isSelected }) => {
    const [data, setData] = useState([]);
    const [groupedData, setGroupedData] = useState([]);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: attractionsData } = await fetchTouristicAttractions();
                setData(attractionsData);
                
                const groupedAttractions = await groupTouristicAttractionsByDepartmentsAndCities();
                setGroupedData(groupedAttractions);
                

            } catch (error) {
                console.error('Error fetching and grouping data:', error.message);
            }
        };

        fetchData();
    }, []);

    const containerStyle = {
        display: isSelected ? 'block' : 'none'
    };

    const handleFilterChange = () => {
        setFilter(!filter);
    };

    return (
        <div className='touristic-attractions-template' style={containerStyle}>
            <label>
                <input 
                    type='checkbox' 
                    checked={filter} 
                    onChange={handleFilterChange} 
                />
                Group by departments and cities
            </label>
            {filter ? (
                Object.keys(groupedData).map(departmentName => {
                    const cityObject = groupedData[departmentName];
                    
                    return (
                        <div key={departmentName} className="department">
                            <h2>{departmentName}</h2>
                            {Object.keys(cityObject).map(cityName => {
                                const attractions = cityObject[cityName].touristicAttractionNames;

                                return (
                                    <div key={cityName} className="city">
                                        <h3>{cityName}</h3>
                                        <CardsContainer 
                                            dataList={attractions} 
                                            color={"red"} 
                                            selected={2} 
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })
            ) : (
                <CardsContainer 
                    dataList={data} 
                    color={"red"} 
                    selected={2} 
                />
            )}
        </div>
    );
};

export default TouristicAttractionsTemplate;

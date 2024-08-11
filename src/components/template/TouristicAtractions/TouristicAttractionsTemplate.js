import React, { useEffect, useState } from 'react';
import { fetchTouristicAttractions } from '../../../utils/GetEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
import TouristicAttractionsGroupedByDepartmentAndCity from '../../organism/TouristicAttractionsGroupedByDepartmentAndCity/TouristicAttractionsGroupedByDepartmentAndCity';
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
                <TouristicAttractionsGroupedByDepartmentAndCity groupedData={groupedData} />
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

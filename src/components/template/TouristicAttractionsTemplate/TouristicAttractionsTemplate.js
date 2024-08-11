import React, { useEffect, useState } from 'react';
import { fetchTouristicAttractions } from '../../../utils/GetEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
import TouristicAttractionsGroupedByDepartmentAndCity from '../../organism/TouristicAttractionsGroupedByDepartmentAndCity/TouristicAttractionsGroupedByDepartmentAndCity';
import { groupTouristicAttractionsByDepartmentsAndCities } from '../../../utils/GroupEntities';
import Size from '../../atoms/Size/Size';
import Time from '../../atoms/Time/Time';

const TouristicAttractionsTemplate = ({ isSelected }) => {
    const [data, setData] = useState([]);
    const [groupedData, setGroupedData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [time,setTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: attractionsData, elapsedTime:time } = await fetchTouristicAttractions();
                setData(attractionsData);
                setTime(time);          
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
                <span style={{fontFamily:'system-ui'}}>Group by departments and cities</span>
            </label>
            {filter ? (
                <TouristicAttractionsGroupedByDepartmentAndCity groupedData={groupedData} />
            ) : (
                <div>
                    <Size entity={"Touristic Attractions"} size={data.length}></Size>
                    <CardsContainer dataList={data} color={"white"} selected={2} />
                    <Time entity={"Touristic Attractions"} time={time}></Time>
                </div>
            )}
        </div>
    );
};

export default TouristicAttractionsTemplate;

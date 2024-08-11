import React, { useEffect, useState } from 'react';
import { fetchAirports } from '../../../utils/GetEntities';
import { groupAirportsByDepartmentsAndCities } from '../../../utils/GroupEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
import AirportGroupedByDepartmentAndCity from '../../organism/AirportGroupedByDepartmentAndCity/AirportGroupedByDepartmentAndCity';
import AirportStructureData from '../../organism/AirportStructureData/AirportStructureData';
import { groupAirportsByRegionAndDepartmentsAndCitiesAndType } from '../../../utils/GroupEntities';
import Size from '../../atoms/Size/Size';
import Time from '../../atoms/Time/Time';

const AirportsTemplate = ({ isSelected }) => {
    const [airports, setAirports] = useState([]);
    const [data, setData] = useState([]);
    const [dataStructured, setDataStructured] = useState([]);
    const [filter, setFilter] = useState(false);
    const [showStructuredData, setShowStructuredData] = useState(false);
    const [time,setTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: airportsData, elapsedTime:time } = await fetchAirports();
                setAirports(airportsData);
                setTime(time);


                const groupedData = await groupAirportsByDepartmentsAndCities();
                setData(groupedData);

                const structuredData = await groupAirportsByRegionAndDepartmentsAndCitiesAndType(); 
                setDataStructured(structuredData);
                
            } catch (error) {
                console.error('Error fetching and grouping data:', error.message);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = () => {
        setFilter(!filter);
        setShowStructuredData(false);
    };

    const handleStructuredDataToggle = () => {
        setShowStructuredData(!showStructuredData);
        setFilter(false);
    };

    const containerStyle = {
        display: isSelected ? 'block' : 'none'
    };

    return (
        <div className='airports-template' style={containerStyle}>
            <div>
                <input
                    type='checkbox'
                    checked={filter}
                    onChange={handleFilterChange}
                />
                Group by Departments and Cities
            </div>

            <div>
                <input
                    type='checkbox'
                    checked={showStructuredData}
                    onChange={handleStructuredDataToggle}
                />
                Show Structured Data as JSON
            </div>

            {filter ? (
                <AirportGroupedByDepartmentAndCity groupedData={data} />
            ) : showStructuredData ? (
                <AirportStructureData dataStructured={dataStructured} />
            ) : (
                <div>
                    <Size entity={"Airports"} size={airports.length}></Size>
                    <CardsContainer dataList={airports} color={"blue"} selected={1} />
                    <Time entity={"Airports"} time={time}></Time>
                </div>
                
            )}
        </div>
    );
};

export default AirportsTemplate;

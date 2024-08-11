import React, { useEffect, useState } from 'react';
import { groupPresidentsByPoliticalParty } from '../../../utils/GroupEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
import PresidentsGroupedByPoliticalParty from '../../organism/PresidentsGroupedByPoliticalParty/PresidentsGroupedByPoliticalParty';
import { fetchPresidents } from '../../../utils/GetEntities';
import Size from '../../atoms/Size/Size';
import Time from '../../atoms/Time/Time';

const PresidentsTemplate = ({ isSelected }) => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [filter, setFilter] = useState(false);
    const [time,setTime] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data:presidents, elapsedTime:time} = await fetchPresidents();
                setData(presidents);
                setTime(time)
                const sortedParties = await groupPresidentsByPoliticalParty();
                setSortedData(sortedParties);
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
        <div className='presidents-template' style={containerStyle}>
            <label>
                <input 
                    type='checkbox' 
                    onClick={handleFilterChange}
                    checked={filter}
                />
                Group by political party
            </label>

            {filter ? (
                <PresidentsGroupedByPoliticalParty sortedData={sortedData} />
            ) : (
                <div>
                    <Size entity={"Presidents"} size={data.length}></Size>
                    <CardsContainer dataList={data} color={"yellow"} selected={0} />
                    <Time entity={"Presidents"} time={time}></Time>
                </div>
            )}
        </div>
    );
};

export default PresidentsTemplate;

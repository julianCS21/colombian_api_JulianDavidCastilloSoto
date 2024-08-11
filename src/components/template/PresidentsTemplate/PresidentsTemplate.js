import React, { useEffect, useState } from 'react';
import { groupPresidentsByPoliticalParty } from '../../../utils/GroupEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
import PresidentsGroupedByPoliticalParty from '../../organism/PresidentsGroupedByPoliticalParty/PresidentsGroupedByPoliticalParty';
import { fetchPresidents } from '../../../utils/GetEntities';

const PresidentsTemplate = ({ isSelected }) => {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [filter, setFilter] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const presidents = await fetchPresidents();
                setData(presidents.data);
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
                <CardsContainer dataList={data} color={"yellow"} selected={0} />
            )}
        </div>
    );
};

export default PresidentsTemplate;

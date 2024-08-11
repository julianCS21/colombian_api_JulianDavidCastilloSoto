import React, { useEffect, useState } from 'react';
import { groupPresidentsByPoliticalParty } from '../../../utils/GroupEntities';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';
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

    const HandlerFilter = () => {
        setFilter(!filter);
    };




    return (
        <div className='presidents-template' style={containerStyle}>
            <label>
                <input 
                    type='checkbox' 
                    onClick={HandlerFilter}
                    checked={filter}
                />
                Group by political party
            </label>

            {filter ? (
                sortedData.map((info, index) => (
                    <div key={index}>
                        <span>Political Party: {info.politicalParty}</span>
                        <CardsContainer dataList={info.presidentsList} color={"yellow"} selected={0} />
                    </div>
                ))
            ) : (
                <CardsContainer dataList={data} color={"yellow"} selected={0} />
            )}
        </div>
    );
};

export default PresidentsTemplate;

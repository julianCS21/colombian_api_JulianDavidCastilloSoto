import React from 'react';
import CardsContainer from '../../organism/CardsContainer/CardsContainer';

const PresidentsGroupedByPoliticalParty = ({ sortedData }) => {
    return (
        <div className="presidents-grouped-by-political-party">
            {sortedData.map((info, index) => (
                <div key={index}>
                    <h2 style={{fontFamily:'system-ui'}}>Political Party: {info.politicalParty}</h2>
                    <CardsContainer dataList={info.presidentsList} color={"white"} selected={0} />
                </div>
            ))}
        </div>
    );
};

export default PresidentsGroupedByPoliticalParty;

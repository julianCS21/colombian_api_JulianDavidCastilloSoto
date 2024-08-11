import React from 'react';

const AirportStructureData = ({ dataStructured }) => {
    return (
        <div className="airport-structure-data">
            <pre>{JSON.stringify(dataStructured, null, 2)}</pre>
        </div>
    );
};

export default AirportStructureData;
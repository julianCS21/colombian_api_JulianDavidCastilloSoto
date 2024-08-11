import React from 'react';

const ContentCard = ({ name, image }) => {
    return (
        <div className="content-card">
            {image ? (
                <img 
                    src={image} 
                    alt={name} 
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', display: 'block', margin: '0 auto' }}
                />
            ) : (
                <div style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
                    the API has not  the image
                </div>
            )}
            <span style={{fontFamily:'system-ui'}}><strong>{name}</strong></span>
        </div>
    );
};

export default ContentCard;

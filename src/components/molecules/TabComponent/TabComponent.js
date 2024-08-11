import React from "react";
import TabButton from "../../atoms/TabButton/TabButton";
import "./TabComponent.css";

const TabComponent = ({ color, text, isSelected, onClick }) => {
    return (
        <div
            className={`tab ${isSelected ? 'selected' : ''}`}
            style={{ '--hoverColor': color, '--borderColor': color }}
            onClick={onClick}
        >
            <TabButton color={color} text={text} isSelected={isSelected} />
        </div>
    );
};

export default TabComponent;

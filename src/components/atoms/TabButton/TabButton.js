import './TabButton.css';

const TabButton = ({ color, text, isSelected }) => {
  return (
    <span 
      className={`tab-button ${isSelected ? 'selected' : ''}`} 
      style={{ '--hoverColor': color }}
    >
      {text}
    </span>
  );
};

export default TabButton;

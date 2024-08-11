import CardContainer from "../../molecules/CardContainer/CardContainer";
import "./CardsContainer.css";

const CardsContainer = ({ dataList, color, selected }) => {
  return (
    <div className="cards-container">
      {dataList.map((data, index) => {
        if (selected === 0) {
          return (
            <CardContainer
              key={index}
              color={color}
              name={
                <>
                  {data.name} {data.lastName}
                  <br />
                  {data.startPeriodDate} - {data.endPeriodDate}
                </>
              }
              image={data.image}
            />
          );
        } else if (selected === 1) {
          return (
            <CardContainer
              key={index}
              color={color}
              name={
                <>
                  {data.name}
                  <br />
                  {data.type} 
                </>
              }
              image={null}
            />
          );
        } else {
          return (
            <CardContainer
              key={index}
              color={color}
              name={data.name}
              image={data.images}
            />
          );
        }
      })}
    </div>
  );
};

export default CardsContainer;

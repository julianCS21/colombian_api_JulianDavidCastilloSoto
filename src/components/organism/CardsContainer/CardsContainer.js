import CardContainer from "../../molecules/CardContainer/CardContainer"
import "./CardsContainer.css"

const CardsContainer = ({dataList,color,selected}) =>{


    return <div className="cards-container">
        {dataList.map((data,index) =>{
            if(selected === 0){
                return <CardContainer key={index} color={color} name={data.name + " " + data.lastName} image={data.image}></CardContainer>
            }
            else if(selected === 1){
                return <CardContainer key={index} color={color} name={data.name} image={null}></CardContainer>
            }
            return <CardContainer key={index} color={color} name={data.name} image={data.images}>
            </CardContainer>
        })}
    </div>

}

export default CardsContainer;

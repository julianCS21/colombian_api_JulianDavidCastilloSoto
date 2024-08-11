import CardContainer from "../../molecules/CardContainer/CardContainer"

const CardsContainer = ({dataList,color}) =>{


    return <div className="cards-container">
        {dataList.map((data,index) =>{
            return <CardContainer key={index} color={color} name={data.name} image={data.image}>
            </CardContainer>
        })}
    </div>

}

export default CardsContainer;

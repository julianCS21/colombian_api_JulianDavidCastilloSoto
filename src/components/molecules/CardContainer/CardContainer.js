import ContentCard from "../../atoms/ContentCard/ContentCard"
import "./CardContainer.css"

const CardContainer = ({color,name,image}) =>{
    return <div style={{ '--hoverColor': color }} className="card-container">
        <ContentCard name={name} image={image}></ContentCard>
    </div>

}

export default CardContainer;
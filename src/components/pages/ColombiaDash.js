import { useState } from "react";
import TabsComponent from "../organism/TabsComponent/TabsComponent";
import PresidentsTemplate from "../template/PresidentsTemplate/PresidentsTemplate";
import AirportsTemplate from "../template/AirportsTemplate/AirportsTemplate";
import TouristicAttractionsTemplate from "../template/TouristicAttractionsTemplate/TouristicAttractionsTemplate";

const ColombiaDash = () =>{

    const [selected, setSelected] = useState(0);
    const handleSelect = (index) => {
        setSelected(index);
    };

    return <div>
        <TabsComponent selected={selected} isSelected={handleSelect}></TabsComponent>
        <PresidentsTemplate isSelected={selected === 0}></PresidentsTemplate>
        <AirportsTemplate isSelected={selected === 1}></AirportsTemplate>
        <TouristicAttractionsTemplate isSelected={selected === 2}></TouristicAttractionsTemplate>
    </div>
}

export default ColombiaDash;
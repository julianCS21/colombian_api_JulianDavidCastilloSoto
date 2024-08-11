import { useState } from "react";
import TabsComponent from "../organism/TabsComponent/TabsComponent";

const ColombiaDash = () =>{

    const [selected, setSelected] = useState(0);
    const handleSelect = (index) => {
        setSelected(index);
    };

    return <div>
        <TabsComponent selected={selected} isSelected={handleSelect}></TabsComponent>

    </div>
}

export default ColombiaDash;
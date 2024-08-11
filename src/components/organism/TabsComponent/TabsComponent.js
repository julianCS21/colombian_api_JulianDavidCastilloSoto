
import TabComponent from "../../molecules/TabComponent/TabComponent";
import "./TabsComponent.css";

const TabsComponent = ({selected,isSelected}) => {

    return (
        <nav className="nav">
            <TabComponent
                color={"yellow"}
                text={"Presidents"}
                isSelected={selected === 0}
                onClick={() => isSelected(0)}
            />
            <TabComponent
                color={"blue"}
                text={"Airports"}
                isSelected={selected === 1}
                onClick={() => isSelected(1)}
            />
            <TabComponent
                color={"red"}
                text={"Touristic Attractions"}
                isSelected={selected === 2}
                onClick={() => isSelected(2)}
            />
        </nav>
    );
};

export default TabsComponent;

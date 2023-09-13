import { useState } from "react";

export default function DynamicType({ updateCurrentState }) {
    const [dynamicType, setDynamicType] = useState(null);

    function dynamicTypeHandler(selectedDynamicType) {
        if (dynamicType !== selectedDynamicType) {
            setDynamicType(selectedDynamicType);
            console.log(selectedDynamicType);
        }
        switch (selectedDynamicType) {
            case "solo":
                updateCurrentState("solo");
                break;
            case "pair":
                updateCurrentState("pair");
                break;
            case "group":
                updateCurrentState("group");
                break;
        }
    }

    return (
        <div className="dynamic-type-select">
            <h2>Machine Screen 1 - Dynamic type</h2>
            <p>Concept: select from three side-by-side (static) options
                Make a selection, save selection (maybe to state) -done
            </p>
            <div className="card-container" style={{display: "flex", justifyContent: "space-evenly"}}>
                <div 
                    id="solo" 
                    style={{
                        display: "grid", 
                        width: "100%", 
                        backgroundColor: "tan",
                        height: "50vh"
                    }}
                >
                    <img alt="forgot the img"></img>
                    <button onClick={() => dynamicTypeHandler("solo")}>Solo Card</button>
                </div>
                <div 
                    id="pair" 
                    style={{
                        display: "grid", 
                        width: "100%", 
                        backgroundColor: "teal",
                        height: "50vh"
                    }}
                >
                    <img alt="forgot the img"></img>
                    <button onClick={() => dynamicTypeHandler("pair")}>Pair Card</button>
                </div>
                <div 
                    id="group" 
                    style={{
                        display: "grid", 
                        width: "100%", 
                        backgroundColor: "tomato",
                        height: "50vh"
                    }}
                >
                    <img alt="forgot the img"></img>
                    <button onClick={() => dynamicTypeHandler("group")}>Group Card</button>
                </div>
            </div>
        </div>
    )
}
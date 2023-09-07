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
            <button id="solo" onClick={() => dynamicTypeHandler("solo")}>Solo</button>
            <button id="pair" onClick={() => dynamicTypeHandler("pair")}>Pair</button>
            <button id="group" onClick={() => dynamicTypeHandler("group")}>Group</button>
        </div>
    )
}
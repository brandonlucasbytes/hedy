import { useState } from "react";

export default function GroupDynamic({updateCurrentState}) {
    const [groupDynamicCard, setGroupDynamicCard] = useState(null); // pair/group

    function groupDynamicCardHandler(selectedGroupDynamicCard){
        if(groupDynamicCard !== selectedGroupDynamicCard) {
            setGroupDynamicCard(selectedGroupDynamicCard);
            console.log(selectedGroupDynamicCard);
        }

        if(selectedGroupDynamicCard){
            updateCurrentState("userInput");
        }
    }

    return (
        <div className="group-dynamic-select-screen">
            <h2>Machine Screen 2 - Group</h2>
            <p>Concept: fetch groups from backend, get a deck of cards, select a card (onClick)
                Array of objects + React
            </p>
            <button onClick={() => { updateCurrentState("dynamicType") }}>Back</button>
            <div
                className="group-dynamic-card"
                id="1"
                onClick={() => groupDynamicCardHandler("1")}>[Group Dynamic 1]</div>
            <div
                className="group-dynamic-card"
                id="2"
                onClick={() => groupDynamicCardHandler("2")}>[Group Dynamic 2]</div>
            <div
                className="group-dynamic-card"
                id="#"
                onClick={() => groupDynamicCardHandler("#")}>[Group Dynamic #]</div>
        </div>
    )
}
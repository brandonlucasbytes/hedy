import { useState } from "react";
import PropTypes from "prop-types";

PairDynamic.propTypes = {
    updateCurrentState: PropTypes.func,
    pairCards: PropTypes.array,
}

export default function PairDynamic({ updateCurrentState, pairCards }) {
    const [pairDynamicCard, setPairDynamicCard] = useState(null); // pair/group

    function pairDynamicCardHandler(selectedPairDynamicCard){
        if(pairDynamicCard !== selectedPairDynamicCard) {
            setPairDynamicCard(selectedPairDynamicCard);
            console.log(selectedPairDynamicCard);
        }

        if(selectedPairDynamicCard){
            updateCurrentState("userInput");
        }
    }

    return (
        <>
        <div className="pair-dynamic-select-screen">
            <h2>Machine Screen 2 - Pair</h2>
            <p>Concept: fetch pairs from backend, get a deck of cards, select a card (onClick)
                Array of objects + React
            </p>
            <button onClick={() => { updateCurrentState("dynamicType") }}>Back</button>
            <div
                className="pair-dynamic-card"
                id="1"
                onClick={() => pairDynamicCardHandler("1")}>[Pair Dynamic 1]</div>
            <div
                className="pair-dynamic-card"
                id="2"
                onClick={() => pairDynamicCardHandler("2")}>[Pair Dynamic 2]</div>
            <div
                className="pair-dynamic-card"
                id="#"
                onClick={() => pairDynamicCardHandler("#")}>[Pair Dynamic #]</div>
        </div>
        {pairCards.length > 0 && pairCards.map((card) => {
            return (
                <div key={card._id}>
                    <p>{card.conflicts}</p>
                </div>
            )
        })}
        </>
    )
}
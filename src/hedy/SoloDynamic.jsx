import { useState } from "react";

export default function SoloDynamic({ updateCurrentState }) {
    const [characterCard, setCharacterCard] = useState(null); // solo

    function characterCardHandler(selectedCharacterCard) {
        if (characterCard !== selectedCharacterCard) {
            setCharacterCard(selectedCharacterCard);
            console.log(selectedCharacterCard);
        }

        if (selectedCharacterCard) {
            updateCurrentState("userInput");
        }
    }

    return (
        <div className="character-select-screen">
            <h2>Machine Screen 2 - Solo</h2>
            <p>Concept: fetch characters from backend, get a deck of cards, select a card (onClick)
                Array of objects + React
            </p>
            <button onClick={() => { updateCurrentState("dynamicType") }}>Back</button>
            <div
                className="character-card"
                id="1"
                onClick={() => characterCardHandler("1")}>[Character 1]</div>
            <div className="character-card"
                id="2"
                onClick={() => characterCardHandler("2")}>[Character 2]</div>
            <div className="character-card"
                id="#"
                onClick={() => characterCardHandler("#")}>[Character #]</div>
        </div>
    )
}
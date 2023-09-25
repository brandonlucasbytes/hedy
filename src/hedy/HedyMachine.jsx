import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DynamicType from "./DynamicType.jsx";
import SoloDynamic from "./SoloDynamic.jsx";
import PairDynamic from "./PairDynamic.jsx";
import GroupDynamic from "./GroupDynamic.jsx";
import ScenarioInput from "./ScenarioInput.jsx";
import DisplayScenario from "./DisplayScenario.jsx";
import TestComponents from "./TestComponents.jsx";

HedyMachine.propTypes = {
    allCards: PropTypes.array,
    currentThreadData: PropTypes.object
}

export default function HedyMachine({ allCards, currentThreadData }) {
    var userSubmit;
    const [currentState, setCurrentState] = useState("");
    const [threadResponses, setThreadResponses] = useState([]);

    useEffect(() => {
        if (threadResponses.length === 0) {
            updateCurrentState("dynamicType");
        }
        else {
            updateCurrentState("displayScenario");
        }
    }, [])

    function updateCurrentState(state) {
        setCurrentState(state);
    }

    return (
        <>
            {allCards[0].length > 0 && allCards[0].map((card) => {
                return (
                    <div key={card._id}>
                        <p>{card.name}</p>
                    </div>
                )
            })}

            {allCards[1].length > 0 && allCards[1].map((card1) => {
                return (
                    <div key={card1._id}>
                        <p>{card1.conflicts}</p>
                    </div>
                )
            })}

            {allCards[2].length > 0 && allCards[2].map((card2) => {
                return (
                    <div key={card2._id}>
                        <p>{card2.conflicts}</p>
                    </div>
                )
            })}

            <div className="hedy-thread-container">
                <p>
                    Concept: This container walks the user through each screen of the Hedy machine.
                    - Stack to keep track of each screen choice.
                    - Appending choice to chatGPT response where appropriate.
                </p>
                <button onClick={() => { console.log(currentState) }}>Check State</button>

                <br />
                {/** Dynamic */}
                {currentState === "dynamicType" &&
                    <DynamicType updateCurrentState={updateCurrentState} />
                }

                {currentState === "solo" &&
                    <SoloDynamic updateCurrentState={updateCurrentState} />
                }
                {currentState === "pair" &&
                    <PairDynamic updateCurrentState={updateCurrentState} />
                }
                {currentState === "group" &&
                    <GroupDynamic updateCurrentState={updateCurrentState} />
                }

                <ScenarioInput updateCurrentState={updateCurrentState} />

                {currentState === "displayScenario" &&
                    <DisplayScenario updateCurrentState={updateCurrentState} />
                }

                {currentState === "loading" &&
                    <div className="loading">
                        <h2>Machine Screen - Loading</h2>
                        <p>Concept: loading and conditional rendering</p>
                        <p>loading component...</p>
                    </div>
                }
            </div>
        </>
    )
}
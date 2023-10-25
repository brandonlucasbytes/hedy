import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import DynamicType from "./DynamicType.jsx";
import SoloDynamic from "./SoloDynamic.jsx";
import PairDynamic from "./PairDynamic.jsx";
import GroupDynamic from "./GroupDynamic.jsx";
import ScenarioInput from "./ScenarioInput.jsx";
import DisplayScenario from "./DisplayScenario.jsx";
import TestComponents from "./TestComponents.jsx";
import HedyInteraction from "./views/HedyInteraction.jsx";

HedyMachine.propTypes = {
    allCards: PropTypes.array,
    currentThreadData: PropTypes.object
}

const ai_uri = "http://localhost:5000/api/ai";

export default function HedyMachine({ allCards, currentThreadData }) {
    const [currentState, setCurrentState] = useState("");
    const [threadResponses, setThreadResponses] = useState([]);
    // currentThreadData contains: selected dynamic, selected card, message history, and message summary

    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const abort = new AbortController();
        // const signal = abort.signal;

        const prompt = { thisDynamic: "dynamic", thisCard: "card", input };

        console.log(prompt);

        const res = await fetch(ai_uri, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(prompt)
        });
        const data = await res.json();
        setResponse(data.message);
        console.log(data.message);
    }

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
            <div className="hedy-thread-container">
                <p>
                    Concept: This container walks the user through each screen of the Hedy machine.
                    - Stack to keep track of each screen choice.
                    - Appending choice to chatGPT response where appropriate.
                </p>
                <button onClick={() => { console.log(currentState) }}>Check State</button>

                <div className="userinput">
                    <h2>User Input</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Prompt</label>
                        <input
                            type="text"
                            required
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button>Submit user input</button>
                        <p>{input}</p>
                        <p>{response}</p>
                    </form>
                </div>

                <br />
                {/** Dynamic */}
                {currentState === "dynamicType" &&
                    <DynamicType updateCurrentState={updateCurrentState} />
                }

                {/** Card */}
                {currentState === "solo" &&
                    <SoloDynamic
                        updateCurrentState={updateCurrentState}
                        soloCards={allCards[0]} />
                }
                {currentState === "pair" &&
                    <PairDynamic
                        updateCurrentState={updateCurrentState}
                        pairCards={allCards[1]} />
                }
                {currentState === "group" &&
                    <GroupDynamic
                        updateCurrentState={updateCurrentState}
                        groupCards={allCards[2]} />
                }

                {/** Messages */}
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
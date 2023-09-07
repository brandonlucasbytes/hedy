import { useState, useEffect } from "react";
import DynamicType from "./DynamicType.jsx";
import SoloDynamic from "./SoloDynamic.jsx";
import PairDynamic from "./PairDynamic.jsx";
import GroupDynamic from "./GroupDynamic.jsx";
import ScenarioInput from "./ScenarioInput.jsx";
import DisplayScenario from "./DisplayScenario.jsx";
import TestComponents from "./TestComponents.jsx";

export default function HedyMachine() {
    var userSubmit;
    const [currentState, setCurrentState] = useState("");
    const [threadResponses, setThreadResponses] = useState([]);

    useEffect(() => {
        if(threadResponses.length === 0){
            updateCurrentState("dynamicType");
        }
        else{
            updateCurrentState("displayScenario");
        }
    }, [])

    function updateCurrentState(state){
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
                <button onClick={() => {console.log(currentState)}}>Check State</button>

                <br />
                {currentState === "dynamicType" &&
                    <DynamicType updateCurrentState={updateCurrentState}/>
                }
                
                {currentState === "solo" && 
                    <SoloDynamic updateCurrentState={updateCurrentState}/>
                }
                {currentState === "pair" && 
                    <PairDynamic updateCurrentState={updateCurrentState}/>
                }
                {currentState === "group" && 
                    <GroupDynamic updateCurrentState={updateCurrentState}/>
                }

                {currentState === "userInput" &&
                    <ScenarioInput updateCurrentState={updateCurrentState}/>
                }

                {currentState === "displayScenario" &&
                    <DisplayScenario updateCurrentState={updateCurrentState}/>
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
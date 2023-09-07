export default function ScenarioInput({updateCurrentState}) {
    function userSubmitHandler(){
        // set user input to variable and send request
        // note: replace current loading jsx with an actual loader
        updateCurrentState("loading");

        setTimeout(() => {
            updateCurrentState("displayScenario");
        }, 2000);
    }

    return (
        <div className="user-input">
            <h2>Machine Screen 3 - User input</h2>
            <p>Concept: user input for 1 field</p>

            <button onClick={() => { updateCurrentState("dynamicType") }}>Back</button>
            <p> <b>This is where state stack comes into play, the back button can only
                work properly if it goes back to the correct card-select screen </b> </p>

            <p> [Selected character/dynamic card here] </p>
            <input
                defaultValue="Scenario" />
            <button
                onClick={() => userSubmitHandler()}>Submit</button>
        </div>
    )
}
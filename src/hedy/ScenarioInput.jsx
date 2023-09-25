export default function ScenarioInput({updateCurrentState}) {
    async function submitHandler(){
        // set user input to variable and send request
        // note: replace current loading jsx with an actual loader
        updateCurrentState("loading");

        const response = await fetch("http://localhost:5000/api/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "message": "hello from the frontend"
            })
        }).then(res => res.json());

        console.log(response);

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
                onClick={() => submitHandler()}>Submit</button>
        </div>
    )
}
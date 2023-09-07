export default function DisplayScenario({updateCurrentState}) {
    return (
        <div className="display-text">
            <h2>Machine Screen 4 - Display text</h2>
            <p>Concept: display a string (css), allow save to local storage</p>
            <button onClick={() => { updateCurrentState("userInput") }}>Back</button>
            <p>*thread history*</p>

            <p>display newest prompt response</p>
        </div>
    )
}
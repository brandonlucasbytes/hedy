import { useState, useEffect } from 'react'
import './sidebar.scss'

function Sidebar({ 
    hedyMachines, 
    selectedHedyMachine,
    selectHedyMachine, 
    createHedyMachine, 
    cloneHedyMachine,
    deleteHedyMachine
}) {
    // display hedyMachines in reverse
    const [hedyMachinesReversed, setHedyMachinesReversed] = useState([]);
    
    useEffect(() => {
        setHedyMachinesReversed([...hedyMachines].reverse());
    }, [hedyMachines]);

    return (
        <div className="hedy-sidebar">
            <div className="sidebar-header">
                <h2>Collection</h2>
                <button onClick={createHedyMachine}>New Chat</button>
            </div>
            <ul className="hedy-list">
                {(hedyMachinesReversed.length >= 0) ? (hedyMachinesReversed.map((object, index) => (
                    <li
                        key={index}
                        className={
                            (index === (hedyMachinesReversed.length-1 - selectedHedyMachine)) ? 
                            "hedy-list-item selected" 
                            : 
                            "hedy-list-item"
                        }
                        onClick={() => selectHedyMachine((hedyMachinesReversed.length - 1) - index)}
                    >
                        <img src={object.dynamic ? 
                            `/images/${object.dynamic}.png` : 
                            `/wireframe-box.png`
                            } 
                            alt="" 
                        />
                        <p style={{ fontFamily: 'Arial' }}>{object.dynamic ? object.card.name : "Choose a dynamic"}</p>
                        {/* <p style={{ fontFamily: 'Arial' }}>Hedy Machine short summary goes here... {object.summary}</p> */}
                        {/* <div className="actions">
                            <button 
                            onClick={() => 
                                cloneHedyMachine(
                                    structuredClone(
                                        hedyMachines[(hedyMachinesReversed.length - 1) - index]
                                    )
                                )
                            }
                            >
                                Clone
                            </button>
                            <button 
                            onClick = {() =>
                                deleteHedyMachine((hedyMachinesReversed.length - 1) - index)
                            }
                            >
                                Delete
                            </button>
                        </div> */}
                    </li>
                ))) : (
                    <p>Start a new chat.</p>
                )}
            </ul>
        </div>
    )
}

export default Sidebar

/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import DynamicView from '../views/DynamicView';
import CardView from '../views/CardView';
import InteractionView from '../views/InteractionView';
import { useTheme } from '@mui/material/styles';
import './hedy-machine.scss'

function HedyMachine({
    cards,
    hedyMachineData,
    selectedHedyMachine,
    updateHedyMachine
}) {
    // dynamic data
    const [dynamic, setDynamic] = useState("");

    // card data
    const [card, setCard] = useState({});
    const [currentCards, setCurrentCards] = useState([]);

    // interaction data
    const [messages, setMessages] = useState([]);
    const [summary, setSummary] = useState("");
    const [currentView, setCurrentView] = useState("dynamics");

    const theme = useTheme();

    function thisMachineIsEmpty() {
        return (
            (hedyMachineData.dynamic === "") &&
            (Object.keys(hedyMachineData.card).length === 0) &&
            (!(hedyMachineData.messages.length > 0))
        )
    }

    // load HedyMachine states with data from hedyMachineData
    useEffect(() => {
        setDynamic(hedyMachineData.dynamic);
        setCard(hedyMachineData.card);
        setMessages(hedyMachineData.messages);
        setSummary(hedyMachineData.summary);
        setCurrentView(hedyMachineData.currentView);
    }, [selectedHedyMachine]);

    // load currentCards with cards that match dynamic
    useEffect(() => {
        if (dynamic !== "") {
            switch (dynamic) {
                case "solo":
                    setCurrentCards(cards[0]);
                    break;
                case "pair":
                    setCurrentCards(cards[1]);
                    break;
                case "group":
                    setCurrentCards(cards[2]);
                    break;
            }
        }
    }, [dynamic, cards]);

    // update hedyMachineData with HedyMachine states when they change
    useEffect(() => {
        updateHedyMachine({
            dynamic: dynamic,
            card: card,
            messages: messages,
            summary: summary,
            currentView: currentView,
        });
    }, [dynamic, card, messages, summary, currentView]);

    return (
        <div className="hedy-machine">
            {/* <div style={{
                color: theme.palette.primary.main,
                fontFamily: 'Terminator',
                fontSize: "0.5em"
            }}>
                Hedy Machine component
            </div> */}
            {/* <h2>Hedy Machine {selectedHedyMachine}</h2>
            {!thisMachineIsEmpty() ? (
                <div>
                    <p>Display dynamic: {dynamic && dynamic}</p>
                    <p>Display card: {card._id && card._id}</p>
                    <div>Display messages: {messages.length > 0 && messages.map((message, index) => {
                        return (
                            <div key={index}>
                                <p>{message.role}</p>
                                <p>{message.content}</p>
                                <br />
                            </div>
                        )
                    })}</div>
                    <p>Display summary: {summary && summary}</p>
                </div>
            ) : (
                <p>No data found.</p>
            )} */}

            {(currentView === "dynamics") && 
                <DynamicView
                    dynamic={dynamic}
                    setDynamic={setDynamic}
                    setCurrentView={setCurrentView}
                />
            }

            {(currentView === "cards") && 
                <CardView
                    dynamic={dynamic}
                    currentCards={currentCards}
                    card={card}
                    setCard={setCard}
                    setCurrentView={setCurrentView}
                />
            }

            {(currentView === "interaction") && 
                <InteractionView
                    data={hedyMachineData}
                    setMessages={setMessages}
                    setSummary={setSummary}
                    setCurrentView={setCurrentView}
                />
            }
        </div>
    )
}

/**
    Note: 
        After selection, allow user to go back to this view.
        Maybe also have a Next button.
    Conditions for dynamics view:
        (hedyMachineData.dynamic === "") 

    {(currentView === "dynamics") &&
                <DynamicView
                    dynamic={dynamic}
                    setDynamic={setDynamic}
                    setCurrentView={setCurrentView}
                />
            }
 */

/**
    Note: 
        After selection, still allow user to go back to dynamics view.
        Maybe also have a Next button.
    Conditions for cards view:
        (hedyMachineData.dynamic !== "")
        
    {(currentView === "cards") &&
                <CardView
                    dynamic={dynamic}
                    card={card}
                    setCard={setCard}
                    setCurrentView={setCurrentView}
                />
            }
 */

/**
    Note: 
        Also, after sending a message, don't allow user to go back to previous views.
        Maybe have a Back button to go back to card view. Again, only if no messages.
    Conditions for messages view:
        (hedyMachineData.dynamic !== "") &&
                    (Object.keys(hedyMachineData.card).length > 0)) &&

    {(currentView === "messages") &&
                <InteractionView
                    dynamic={dynamic}
                    card={card}
                    messages={messages}
                    summary={summary}
                    setMessages={setMessages}
                    setSummary={setSummary}
                    setCurrentView={setCurrentView}
                />
            }
 */

export default HedyMachine
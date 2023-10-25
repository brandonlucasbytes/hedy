// This component comes after a dynamic has been selected and a card has been selected.
/**
 * Requirements:
 * data: all messages, messages summary, user input, selected dynamic, selected card
 * functions: write message, send message to backend AI endpoint, update Hedy state(s)
 */

import { useEffect, useState } from "react";
import PropTypes from "prop-types";

/**
 * 
 * @returns 
 */

export default function HedyInteraction({ selectedDynamic, selectedCard, messagesHistory, messagesSummary }) {
    // all messages array
    const [messages, setMessages] = useState([]);
    // message summary string
    const [summary, setSummary] = useState("");
    // user input string
    const [userInput, setUserInput] = useState("");

    // load messagesHistory into messages
    // load messagesSummary into summary
    useEffect(() => {
        if (messagesHistory.length > 0 && messages.length === 0) {
            setMessages(messagesHistory);
        }

        if (messagesSummary.length > 0 && summary.length === 0) {
            setSummary(messagesSummary);
        }
    }, []);

    // update messagesHistory when a new message is added to messages
    // update messagesSummary when summary is updated
    useEffect(() => {

    }, [messages, summary]);

    return (
        <>
            <p>array of message history</p>
            <p>user input field + button</p>
        </>
    )
}

HedyInteraction.propTypes = {
    selectedDynamic: PropTypes.string,
    selectedCard: PropTypes.object,
    messagesHistory: PropTypes.array,
    messagesSummary: PropTypes.string
}
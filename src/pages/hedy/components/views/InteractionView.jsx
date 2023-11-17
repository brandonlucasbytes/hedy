import { useEffect, useState } from 'react';
import "./styles/interaction-view.scss";
import { Button } from '@mui/material';

const ai_uri = "http://localhost:5000/api/ai";

function InteractionView({
  data,
  setMessages,
  setSummary
}) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("Interaction");
  const rules = `Rules:
  A. Required: 
  1. 250 words exchanged overall between characters ( ~1-2 minutes) in a conversation.
  2. Only output verbal and non-verbal communication, write for as long as possible.
  3. If any card is in the prompt, treat the card(s) as a source of truth.
  
  B. Tips:
  1. Show don’t tell.
  2. Something must change, can be small or big.
  3. The environment should affect the mind state or the conversation itself, or it should reflect the interaction in some way.
  
  C. Only one of the following:
  1. A reveal (to each other, themselves, or the audience) 
  2. A twist
  `;

  const { dynamic, card, messages, summary } = data;

  useEffect(() => {
    const messageContainer = document.getElementById('messages-scroll');
    messageContainer.scrollTop = messageContainer.scrollHeight;

    if (messages.length > 2) { setTitle("") }
  }, [messages, loading]);

  function handleInput(e) {
    setInput(e.target.value);
  }

  function setPrompt(prompt) {
    if (dynamic === "solo") {
      prompt.card = JSON.stringify(card);
    }

    if (messages.length > 0) {
      prompt.messages = JSON.stringify(messages);
    }

    if (messages.length % 5 === 0) {
      if (dynamic === "pair" || dynamic === "group") {
        prompt.card = card;
        prompt.card.sub_cards = card.sub_cards ? (JSON.stringify(prompt.card.sub_cards)) : ('');
      }
    }

    if (messages.length > 4) {
      prompt.messages = [...messages.slice(0, 2), ...messages.slice(messages.length - 4, messages.length)];
      // if (messages.length % 3 === 0) {
      //   setSummary(`new summary: ${prompt.content}`);
      // }
      // if (summary !== "") {
      //   prompt.summary = summary;
      // }
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    /* 
    const abort = new AbortController();
    const signal = abort.signal;
    **/
    let inputText = input;

    let prompt = {
      content: inputText,
      dynamic: dynamic,
    };

    setPrompt(prompt);
    // console.log(prompt);

    try {
      setLoading(true);

      const res = await fetch(ai_uri, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prompt)
      });

      const data = await res.json();

      // console.log(data);

      setMessages(prev => [...prev, { role: "user", content: inputText }]);
      setMessages(prev => [...prev, { role: data.role, content: data.content }]);
      setInput("");
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="interaction-view">
      {(title === "Interaction") && <h1>{title}</h1>}
      <div className="interaction-messages-container">
        <div
          className="interaction-messages-inner-container"
          id="messages-scroll"
        >
          <div className="interaction-messages">
            {messages.length > 0 && messages.map((message, index) => {
              return (
                <div className={`${message.role}-message`} key={index}>
                  <p className="role">{message.role}</p>
                  <p className="content">{message.content}</p>
                  {/* <div className="actions">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div> */}
                </div>
              )
            })}
          </div>
          {loading && (
            <div className="loading">
              <h2>Loading...</h2>
            </div>
          )}
        </div>
      </div>
      <div className="user-input">
        <form onSubmit={handleSubmit}>
          <textarea
            type="text"
            required
            value={input}
            onChange={handleInput}
            placeholder="Write a prompt here."
          />
          {loading ?
            (<Button
              type="submit"
              variant="contained"
              size="small"
              disabled
            >
              Submit
            </Button>)
            :
            (<Button
              type="submit"
              variant="contained"
              size="small"
            >
              Submit
            </Button>)
          }
        </form>
      </div>
    </div>
  )
}

export default InteractionView
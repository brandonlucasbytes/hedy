import { useState, useEffect } from "react";
import HedyMachine from "../hedy/HedyMachine.jsx";

// route to backend
const uri = "http://localhost:5000/api/dynamics";

function Hedy() {
  /* 
    all hedyThreads populate the sidebar,
    the currentThread is displayed in the machine
  **/
  const [hedyThreads, setHedyThreads] = useState([]);
  const [currentThread, setCurrentThread] = useState({});
  const [currentThreadData, setCurrentThreadData] = useState({
    "dynamicType": "",
    "card": {},
    "messageHistory": []
  });

  // load all cards on the page level, pass down to threads as needed
  const [soloCards, setSoloCards] = useState([]);
  const [pairCards, setPairCards] = useState([]);
  const [groupCards, setGroupCards] = useState([]);
  const allCards = [soloCards, pairCards, groupCards];

  // dynamically import all images
  const [images, setImages] = useState([]);

  // Get all cards from database
  useEffect(() => {
    async function fetchCards(endpoint, setterFunction) {
      try {
        const response = await fetch(`${uri}/${endpoint}`);
        const data = await response.json();
        setterFunction(data);
      }
      catch (error) {
        console.log(error);
      }
    }

    fetchCards("individuals", setSoloCards);
    fetchCards("pairs", setPairCards);
    fetchCards("groups", setGroupCards);
  }, []);

  return (
    <>
      <h1>Hedy heading (if any)</h1>

      <aside className="hedy-thread-select-sidebar">thread-select-sidebar</aside>

      <HedyMachine
        allCards={allCards}
        currentThreadData={currentThreadData}
      />
    </>
  )
}

export default Hedy;
import { useState, useEffect } from "react";
import HedyMachine from "../hedy/HedyMachine.jsx";

const uri = "http://localhost:5000/api/dynamics";

function Hedy() {
  const [hedyThreads, setHedyThreads] = useState([]);
  const [currentThread, setCurrentThread] = useState({});
  const currentThreadData = {
    "dynamicType": "",
    "card": {},
    "messageHistory": []
  };
  
  const [soloCards, setSoloCards] = useState([]);
  const [pairCards, setPairCards] = useState([]);
  const [groupCards, setGroupCards] = useState([]);
  const allCards = [soloCards, pairCards, groupCards];

  const [soloImages, setSoloImages] = useState([]);
  const [pairImages, setPairImages] = useState([]);
  const [groupImages, setGroupImages] = useState([]);

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
  // const array = [{id: 12345, content: "image1"}, {id: 8495, content: "image2"}, {id: 223409, content: "image3"}];

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
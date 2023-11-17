import { useState, useEffect } from 'react';
import Sidebar from './components/sidebar/Sidebar.jsx';
import HedyMachine from './components/hedy-machine/HedyMachine.jsx';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import './hedy.scss';
import { theme } from './styles/theme.js';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const dynamics_uri = "http://localhost:5000/api/dynamics";
const LOCAL_STORAGE_KEY = "hedyMachines";

function Hedy() {
    const defaultHedyMachine = {
        dynamic: "",
        card: {},
        messages: [],
        summary: "",
        currentView: "dynamics",
    };

    // array of HedyMachine data objects
    const [hedyMachines, setHedyMachines] = useState(() => {
        const storedHedyMachines = localStorage.getItem(LOCAL_STORAGE_KEY);
        return storedHedyMachines !== null ? JSON.parse(storedHedyMachines) : [defaultHedyMachine];
    });
    // current selected index of array
    const [selectedHedyMachine, setSelectedHedyMachine] = useState(0);
    // array of card data objects
    const [cards, setCards] = useState([]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // on page load, load the following with data:
    // hedyMachines array - persist user data
    useEffect(() => {
        function loadHedyMachines() {
            const storedHedyMachines = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (storedHedyMachines !== null) {
                setHedyMachines(JSON.parse(storedHedyMachines));
            }
        }

        loadHedyMachines();

        async function fetchCards(endpoint) {
            try {
                const response = await fetch(`${dynamics_uri}/${endpoint}`);
                const data = await response.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }

        async function loadCards() {
            try {
                const soloCards = fetchCards("individuals");
                const pairCards = fetchCards("pairs");
                const groupCards = fetchCards("groups");
                Promise.all([soloCards, pairCards, groupCards])
                    .then((values) => { setCards(values) });
            }
            catch (error) {
                console.log(error);
            }
        }

        loadCards();
    }, []);

    function saveToLocalStorage(data) {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }

    function createHedyMachine() {
        const recentHedyMachine = hedyMachines[hedyMachines.length - 1];
        if (
            recentHedyMachine.dynamic !== "" &&
            recentHedyMachine.card._id
            // && recentHedyMachine.messages.length > 0
        ) {
            const newHedyMachineData = {
                dynamic: "",
                card: {},
                messages: [],
                summary: "",
                currentView: "dynamics",
            };

            const updatedHedyMachines = [...hedyMachines, newHedyMachineData];
            setHedyMachines(updatedHedyMachines);
            setSelectedHedyMachine(updatedHedyMachines.length - 1);
            saveToLocalStorage(updatedHedyMachines);
        }
    }

    function cloneHedyMachine(data) {
        if (
            (data.dynamic !== "" || data.dynamic == undefined) &&
            data.card._id &&
            data.messages.length > 0 &&
            data.summary !== ""
        ) {
            setHedyMachines([...hedyMachines, {
                dynamic: data.dynamic,
                card: data.card,
                messages: data.messages,
                summary: data.summary,
                currentView: data.currentView,
            }]);
            setSelectedHedyMachine(hedyMachines.length);
        }
        console.log(data);
    }

    function deleteHedyMachine(index) {
        if (hedyMachines.length > 1) {
            const updatedHedyMachines = [...hedyMachines];
            updatedHedyMachines.splice(index, 1); // Remove the Hedy Machine at the specified index
            setHedyMachines(updatedHedyMachines);

            // Adjust the selected index to stay within bounds after deletion
            const newIndex = Math.min(index, updatedHedyMachines.length - 1);
            setSelectedHedyMachine(newIndex);
        }
        else {
            setHedyMachines([defaultHedyMachine]);
        }
    }

    // later: on changes, preserve user data in local storage
    function updateHedyMachine(data) {
        const updatedHedyMachines = [...hedyMachines];
        updatedHedyMachines[selectedHedyMachine] = data;
        setHedyMachines(updatedHedyMachines);
        saveToLocalStorage(updatedHedyMachines);
        // console.log("Sublime");
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={`hedy ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
                    <aside className={`hedy-sidebar-container ${isSidebarOpen ? '' : 'closed'}`}>
                        <Sidebar
                            hedyMachines={hedyMachines}
                            selectedHedyMachine={selectedHedyMachine}
                            selectHedyMachine={setSelectedHedyMachine}
                            createHedyMachine={createHedyMachine}
                            cloneHedyMachine={cloneHedyMachine}
                            deleteHedyMachine={deleteHedyMachine}
                        />
                    </aside>
                    <span className={`chevron-wrapper ${isSidebarOpen ? '' : 'closed'}`} onClick={toggleSidebar}>
                        {isSidebarOpen ?
                            (<ChevronLeft style={{ width: "30px", height: "30px" }} />)
                            :
                            (<ChevronRight style={{ width: "30px", height: "30px" }} />)
                        }
                    </span>
                    <main className="hedy-machine-container">
                        <HedyMachine
                            cards={cards}
                            hedyMachineData={hedyMachines[selectedHedyMachine]}
                            selectedHedyMachine={selectedHedyMachine}
                            updateHedyMachine={updateHedyMachine}
                        />
                    </main>
                </div>
            </ThemeProvider>
        </>
    )
}

export default Hedy;
import {
    Accordion,
    AccordionDetails,
    AccordionSummary
} from '@mui/material'

function Question({ question, answer }) {
    return (
        <Accordion sx={{
            borderRadius: "5px",
            width: "100%",
        }}>
            <AccordionSummary sx={{
                minHeight: "2vw",
                width: "100%"
            }}>
                <h2 style={{
                    color: "black",
                    fontSize: '1em',
                }}>
                    {question}
                </h2>
            </AccordionSummary>
            <AccordionDetails>
                <p>{answer}</p>
            </AccordionDetails>
        </Accordion>
    )
}

export default Question
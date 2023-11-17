/* eslint-disable react/prop-types */
import {
  Card,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useMemo } from 'react';
import './styles/card-view.scss'

function CardView({
  currentCards,
  dynamic,
  card,
  setCard,
  setCurrentView
}) {
  const theme = useTheme();
  const selectedCardId = useMemo(() => card._id, [card]);

  function renderCards(currentCards, setCard) {
    if (dynamic === 'solo') {
      return currentCards.map((cardItem) => (
        <Card
          className={cardItem._id === selectedCardId ? "card selected" : "card"}
          key={cardItem._id}
          sx={{ borderRadius: "20px" }}
          onClick={() => setCard(cardItem)}>
          <h2 style={{
            color: theme.palette.primary.main
          }}>{cardItem.name}</h2>
          <div className="card-info">
            <p>Origin: {cardItem.origin}</p>
            <p>Personality: {cardItem.personality}</p>
            <p>Psychology: {cardItem.psychology}</p>
            <p>Social Life: {cardItem.social_life}</p>
          </div>
        </Card>
      ));
    }
    else if (dynamic === 'pair' || dynamic === 'group') {
      return currentCards.map((cardItem) => (
        <Card
          className={cardItem._id === selectedCardId ? "card selected" : "card"}
          key={cardItem._id}
          sx={{ borderRadius: "20px" }}
          onClick={() => setCard(cardItem)}>
          <h2 style={{
            color: theme.palette.primary.main
          }}><i>{cardItem.name}</i></h2>
          <div className="card-info">
            <p><i>Relationship Type: {cardItem.relationship_type}</i></p>
            <p>Conflicts: {cardItem.conflicts}</p>
            <p>Shared Goals: {cardItem.shared_goals}</p>
          </div>

          <div className="sub-cards">
            {cardItem.sub_cards && cardItem.sub_cards.map((sub_card, index) => (
              <Accordion
                className="sub-card"
                key={index}
                sx={{
                  border: "0.5px solid white",
                  borderRadius: "5px"
                }}
                onClick={() => setCard(cardItem)}>
                <AccordionSummary sx={{
                  backgroundColor: 'black',
                  height: '5em',
                  borderRadius: "5px"
                }}>
                  <h2 style={{
                    color: theme.palette.secondary.main,
                    fontSize: '1em',
                  }}>
                    {sub_card.name}
                  </h2>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="card-info">
                    {sub_card.origin && <p>Origin: {sub_card.origin}</p>}
                    <p>Personality: {sub_card.personality}</p>
                    <p>Psychology: {sub_card.psychology}</p>
                    <p>Social Life: {sub_card.social_life}</p>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Card>
      ));
    }
  }

  return (
    <div className="card-view">
      <h2 className="card-title-view">Select a {dynamic} card</h2>
      <div className="cards-container">
        {currentCards && (dynamic === 'solo') && (
          <div className="solo-cards">{renderCards(currentCards, setCard)}</div>
        )}
        {currentCards && (dynamic === 'pair') && (
          <div className="pair-cards">{renderCards(currentCards, setCard)}</div>
        )}
        {currentCards && (dynamic === 'group') && (
          <div className="group-cards">{renderCards(currentCards, setCard)}</div>
        )}
      </div>
      <div className="change-views">
        <Button
          variant="contained"
          size="medium"
          style={{ margin: "5px 5px 0px 0px", position: "sticky" }}
          onClick={() => setCurrentView("dynamics")}
        >
          Back
        </Button>
        {(card._id === undefined) ? (<Button
          variant="contained"
          size="medium"
          style={{ margin: "5px 0px 0px 5px" }}
          onClick={() => setCurrentView("interaction")}
          disabled
        >
          Next
        </Button>) : (
          <Button
            variant="contained"
            size="medium"
            style={{ margin: "5px 0px 0px 5px" }}
            onClick={() => setCurrentView("interaction")}
          >
            Next
          </Button>)
        }
      </div>
    </div>
  )
}

export default CardView
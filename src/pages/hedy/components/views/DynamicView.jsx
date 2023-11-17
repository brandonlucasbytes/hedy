import { 
  Card,
  CardMedia,
  Button
 } from '@mui/material'
 import './styles/dynamic-view.scss'

function DynamicView({ dynamic, setDynamic, setCurrentView }) {
  const isSelected = (type) => dynamic === type ? "selected" : "";

  return (
    <div className="dynamic-view">
      <h2 className="dynamic-title-view">Choose a dynamic</h2>
      <div className="dynamics-container">
        <div className={`dynamic ${isSelected("solo")}`}>
          <Card
            sx={{
              height: "50svh",
              borderRadius: "20px",
            }}
            onClick={() => setDynamic("solo")}
          >
            <CardMedia
              component="img"
              image="/images/solo.png"
            />
            <p style={{ fontFamily: 'Arial', padding: "10px" }}><i>1 person interacts with others</i></p>
          </Card>
          <h2>Solo</h2>
        </div>
        <div className={`dynamic ${isSelected("pair")}`}>
          <Card
            sx={{
              height: "50svh",
              borderRadius: "20px",
            }}
            onClick={() => setDynamic("pair")}
          >
            <CardMedia
              component="img"
              image="/images/pair.png"
            />
            <p style={{ fontFamily: 'Arial', padding: "10px" }}><i>2 people interact with each other or others</i></p>
          </Card>
          <h2>Pair</h2>
        </div>
        <div className={`dynamic ${isSelected("group")}`}>
          <Card
            sx={{
              height: "50svh",
              borderRadius: "20px",
            }}
            onClick={() => setDynamic("group")}
          >
            <CardMedia
              component="img"
              image="/images/group.png"
            />
            <p style={{ fontFamily: 'Arial', padding: "10px" }}><i>Several people interact with each other or others</i></p>
          </Card>
          <h2>Group</h2>
        </div>
      </div>
      <div className="next">
        {(dynamic === "") ? (<Button
          variant="contained"
          size="large"
          disabled>
          Next
        </Button>) : (
          <Button
          variant="contained"
          size="large"
          onClick={() => setCurrentView("cards")}>
          Next
        </Button>
        )}
      </div>
    </div>
  )
}

export default DynamicView

import { Link } from "react-router-dom"
import "./home.scss"

function Home() {

  return (
    <main className="home">
      <section className="hero">
        <h1 className="title">HEDY</h1>
        <h2 className="hook">
          The <span>next</span> step for AI.
        </h2>
      </section>
      <section className="get-started">
        <div className="actions">
          <button className="action learn"><Link to="/browse">Learn More</Link></button>
          <button className="action start"><Link to="/hedy">Get Started</Link></button>
        </div>
      </section>
      <section className="modules-container">
        <div className="modules">
          <div className="module">
            <img src="/images/module-1.jpg" alt="" />
            <div className="module-txt">
              <h3>For the avid</h3>
              <p><i>A personal canvas for your<br />imagination</i></p>
            </div>
          </div>
          <div className="module">
            <img src="/images/module-2.jpg" alt="" />
            <div className="module-txt">
              <h3>For the brilliant</h3>
              <p><i>Explore the subtle</i></p>
            </div>
          </div>
          <div className="module">
            <img src="/images/module-3.jpg" alt="" />
            <div className="module-txt">
              <h3>For the curious</h3>
              <p><i>Gain insight, an answer is waiting</i></p>
            </div>
          </div>
        </div>
      </section>
      <section className="new-features">
        <div className="features-image">
          <img src="/images/new-feature.png" alt="" />
        </div>
        <div className="features-text">
          <p><i>New Feature - Social Dynamics Simulator</i> <br /> Explore diverse interaction dynamics - solo, pair, or group - simulating various scenarios and relationship dynamics for a realistic experience.</p>
          <p><i>New Feature - OpenAI Integration</i> <br /> Engage in AI-powered conversations that evolve based on your input, creating highly realistic interactions for an immersive experience.</p>
        </div>
      </section>
      {/* <footer>
        <h2>
          footer footer footer footer footer footer
          footer footer footer footer footer footer
          footer footer footer footer footer footer
        </h2>
      </footer> */}
    </main>
  )
}

export default Home

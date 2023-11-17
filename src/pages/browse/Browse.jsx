import { hedySamples } from './hedySamples.js'
import './browse.scss'

export default function Browse() {

  return (
    <main className="browse">
      <section className="hero">
        <h1>Browse</h1>
      </section>
      <section className="sample-threads">
        <h2 className="sample-threads-title"><i>Sample Threads</i></h2>
        <div className="sample-thread-container">
          <h2>Imagine</h2>
          <div className="sample-thread-inner">
            <div className="sample-thread">
              {hedySamples[0].messages.length > 0 && hedySamples[0].messages.map((message, index) => {
                return (
                  <div className={`${message.role}-message`} key={index}>
                    { message.role === "user" && <p className="role">{message.role}:</p>}
                    <p className="content">{message.content}</p>
                    <br />
                  </div>
                )
              })}
            </div>
            {/* <div className="actions">
              <button>Read</button>
              <button>Save</button>
            </div> */}
          </div>
          <p className='description'>Dive into vibrant scenarios and explore the endless possibilities of social dynamics!</p>
        </div>
        <div className="sample-thread-container">
          <h2>Explore</h2>
          <div className="sample-thread-inner">
            <div className="sample-thread">
              {hedySamples[1].messages.length > 0 && hedySamples[1].messages.map((message, index) => {
                return (
                  <div className={`${message.role}-message`} key={index}>
                    { message.role === "user" && <p className="role">{message.role}:</p>}
                    <p className="content">{message.content}</p>
                    <br />
                  </div>
                )
              })}
            </div>
            {/* <div className="actions">
              <button>Read</button>
              <button>Save</button>
            </div> */}
          </div>
          <p className='description'>Discover the art of reading between the lines and decoding the subtleties of social interactions.</p>
        </div>
        <div className="sample-thread-container">
          <h2>Ask</h2>
          <div className="sample-thread-inner">
            <div className="sample-thread">
              {hedySamples[2].messages.length > 0 && hedySamples[2].messages.map((message, index) => {
                return (
                  <div className={`${message.role}-message`} key={index}>
                    { message.role === "user" && <p className="role">{message.role}:</p>}
                    <p className="content">{message.content}</p>
                    <br />
                  </div>
                )
              })}
            </div>
            {/* <div className="actions">
              <button>Read</button>
              <button>Save</button>
            </div> */}
          </div>
          <p className='description'>Curious about &apos;what ifs&apos;? Ask anything about social dynamics! Journey through hypotheticals, unlocking insights into the complex world of social interactions.</p>
        </div>
      </section>
      {/* <section className="resources">
        <h2>Resources / Further Reading</h2>
        <div className="resource">
          <p>link1</p>
          <p>description</p>
        </div>
        <div className="resource">
          <p>link2</p>
          <p>description</p>
        </div>
        <div className="resource">
          <p>link3</p>
          <p>description</p>
        </div>
      </section> */}
    </main>
  )
}
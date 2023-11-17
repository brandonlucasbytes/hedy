import "./contact.scss"

export default function Contact() {

  return (
    <main className="contact">
        <h1>Contact</h1>
        <div className="form-container">
          <form>
            <div className="field">
              <h2>Name</h2>
              <input placeholder="Name" />
            </div>
            <div className="field">
              <h2>Email</h2>
              <input placeholder="Email" />
            </div>
            <div className="field">
              <h2>Subject (Optional)</h2>
              <input placeholder="Subject" />
            </div>
            <div className="field">
              <h2>Message</h2>
              <textarea default="Message" placeholder="Message" />
            </div>
            <button>Send</button>
          </form>
        </div>
    </main>
  )
}
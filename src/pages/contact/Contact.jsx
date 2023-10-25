export default function Contact() {

  return (
    <main className="contact">
      <h2>Contact Form</h2>
      <div className="form-container">
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Subject (Optional)"></input>
          <textarea default="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </main>
  )
}
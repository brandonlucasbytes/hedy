export default function Contact() {
  
  return (
    <>
      <header>
        <h1>Contact heading</h1>
      </header>

      <main>
        <h2>Contact Form heading</h2>
        <form>
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <input placeholder="Subject (Optional)"></input>
          <textarea default="Message"></textarea>
          <button>Send</button>
        </form>
      </main>
    </>
  )
}
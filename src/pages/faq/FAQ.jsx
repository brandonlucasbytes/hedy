import Question from './Question.jsx'
import './faq.scss'

export default function FAQ() {
  return (
    <main className="faq">
      <h2 className='faq-title'>Frequently Asked Questions</h2>
      <div className="accordion-container" 
        style={{ 
          width: "70%", 
          height: "70vh", 
          overflowY: "auto", 
          marginInline: "auto", }}>
        {faqData.map((data, index) => {
          return(
            <Question key={index} question={data.question} answer={data.answer} />
          )
        })}
      </div>
    </main>
  )
}

const faqData = [
  {
    question: "What is the main purpose of Hedy?",
    answer: "The main goal is to offer users a fun platform to playfully engage with and deconstruct different social dynamics."
  },
  {
    question: "Can this app assist in improving social skills?",
    answer: "Hedy can aid in enhancing social skills by providing an entertaining space to explore, understand, and experiment with diverse social interactions."
  },
  {
    question: "What types of conversations can I have with this AI?",
    answer: "You can enjoy a wide range of conversations that allow you to dissect and play with various social scenarios and dynamics."
  },
  {
    question: "Who created Hedy?",
    answer: "The app was crafted by a developer passionate about creating an enjoyable environment to dissect and engage with abstractions and social dynamics."
  },
  {
    question: "How does this AI understand social cues?",
    answer: "Through advanced algorithms, the AI interprets text inputs to interact and explore social nuances."
  },
  {
    question: "Are conversations with this AI private?",
    answer: "Absolutely, conversations are kept confidential to ensure a secure and enjoyable experience without sharing with third parties."
  },
  {
    question: "Can I customize my interactions within the app?",
    answer: "Yes, the app offers customization options, allowing users to tailor their experiences while playing with social dynamics."
  },
  {
    question: "How does this app ensure user safety?",
    answer: "Safety measures include secure requests, content moderation, and keeping user data with the user - eliminating risk."
  },
  {
    question: "Can I get feedback on my interactions?",
    answer: "Certainly, the app provides constructive feedback to help users better understand and navigate different social dynamics."
  },
  {
    question: "What makes this AI chat app unique?",
    answer: "The app's uniqueness lies in its entertaining approach, offering a playful exploration and breakdown of various social dynamics."
  }
];

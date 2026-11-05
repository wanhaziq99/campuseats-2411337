// Home page: a short guide to the three questions.
// You do not need to change this file.
import { Link } from 'react-router'

function HomePage() {
  return (
    <section>
      <h1>Practical Test Part 1 · React</h1>
      <p className="muted">Three independent questions. Do them in any order; read your task paper for the details.</p>
      <ul className="home-list">
        <li><Link to="/q1">Question 1</Link> <span className="muted">(easy, 20 marks)</span></li>
        <li><Link to="/q2">Question 2</Link> <span className="muted">(intermediate, 25 marks)</span></li>
        <li><Link to="/q3">Question 3</Link> <span className="muted">(hard, 25 marks)</span></li>
      </ul>
    </section>
  )
}

export default HomePage

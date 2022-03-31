import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input id="amount" name="amount" type="number" value={count} onChange={e => setCount(e.target.value)} />
        <button type="submit">Generate</button>
      </form>
      <article>
        
      </article>
    </section>
  );
}

export default App;

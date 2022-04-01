import { useState } from "react";
import "./App.css";
import data from "./data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setText(data.slice(0, count));
  };

  return (
    <section className="section-center">
      <h3 className="main-title">Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Number of paragraphs:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          min="0"
          max="8"
          value={count}
          onChange={handleChange}
        />
      </form>
      <article className="lorem-text">
        {text.map((p) => {
          return <p key={Math.random() * 1000}>{p}</p>;
        })}
      </article>
    </section>
  );
}

export default App;

import { useState } from "react";

function Quotes() {
  const [quotes, setQuotes] = useState([
    "Stay hungry",
    "Be Kind",
    "Keep coding"
  ]);

  return (
    <div>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote}</li>
        ))}
      </ul>
    </div>
  );
}

export default Quotes;

// template literals
// spread operator
//  default parameter
// role operator
// destructuring
// arrow function
// callback function
// ternary operator
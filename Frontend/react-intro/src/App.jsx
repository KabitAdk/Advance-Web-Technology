
import { useState } from "react";


function QuotesApp(){
  const [quotes, setQuotes] = useState([]);
  return(
    <div>
      <h1>Quotes</h1>
      <form onSubmit={(event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const quote ={
          id: quotes.length + 1,
          quote: formData.get('quote'),
        };
        setQuotes([... quotes, quote]);
      }}>
        <input type="text" name="quote" placeholder="Add a quote"/>
        <button type="submit"> Add quote </button>
      </form>
      {quotes.map((quote)=>quote.quote)}
    </div>
  );
}

export default QuotesApp;


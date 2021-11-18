import React, { useState} from "react";

const Quote = require('inspirational-quotes');


function InspirationQuote (){
  const [quote, setQuote] = useState(Quote.getQuote());
  
  return (<>
   
  <InspirationqRender 
       quote={quote}
        text={quote.text} 
        author={quote.author}/> 
       
    
       </>);
     };

   

export default InspirationQuote;

function InspirationqRender ({quote, text, author}) {

return (
  <>
  {quote ? 
      (
  <figure>
          <blockquote>{text}</blockquote>
          <figcaption>
            <cite>{author}</cite>
          </figcaption>
        </figure>
         ) : (
          "..."
          )}
  </>
)
}
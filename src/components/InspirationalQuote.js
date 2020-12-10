// import inspirational-quotes from "inspirational";

import React, { useState, useEffect } from "react";
// import React from 'react'; 

// użycie komponentu klasowego
// class InspirationQuote extends React.Component {
// state = {
//     quote : null
// }

// componentDidMount () {
//     import("inspirational-quotes").then(
//         (Quotes)=>{this.setState({quote: Quotes.getQuote()})}
//     ).catch(()=> console.log("Couldn't load quotes"));
// }

//  render () {
  
//     return (
//         <>
//         {this.state.quote ?
//         <figure>
//         <blockquote>{this.state.quote.text}</blockquote>

//         <figcaption><cite>{this.state.quote.author}</cite></figcaption>
//                 </figure> :
//             "..."
//         }
//         </>
//     )
//  }
// }



    


// Użycie komponentu funkcyjnego z hookiem useEffect
// const InspirationQuote = () => {
//   const [quote, setQuote] = useState();

//   useEffect(() => {
//     import("inspirational-quotes")
//       .then(Quotes => {
//         setQuote(Quotes.getQuote());
//       })
//       .catch(() => console.log("Couldn't load quotes"));
//   });

//   return (
    // <>
    //   {quote ? 
    //       (
    //   <figure>
    //           <blockquote>{text}</blockquote>
    //           <figcaption>
    //             <cite>{author}</cite>
    //           </figcaption>
    //         </figure>
    //         ) : (
    //           "..."
    //           )}
    //   </>
    //     );
    // };
    
     
//Użycie komponentu 1 funkcyjnego-kontenerowego z logika 2 funkcyjnego prezentacyjnego 

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
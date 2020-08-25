import React from 'react';
import TimeboxList from './Timeboxlist';
import EditableTimebox from './Editabletimebox';

import ErrorBoundaries from './Error';


function App () {

  return (
      
 <div className="App">
     <ErrorBoundaries message="Wymgane są dzieci">

     <TimeboxList/>
     <EditableTimebox/>

     </ErrorBoundaries>
 </div>
  )

}


export default App;

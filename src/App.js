import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Main from './components/Main'
function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Route path='/' ><Main/></Route>

</BrowserRouter>

    </div>
  );
}

export default App;

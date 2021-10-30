// import logo from "./logo.svg";
// import "./App.css";
// import Main from "./components/Main";
// import New from "./components/New";
// import Health from "./components/Health";
// import Main1 from "./components/Main1";
// import Fadecar from "./components/Fadecar";

// function App() {
//   return (
//     <div className="App">
//       {/*  <Health/>
//            <Main1/> */}

//       <New />
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, {useState,useEffect} from 'react';



import New from './components/New';
import Response from './components/Response';
import useWindowDimensions from './components/useWindowDimensions';

 
function App() {
  const { width } = useWindowDimensions();

  const [mobileWidth, setMobilewidth] = useState(false);
  const [webWidth, setWebWidth] = useState(false);


  useEffect(() => {
    if (width < 770) {
      setMobilewidth(true);
      setWebWidth(false);
    } else {
      setMobilewidth(false);
      setWebWidth(true);
    }
  }, [width]);
  return (
    <div>
{webWidth && (
  <div>
     <New/>
     </div>
     )}
     
    {mobileWidth && (
      <div>
    <Response/>
     </div>
     ) }
    </div>
  );
}

export default App;


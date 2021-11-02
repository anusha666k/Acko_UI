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

import "./App.css";
import "./Style.css";
import React, { useState, useEffect } from "react";

import New from "./components/New";

import useWindowDimensions from "./components/useWindowDimensions";
import Responsecar from './components/Responsecar';
import Response from "./components/Response";
import Response1 from './components/Response1';
import Response2 from './components/Response2';
import Response3 from './components/Response3';
import Response4 from './components/Response4';
import Response5 from './components/Response5';
import Response6 from './components/Response6';
import Response7 from './components/Response7';
import Response8 from './components/Response8';

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
          <New />
        </div>
      )}

      {mobileWidth && (
        <div>
          <Response />
          <Response1 />
          <Responsecar />
          <Response2/>
          <Response3 />
          <Response4 />
          <br />
          <Response5 />
          <br /> <br /> <br />
          <Response6 />
          <br /> <br />
          <Response7 />
          {/* <ResSixth/> */}
          <br /> <br />
          <Response8 />
        </div>
      )}
    </div>
  );
}

export default App;

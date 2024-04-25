import ReactGA from "react-ga4";
import { useEffect } from "react";

import './App.css'

function App() {

  useEffect(() => {
    ReactGA.initialize("G-KF58HRH7TQ");
  })

  return (
    <>

    </>
  )
}

export default App

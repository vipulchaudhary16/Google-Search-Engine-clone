import { React, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Router";

import ResultState from "./context/ResultState";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <ResultState>
          <Routes />
        </ResultState>
        <Footer />
      </div>
    </div>
  );
}

export default App;

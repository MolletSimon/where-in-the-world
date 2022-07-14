import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Home from "./screens/home";
import Detail from "./screens/detail";

function App() {
  const [darkMode, setDarkmode] = useState(false);
  const [detail, setDetail] = useState(false);
  const [countryDetail, setCountryDetail] = useState({});

  return (
    <div className={darkMode && `dark`}>
      <div className="bg-lightBackground min-h-screen dark:bg-black">
        <Header darkMode={darkMode} setDarkmode={setDarkmode} />
        {detail ? (
          countryDetail && (
            <Detail countryDetail={countryDetail} setDetail={setDetail} />
          )
        ) : (
          <Home setCountryDetail={setCountryDetail} setDetail={setDetail} />
        )}
        {/* <Outlet /> */}
      </div>
    </div>
  );
}

export default App;

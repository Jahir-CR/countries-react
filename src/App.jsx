import CountryInfo from "./Components/CountryInfo";
import LogIn from "./Components/LogIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LogIn />} />
        <Route path="/SearchCountries" element={<CountryInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

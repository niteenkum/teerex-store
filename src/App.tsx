import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";

function App() {
  return (<>
  <Header/>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
      </BrowserRouter></>
  );
}

export default App;

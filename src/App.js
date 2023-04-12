import "./App.css";
import Footer from "./components/Footer";
import List from "./components/List";
import Detail from "./components/Detail";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/list" element={<List></List>}></Route>
          <Route path="/list/detail/:title" element={<Detail></Detail>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

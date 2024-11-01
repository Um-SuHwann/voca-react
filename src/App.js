import "./App.css";
import Day from "./components/Day";
import DayList from "./components/DayList";
import EmptyPage from "./components/EmptyPage";
import Header from "./components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word/" element={<CreateWord />} />
          <Route path="/create_day/" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

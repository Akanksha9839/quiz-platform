import { HashRouter as BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateQuiz from "./pages/CreateQuiz";
import MyQuizzes from "./pages/MyQuizzes";
import PlayQuiz from "./pages/PlayQuiz";
import Result from "./pages/Result";

function App() {
  return (
  <HashRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateQuiz />} />
    <Route path="/myquizzes" element={<MyQuizzes />} />
    <Route path="/play" element={<PlayQuiz />} />
    <Route path="/result" element={<Result />} />
  </Routes>
</HashRouter>
  );
}

export default App;
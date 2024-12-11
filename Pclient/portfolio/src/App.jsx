import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Hom from "./Hom.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Hom />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

import CatContextData from "./CatContext"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router, Routes, Route, Link
} from 'react-router-dom'
import CatListingPage from "./page/CatListingPage"
import AddCatPage from "./page/AddCatPage"
import EditCatPage from "./page/EditCatPage"

export default function App() {
  return (
    <div className="container">
      <CatContextData>
        <Router>
          <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">All Cats</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">Create Cat</Link>
                </li>
              </ul>
            </div>

          </nav>
          <Routes>
            <Route path="/" element={<CatListingPage />} />
            <Route path="/add" element={<AddCatPage />} />
            <Route path="/edit/:catId" element={<EditCatPage />} />
          </Routes>
        </Router>
      </CatContextData>
    </div>
  );
}
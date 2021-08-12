import { Switch, Route, Link } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import AddCity from "./components/AddCity";
import City from "./components/City";
import ListCities from "./components/ListCities";

function App() {
  return (
    <>
     <nav className="navbar">
       <div className="navbar__list">
         <li className="navbar__item">
           <Link to={"/cities"} className="navbar__item--link">
           Cities
           </Link>
         </li>
         <li className="navbar__item">
           <Link to={"/add"} className="navbar__item--link">
           Add city
           </Link>
         </li>
       </div>
     </nav>
     
     <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/cities"]} component={ListCities} />
            <Route exact path="/add" component={AddCity} />
            <Route path="/cities/:id" component={City} />
          </Switch>
        </div>
    </>
  );
}

export default App;

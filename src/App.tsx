import { Switch, Route } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "./components/Header";
import AddCity from "./components/AddCity";
import City from "./components/City";
import ListCities from "./components/ListCities";

function App() {
  return (
    <>
    <Header/>
    
     
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

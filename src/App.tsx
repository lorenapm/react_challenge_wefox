import { Switch, Route } from "react-router-dom";
import './';


import Header from "./components/Header";
<<<<<<< HEAD
import MapCities from "./components/MapCities";
=======
import LeafletMap from "./components/LeafletMap";
>>>>>>> map
import AddCity from "./components/AddCity";
import City from "./components/City";
import ListCities from "./components/ListCities";
import Footer from "./components/Footer";

const App:React.FC = () => {
  return (
    <>
    <Header/>
    <LeafletMap/>
     <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/cities"]} component={ListCities} />
            <Route exact path="/add" component={AddCity} />
            <Route path="/cities/:id" component={City} />
          </Switch>
        </div>

    <Footer/>
    </>
  );
}

export default App;

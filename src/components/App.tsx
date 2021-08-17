import { Switch, Route } from "react-router-dom";
import '..';

import Header from "./Header";
import AddCity from "./AddCity";
import City from "./City";
import ListCities from "./ListCities";
import Footer from "./Footer";

const App:React.FC = () => {
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

    <Footer/>
    </>
  );
}

export default App;

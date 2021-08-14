import { useState, useEffect } from "react";
import api from "../services/services";
import { Link } from "react-router-dom";
import dataTypes from "../types/types";
import camper from "../images/camper.png";
import "../stylesheets/listcities.css";

const ListCities = () => {
    const [cities, setCities] = useState<Array<dataTypes>>([]);
    const [currentCity, setCurrentCity] = useState<dataTypes | null>(null);
    const [cityIndex, setCityIndex] = useState<number>(-1);

    useEffect(() => {
        retrieveCities();
    }, []);

    const retrieveCities = () => {
        api.getAll()
        .then((response) => {
            setCities(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    };

    const refreshList = () => {
      retrieveCities();
      setCurrentCity(null);
      setCityIndex(-1);
    };

    const setActiveCity = (city:any) => {
    setCurrentCity(city);
    setCityIndex(city.id);
};
const removeAll = () => {
  api.removeAll()
  .then(response => {
    console.log(response.data);
    refreshList();
  })
  .catch(e => {
    console.log(e);
  });
};


    return (
      <>
    <div className="box-title">
      <h1 className="box-title__title"> Wefox travel challenge</h1>
      <img className="box-title__icon" src={camper} alt="camper"/>
    </div>
    <h3 className="subtitle">
      Travel with us. Create your favorite itinerary. Do we start with Madrid,
      Barcelona and Berlin ... or not? You decide, we travel with you.
    </h3>
        <div className="cities">
        
            <div className="cities__list">
                <h4 className="cities__list--title">Your cities list</h4>
                <ul className="cities__list--contain list-group">
                    {cities && cities.map((city) => (
                        <li 
                        key={city.id}
                        className={"cities__list__item" + (city.id === cityIndex ? "active" : "")} 
                        onClick={() => setActiveCity(city)} 
                         >
                            {city.title}
                            </li>
                    ))}
                </ul>

                {/* <button className="button__remove"
                onClick={removeAll}
                >
                  Remove all cities
                </button> */}

                </div>
                <div className="city">
                    {currentCity ? (
                        <div>
                            <h4 className="city__title">City</h4>
                            <div>
                                <label>
                                    <strong>Title: </strong>
                                </label>{""}
                                    {currentCity.title}
                            </div>
                            <div>
              <label>
                <strong>Description:</strong>
              </label>
              <p>{currentCity.content}</p>
            </div>
              <label>
                <strong>Image:</strong>
              </label>
              <img className="city__image" src={currentCity.image_url} alt={currentCity.title}/>
            <div className="button">
                <Link
                  to={"/cities/" + currentCity.id}
                  className="link"
                >
                  Edit
                </Link>
            </div>

          </div>
        ) : (
          <div>
            <br />
            <p>Please, click on a city...</p>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ListCities

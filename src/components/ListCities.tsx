import React, { useState, useEffect } from "react";
import api from "../services/services";
import { Link } from "react-router-dom";
import dataTypes from "../types/types";

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
const getActiveCity = (city:any) => {
    setCurrentCity(city);
    setCityIndex(city.id);
}
    return (
        <div className="cities">
            <div className="cities__list">
                <h2 className="cities__list--title">Cities List</h2>
                <ul className="cities__list--contain">
                    {cities && cities.map((city) => (
                        <li 
                        key={city.id}
                        className={"cities__list__item" + (city.id === cityIndex ? "active" : "")} 
                        onClick={() => setCurrentCity(city)} >
                            <h3>{city.title}</h3>
                            </li>
                    ))}
                </ul>
                </div>
                <div className="city">
                    {currentCity ? (
                        <div>
                            <h4 className="city__title">City</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{""}
                                    {currentCity.title}
                            </div>
                            <div>
              <label>
                <strong>Description:</strong>
              </label>
              <p>{currentCity.content}</p>
            </div>
            <div className="city__box_img">
                <label>
                    <strong>Image:</strong>
                </label>
                <img src={currentCity.image_url} alt={currentCity.title}/>

            </div>

            <div>
                <Link
                  to={"/cities/" + currentCity.id}
                  className="badge badge-warning"
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
  );
};

export default ListCities

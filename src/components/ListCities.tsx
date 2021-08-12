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
            console.log(response.data);
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
                        onClick={() => setCurrentCity(city)} key={city.id}>
                            <h3>{city.title}</h3>
                            </li>
                    ))}
                </ul>
                </div>
                <div className="city">
                    {currentCity ? (
                        <div>
                            <h4>City</h4>
                            <div>
                                <label>
                                    <strong>Title:</strong>
                                </label>{""}
                                    {currentCity.title}
                            </div>
                            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentCity.content}
            </div>

            <Link
              to={"/cities/" + currentCity.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
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

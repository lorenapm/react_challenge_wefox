import React, { useState, ChangeEvent } from 'react';
import api from "../services/services";
import dataTypes from "../types/types";
import "../stylesheets/addcity.css";
import LeafletMap from './LeafletMap';


const AddCity: React.FC = () => {
const initialCityState = {
    title: "",
    content: "",
    image_url: "",
    lat: 0,
    long: 0,
};

const [cities, setCities] = useState<dataTypes>(initialCityState);
const [submitted, setSubmitted] = useState<boolean>(false);

const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    const { name, value } = event.target;
    setCities({ ...cities, [name]: value});
};

const saveCities = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let data = {
        id:null,
        title: cities.title,
        content: cities.content,
        image_url: cities.image_url,
        lat: cities.lat,
        long: cities.long,
    };

    api
    .create(data)
    .then((response) => {
        setCities({
            id: response.data.id,
            title: response.data.title,
            content: response.data.content,
            image_url: response.data.image_url,
            lat: response.data.lat,
            long: response.data.long,
        });
        setSubmitted(true);
        console.log(response.data);
    })
    .catch((e) => {
        console.log(e);
    });
};

const newCities = () => {
    setCities(initialCityState)
    setSubmitted(false);
};

    return (
        <section className="addCity">
            {submitted ? (
                <div className="citySubmitted">
                    <div className="citySubmitted__hero"></div>
                    <h4 className="citySubmitted__title">Your next destination successfully!</h4>
                    <button className="citySubmitted__button" onClick={newCities}>Add new city
                    </button>
                    <a className="citySubmitted__go" href="/cities" type="button">Go back</a>
                </div>
            ) : (
                <div className="upground">
                    <h2 className="upground__title">Add your next city</h2>
                    <form className="upground__form" >
                            <div className="title">
                                <label className="title__title" htmlFor="title">City name*</label>
                                <input 
                                type="text"
                                className="title__input"
                                id="title"
                                name="title"
                                placeholder="Bariloche"
                                value={cities.title}
                                onChange={handleInputChange}
                                required
                                />
                            </div>
                            <div className="description">
                                <label className="description__title" htmlFor="content">Description*</label>
                                <textarea
                                className="description__input"
                                id="content"
                                name="content"
                                placeholder="Bariloche is a beautiful city in Patagonia..."
                                value={cities.content}
                                onChange={handleInputChange}
                                required
                                />
                            </div>
                            <div className="image">
                                <label className="image__title" htmlFor="image_url">Image link*</label>
                                <input
                                type="text"
                                className="image__input"
                                id="image_url"
                                name="image_url"
                                placeholder="Image link"
                                value={cities.image_url}
                                onChange={(handleInputChange)}
                                required
                                />
                            </div>
                            <div className="lat">
                                <label className="lat__title" htmlFor="lat">Latitude*</label>
                                <input 
                                type="text"
                                className="lat__input"
                                id="lat"
                                name="lat"
                                placeholder= "48.865572"
                                value={cities.lat}
                                onChange={handleInputChange}
                                required
                                />
                            </div>
                            <div className="long">
                                <label className="long__title" htmlFor="lat">Longitude*</label>
                                <input 
                                type="text"
                                className="long__input"
                                id="long"
                                name="long"
                                placeholder= "2.283523"
                                value={cities.long}
                                onChange={handleInputChange}
                                required
                                />
                            </div>
                           
                            <button
                            className="button__add"
                            type="submit"
                            onClick={saveCities}>
                                Submit
                            </button>
                        </form>
                </div>
                )}
        </section>
    );
};

export default AddCity

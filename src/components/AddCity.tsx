import React, { useState, useEffect, ChangeEvent } from 'react';
import api from "../services/services";
import dataTypes from "../types/types";
import City from './City';

const AddCity: React.FC = () => {
const initialCityState = {
    title: "",
    content: "",
    image_url: "",
};

const [cities, setCities] = useState<dataTypes>(initialCityState);
const [submitted, setSubmitted] = useState<boolean>(false);
const [disabled, setDisabled] = useState<boolean>(true);


useEffect(() => {
    if (cities.title && cities.content && cities.image_url) {
        setDisabled(false);
    }
}, [cities]);

const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
    const { name, value } = event.target;
    setCities({ ...cities, [name]: value});
};

const saveCities = () => {
    let data = {
        id:null,
        title: cities.title,
        content: cities.content,
        image_url: cities.image_url,
    };

    api
    .create(data)
    .then((response) => {
        setCities({
            id: response.data.id,
            title: response.data.title,
            content: response.data.content,
            image_url: response.data.image_url,
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
                    <h4 className="citySubmitted__title">Your next destination successfully!</h4>
                    <button className="citySubmitted__button" onClick={newCities}>Add</button>
                </div>
                ) : (
                    <div className="upground">
                        <h4 className="upground__title">Add your city</h4>
                        <form className="upground__form" onSubmit={saveCities}>
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
                                <label className="image__title" htmlFor="image">Image link*</label>
                                <input
                                type="text"
                                className="image__input"
                                id="image_url"
                                name="content_url"
                                placeholder="Image link"
                                //value={cities.image_url}
                                onChange={(handleInputChange)}
                                required
                                />
                            </div>
                           
                            <button
                            className="button"
                            type="submit"
                            onClick={saveCities}
                           
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                )}


        </section>
    );
};

export default AddCity

import React, { useState, useEffect, ChangeEvent } from "react";
import { RouteComponentProps } from "react-router-dom";
import api from "../services/services";
import dataTypes from "../types/types";

interface RouterProps { id:string }
type Props = RouteComponentProps<RouterProps>;

const City: React.FC<Props> = (props: Props) => {
    const initialCityState = {
        id: null,
        title: "",
        content: "",
        image_url: "",
        published: false,
    };

    const [currentCity, setCurrentCity] = useState<dataTypes>(initialCityState);
    const [message, setMessage] = useState<string>("");

    const getCity = (id: string) => {
        api
        .get(id)
        .then(response => {
            setCurrentCity(response.data);
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
        });
    };

    useEffect(() => {
        getCity(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setCurrentCity({ ...currentCity, [name]: value });
    };

    const updateCity = () => {
        api
        .update(currentCity.id, currentCity)
        .then(response => {
            console.log(response.data);
            setMessage("Your city was updated successfully!")
        })
        .catch(e => {
            console.log(e);
        });
    };

    const deleteCity = () => {
        api
        .remove(currentCity.id)
        .then(response => {
            console.log(response.data);
            props.history.push("/cities");
        })
        .catch(e => {
            console.log(e)
        });
    };

    return (
        <div>
        {currentCity ? (
            <div className="upground">
                <h2 className="upground__title">City</h2>
                <form className="upground__form" >
                    <div className="title">
                        <label className="title__title" htmlFor="title">City name*</label>
                        <input 
                        type="text"
                        className="title__input"
                        id="title"
                        name="title"
                        placeholder="Bariloche"
                        value={currentCity.title}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="description">
                        <label className="description__title" htmlFor="content">Description*</label>
                        <textarea
                        className="description__input"
                        id="content"
                        name="content"
                        placeholder="Bariloche is a beautiful city in Patagonia..."
                        value={currentCity.content}
                        onChange={handleInputChange}
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
                        value={currentCity.image_url}
                        onChange={(handleInputChange)}
                        />
                    </div> 
                </form>
  
            <button className="button__edit" onClick={deleteCity}>
                Delete 
            </button>

            <button 
            type="submit"
            className="button__edit" 
            onClick={updateCity}>
                Update
            </button>
            <p>{message}</p>
        </div> 
        ) : (
        <div>
            <br/>
            <p>Please, click on a city...</p>
        </div>
        )} 
      </div>
    );
};

export default City;

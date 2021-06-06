import React, { useState, useEffect, useReducer } from "react";

const Characters = () => {

    //  creamos un estado inicial
    const initialState = {
        favorites: []
    }

    //  creamos nuestro reducer
    const favoriteReducer = (state, action) => {
        switch (action.type) {
            case 'ADD_FAVORITE':
                return {
                    ...state,
                    favorites: [...state.favorites, action.payload]
                };
            default:
                return state;
        }
    }


    const [characters, setCharacters] = useState([]);

    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);


    const getCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setCharacters(data.results); // siempre ver donde empeixa el array
        console.log(data.results)
    };

    useEffect(() => {
        getCharacters();
    }, []);

    // metodo que va a enviar a favorites-el array
    const handelClick = favorite => {
        dispatch({ type: 'ADD_FAVORITE', payload: favorite })
    }

    return (
        <div className="Characters">
            <h1>Los favoritos son:</h1>
            {
                favorites.favorites.map((favorite) => {
                    return (
                        <div>
                            <li key={favorite.id}>{favorite.name}</li>
                            <hr />
                        </div>

                    )
                })
            }


            {characters.map((character) => (
                <div>
                    <img src={character.image} alt="" srcset="" />
                    <h2 key={character.id}>{character.name}</h2>
                    <button type="button" onClick={() => handelClick(character)}>Agregar  favoritos</button>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Characters;
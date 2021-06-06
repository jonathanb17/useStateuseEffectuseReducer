import React, { useState, useContext } from 'react'
import ThemeContext from './context/ThemeContext'

const Header = () => {

    const color = useContext(ThemeContext);

    const [darkMode, setDarkMode] = useState(false);

    const handleClick = () => {
        setDarkMode(!darkMode);
        // alert("Hola Mundo")
    }


    return (
        <div>
            <h1 style={{ color }}>React hook</h1>
            <button type="button" onClick={() => handleClick()}>
                {
                    darkMode ? alert("hola") : alert("jai")
                }
            </button>

            <button onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ? alert("holis") : alert("jaijai")
                }
            </button>
        </div>
    )
}

export default Header

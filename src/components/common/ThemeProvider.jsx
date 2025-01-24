import { PiMoonStars, PiSun } from "react-icons/pi";

import { useState, useEffect } from "react";

const ThemeProvider = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light" // Load saved theme or default to light
    );

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save to localStorage
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme); // Set theme attribute
    }, [theme]);

    return (
        <div>
            <button onClick={toggleTheme}>
                {theme === "light" ? <PiMoonStars size={24} className="cursor-pointer" /> : <PiSun size={24} className="cursor-pointer" />}
            </button>
        </div>
    );
};

export default ThemeProvider;

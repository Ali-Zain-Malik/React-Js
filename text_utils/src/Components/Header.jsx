import { useState } from "react";
import lightMode from "../Images/light-mode.svg";
import darkMode from "../Images/dark-mode.svg";
const Header = () => 
{
    const handleThemeToggle = () =>
    {
        setIsDarkMode(prevMode => !prevMode);
    }
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <nav className={`navbar ${isDarkMode ? 'dark-mode': 'light-mode'}`}>    
            <div className="container-fluid">
                <span className={`navbar-brand mb-0 h1 ${isDarkMode ? "text-light" : "text-dark"}`}>Navbar</span>
                <img src={isDarkMode ? lightMode : darkMode} onClick={handleThemeToggle} role="button" alt="" />
            </div>
        </nav>
    );
}

export default Header;
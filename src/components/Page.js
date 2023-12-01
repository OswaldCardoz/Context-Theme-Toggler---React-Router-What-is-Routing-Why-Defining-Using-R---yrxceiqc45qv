import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {

    const {theme}=React.useContext(ThemeContext);
    const textColor= `txt-${theme}`;
        return(
            <div className={"container " + `bg-${theme}`} id="themed-page">
                <p className={textColor} id="themed-text-container">
                    lorem ipsum dolor iterit n stuff
                </p>
                <button className={`btn btn-${theme} ${textColor}`} id="themed-button">Themed Button</button>
                <LocalThemedBox />
            </div>
        )
    }
export { Page }
import React, { createContext, useState } from 'react';

export const CheckContext = createContext();
const CheckProvider = ({ children }) => {

    const [isTrue, setIsTrue] = useState('');
    const toggleResult = (x) => { setIsTrue(x) };
    const [score, setScore] = useState(0)
    const toggleScore = (y) => { setScore(y) }
    const [visibleAnswer, setVisibleAnswer] = useState('Visible Answer');
    const toggleVisible = (z) => {setVisibleAnswer(z)}
    const [visibleChoices, setVisibleChoices] = useState('Visible Choices');
    const toggleVisibleChoices = (w) => {setVisibleChoices(w)}
    const [background, setBackground] = useState('background_start');
    const toggleBackground = (v) => {setBackground(v)};
    const [button_color, setButton_color] = useState('choice');
    const toggleButton_color =(u) =>{setButton_color(u)};
    const [component, setComponent] = useState('category');
    const toggleComponent = (t) => {setComponent(t)};
    // const [currentPage, setCurrentPage] = useState('');
    // const toggleCurrentPage = (s) => {setCurrentPage(s)};

    return (
        <CheckContext.Provider value={{ isTrue, toggleResult, score, toggleScore, visibleAnswer, toggleVisible,
         visibleChoices, toggleVisibleChoices, background, toggleBackground, button_color, toggleButton_color,
         component, toggleComponent}}>
            {children}
        </CheckContext.Provider>
    )
}
export default CheckProvider;
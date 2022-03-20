import pages from './index';
import CheckProvider, { CheckContext } from '../Context/CheckContext';
import React, { useState, useContext, Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import '../Styles/theme.scss';
import hist_icon from '../Assets/Icons/his_icon.png';
import prog_icon from '../Assets/Icons/prog_icon.png'
import kult_icon from '../Assets/Icons/hand-icon.png';
import tech_icon from '../Assets/Icons/tech_icon.png';
import moto_icon from '../Assets/Icons/mot_icon.png';
import Q_sign from '../Assets/Icons/Q-sign.png';
import Quiz_text from '../Assets/Icons/QUIZ_gray.png';


const Homepage = () => {
    const { Tech, Kult, Moto, Prog, Hist } = pages;
    const [visible, setVisible] = useState(true);
    const { toggleVisible, toggleResult, background, toggleBackground, component, button_color,
        toggleComponent } = useContext(CheckContext);

    const handleClick = () => {
        setVisible(false);
        toggleComponent('category');
    }
    const handleClickVisible = () => {
        setVisible(true);
        toggleBackground('background_start');
        toggleVisible('Not visible ;)')
        toggleResult('Not Visible ;)')
        toggleComponent('category');
    }

    const handleClickBack = () => {
        toggleComponent('category');
    }


    const Routes = () => {
        return (
            <div className='Menu_Wrapper'>
                <NavLink to='/tech'><button className='categoryButton' name='tech' onClick={handleClick} >
                    <img className='categoryImage' src={tech_icon} alt="technologia-ikona" />
                    <p className='categoryName'>TECHNOLOGIA</p>
                </button></NavLink>
                <NavLink to='/kult'><button className='categoryButton' name='kult' onClick={handleClick} >
                    <img className='categoryImage' src={kult_icon} alt="kultura-ikona" />
                    <p className='categoryName'>KULTURA</p>
                </button></NavLink>
                <NavLink to='/moto'><button className='categoryButton' name='moto' onClick={handleClick} >
                    <img className='categoryImage' src={moto_icon} alt="motoryzacja-ikona" />
                    <p className='categoryName'>MOTORYZACJA</p>
                </button></NavLink>
                <NavLink to='/prog'><button className='categoryButton' name='prog' onClick={handleClick} >
                    <img className='categoryImage' src={prog_icon} alt="programowanie-ikona" />
                    <p className='categoryName'>PROGRAMOWANIE</p>
                </button></NavLink>
                <NavLink to='/hist'><button className='categoryButton' name='hist' onClick={handleClick} >
                    <img className='categoryImage' src={hist_icon} alt="historia-ikona" />
                    <p className='categoryName'>HISTORIA</p>
                </button></NavLink>
            </div>
        );
    };
    const Routes2 = () => {
        return (
            <div className='scoreMenu_Wrapper'>
                {background === 'tech_score' ? null : <NavLink to='/tech'><button
                    className={`score_categoryButton ${button_color}`} name='tech' onClick={handleClick} >
                    <img className='categoryImage' src={tech_icon} alt="technologia-ikona" />
                    <p className='categoryName'>TECHNOLOGIA</p>
                </button></NavLink>}
                {background === 'kult_score' ? null : <NavLink to='/kult'><button
                    className={`score_categoryButton ${button_color}`} name='kult' onClick={handleClick} >
                    <img className='categoryImage' src={kult_icon} alt="kultura-ikona" />
                    <p className='categoryName'>KULTURA</p>
                </button></NavLink>}
                {background === 'moto_score' ? null : <NavLink to='/moto'><button
                    className={`score_categoryButton ${button_color}`} name='moto' onClick={handleClick} >
                    <img className='categoryImage' src={moto_icon} alt="motoryzacja-ikona" />
                    <p className='categoryName'>MOTORYZACJA</p>
                </button></NavLink>}
                {background === 'prog_score' ? null : <NavLink to='/prog'><button
                    className={`score_categoryButton ${button_color}`} name='prog' onClick={handleClick} >
                    <img className='categoryImage' src={prog_icon} alt="programowanie-ikona" />
                    <p className='categoryName'>PROGRAMOWANIE</p>
                </button></NavLink>}
                {background === 'hist_score' ? null : <NavLink to='/hist'><button
                    className={`score_categoryButton ${button_color}`} name='hist' onClick={handleClick} >
                    <img className='categoryImage' src={hist_icon} alt="historia-ikona" />
                    <p className='categoryName'>HISTORIA</p>
                </button></NavLink>}
            </div>
        );
    };
    return (
        <div className={`home_wrapper ${background}`}>
            <img className='Q-sign' src={Q_sign} alt="Q" />
            <div className='quiz_wrapper'>
                <Router>
                    <div>

                        <div className='backAndX_wrapper'>
                            {visible ? null : <button className='buttonBack' onClick={handleClickBack}>&#60;</button>}
                            <NavLink to='/'><button className='buttonX' onClick={handleClickVisible} >&#215;</button></NavLink>
                        </div>
                        <div className='footer'>
                            {component === 'score' ? <div><div><p>WYBIERZ</p><p> INNĄ KATEGORIĘ:</p></div><Routes2 />
                            </div> : null}
                        </div>
                        <img className='Quiz_text' src={Quiz_text} alt="Quiz" />
                        <div className='categories_wrapper'>  {visible ? <div>
                            <p className='title title_prog'>10 PYTAŃ / 5 KATEGORII</p><Routes />
                        </div> : null}   </div>
                        {visible ? null :
                            <Switch>
                                <Route path='/tech' component={Tech} />
                                <Route path='/kult' component={Kult} />
                                <Route path='/moto' component={Moto} />
                                <Route path='/prog' component={Prog} />
                                <Route path='/hist' component={Hist} />
                            </Switch>}
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default Homepage;
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
const Routes = (click) => {
    return (
        <div className='Menu_Wrapper'>
            <NavLink to='/tech'><button onClick={click} >Technologia</button></NavLink>
            <NavLink to='/kult'><button onClick={click} >Kultura</button></NavLink>
            <NavLink to='/moto'><button onClick={click} >Motoryzacja</button></NavLink>
            <NavLink to='/prog'><button onClick={click} >Programowanie</button></NavLink>
            <NavLink to='/hist'><button onClick={click} >Historia</button></NavLink>
        </div>
    );
}

export default Routes;
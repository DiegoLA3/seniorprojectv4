import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <nav>
                <nav>
                    <NavLink to="/Home"><button onClick = "Home" class = "button"> Home sweet home </button></NavLink>
                    <NavLink to="/Calculate"><button onClick = "Calculate" class = "button"> Calculate (for now) </button></NavLink>
                    <NavLink to="/Login"><button onClick = "#Login" class = "button"> Login :D </button></NavLink>
                    <NavLink to="/Register"><button onClick = "#Register" class = "button"> Register! </button></NavLink>
                    <NavLink to="/Userdetails"><button onClick = "#Userdetails" class = "button"> Yo Detailz </button></NavLink>
                </nav>
            </nav>
        </nav>
    )
}

export default NavBar;
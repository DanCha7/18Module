import { Link } from "react-router-dom";
import "./style.css"

const Nav = () => {
    return (
        <nav className="nav__bar">
            <ol className="nav__item__list">
                <Link to ="/18Module/beans" >Beans</Link>
                <Link to ="/18Module/facts" >Facts</Link>
                <Link to = "/recipes">Recipies</Link>
                <Link to ="/combinations">Combinations</Link>
                <Link to="/history">History</Link>
            </ol>
        </nav>
    )
};

export default Nav;
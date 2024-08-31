import Logo from "../logo/logo";
import Nav from "../nav";
import  "./style.css"

const Header = () =>{
    return(
        <header className="header__content">
            <Logo></Logo>
            <Nav></Nav>
        </header>
    );
};

export default Header;
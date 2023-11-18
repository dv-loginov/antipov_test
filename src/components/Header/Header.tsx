import './Header.scss';
import {useLocation} from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import HeaderContent from "../HeaderContent/HeaderContent";
import IcoBack from './back_ico.svg';
import IcoExit from './exit_ico.svg';

const Header = () => {
    const location = useLocation();
    const page = location.pathname;
    const hidden = page === '/team';
    return (
        <header className="header">
            <nav className={`header__btn ${hidden ? 'header__btn_hidden' : ''}`}>
                <NavButton link={'/team'} ico={IcoBack} text={'Назад'}/>
            </nav>
            <HeaderContent page={page}/>
            <nav className="header__btn">
                <NavButton link={'/'} ico={IcoExit} text={'Выход'}/>
            </nav>
        </header>
    );

};

export default Header;

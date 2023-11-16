import './NavButton.scss';
import {Link} from 'react-router-dom';

type LinkProps = { link: string, ico: string, text:string }

const NavButton = ({link, ico, text}: LinkProps) => {
    return (
        <Link to={link} className="nav-button">
            <span className='nav-button__text'>{text}</span>
            <img src={ico} alt="иконка" className='nav-button__img'/>
        </Link>
    )
};

export default NavButton;

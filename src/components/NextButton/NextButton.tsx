import './NextButton.scss';
// @ts-ignore
import icoBtn from './ico_arrow.svg';

const NextButton = () => {
    return(
        <button className="next-button">
            <span className="next-button__text">Показать еще</span>
            <img src={icoBtn} alt="стрелка вниз" className="next-button__ico"/>
        </button>
    )
};

export default NextButton;

import './Card.scss';
// @ts-ignore
import likeIco from './like.svg';
// @ts-ignore
import dislikeIco from './not_like.svg';

const Card = () => {
    const isLike = false;
    return (
        <li className='card'>
            <img src={require('./fototest.png')} className='card__photo' alt='фото пользователя'/>
            <h2 className='card__name'>Артур Королев</h2>
            <button className='card__like-btn'>
                <img src={isLike ? likeIco : dislikeIco}
                     className='card__like-ico'
                     alt='иконка лайка'/>
            </button>
        </li>
    );
};

export default Card;

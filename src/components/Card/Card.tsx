import './Card.scss';
import likeIco from './like.svg';
import dislikeIco from './not_like.svg';

type CardProps = { id: number, name: string, avatar: string }

const Card = ({id, name, avatar}: CardProps) => {
    console.log(id);
    const isLike = false;
    return (
        <li className='card' key={id}>
            <img src={avatar} className='card__photo' alt='фото пользователя'/>
            <h2 className='card__name'>{name}</h2>
            <button className='card__like-btn'>
                <img src={isLike ? likeIco : dislikeIco}
                     className='card__like-ico'
                     alt='иконка лайка'/>
            </button>
        </li>
    );
};

export default Card;

import './HeaderContent.scss';

type ContentProps = { page: string }

const HeaderContent = ({page}: ContentProps) => {
    if (page === '/team')
        return (
            <div className="header__content header__content_page-team">
                <h1 className="header__content-title-team">Наша команда</h1>
                <p className="header__content-subtitle-team">Это опытные специалисты,
                    хорошо разбирающиеся во всех задачах, которые ложатся на их плечи,
                    и умеющие находить выход из любых, даже самых сложных ситуаций. </p>
            </div>
        )
    else
        return (
            <div className="header__content header__content_page-partner">
                <img src={require('./fototest.png')}
                     alt="фото партнера"
                     className="header__content-img"/>
                <div className="header__content-info">
                    <h1 className="header__content-title-partner">Артур Королёв</h1>
                    <p className="header__content-subtitle-partner">Партнер</p>
                </div>
            </div>
        )

};

export default HeaderContent;

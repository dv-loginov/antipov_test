import { useParams } from 'react-router-dom';
import './Partner.scss';
import Header from "../../components/Header/Header";

const Partner = () => {
    const params = useParams();
    const userId = params.id;
    console.log(userId);
    return (
        <div className="partner">
            <Header/>
            <main className='partner__main'>
                <p className="partner__info">
                    Клиенты видят в нем эксперта по вопросам разработки комплексных решений финансовых продуктов,
                    включая такие аспекты, как организационная структура, процессы, аналитика и ИТ-компоненты. Он
                    помогает клиентам лучше понимать структуру рисков их бизнеса, улучшать процессы за счет
                    применения
                    новейших технологий и увеличивать продажи, используя самые современные аналитические
                    инструменты.
                    <br/>
                    <br/>
                    В работе с клиентами недостаточно просто решить конкретную проблему или помочь справиться с
                    трудностями. Не менее важно уделять внимание обмену знаниями: "Один из самых позитивных моментов
                    — это осознание того, что ты помог клиенту перейти на совершенно новый уровень компетентности,
                    уверенность в том, что после окончания проекта у клиента есть все необходимое, чтобы дальше
                    развиваться самостоятельно".
                    <br/>
                    <br/>
                    Помимо разнообразных проектов для клиентов финансового сектора, Сорин ведет активную
                    предпринимательскую деятельность. Он является совладельцем сети клиник эстетической медицины в
                    Швейцарии, предлагающей инновационный подход к красоте, а также инвестором других
                    бизнес-проектов.
                </p>
                <div className="partner__contacts">
                    <span className="partner__phone">+7 (954) 333-44-55</span>
                    <span className="partner__mail">sykfafkar@gmail.com</span>
                </div>
            </main>
        </div>
    );
}

export default Partner;

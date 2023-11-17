import './Team.scss';
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import NextButton from "../../components/NextButton/NextButton";

const Team = () => {
    return (
        <div className='team'>
            <Header />
            <main className='team__main'>
                <ul className='team__list'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </ul>
                <NextButton />
            </main>
        </div>
    );
}

export default Team;

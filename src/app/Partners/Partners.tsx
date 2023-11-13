import './Partners.scss';
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import NextButton from "../../components/NextButton/NextButton";

const Partners = () => {
    return (
        <div className='partners'>
            <Header />
            <main className='partners__main'>
                <ul className='partners__list'>
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

export default Partners;

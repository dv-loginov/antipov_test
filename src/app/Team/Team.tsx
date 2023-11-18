import { useEffect } from 'react';
import './Team.scss';
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import NextButton from "../../components/NextButton/NextButton";
import {getToken, getUsers} from "../../api/api";

const Team = () => {

    useEffect(() => {
        getUsers()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.error(err));

        getToken()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => console.error(err));
    }, []);

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

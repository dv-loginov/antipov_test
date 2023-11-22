import React, {useEffect} from 'react';
import './Team.scss';
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import NextButton from "../../components/NextButton/NextButton";
import {getToken, getUsers} from "../../api/api";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Team: React.FC = () => {

    const {users, error, loading} = useTypedSelector(state => state.user);
    console.log(users);

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
            <Header/>
            <main className='team__main'>
                <ul className='team__list'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
                <NextButton/>
            </main>
        </div>
    );
}

export default Team;

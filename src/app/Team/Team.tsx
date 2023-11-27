import React, {useEffect} from 'react';
import './Team.scss';
import Header from "../../components/Header/Header";
// import Card from "../../components/Card/Card";
import NextButton from "../../components/NextButton/NextButton";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Team: React.FC = () => {

    const {users, error, loading} = useTypedSelector(state => state.user);
    const {fetchUsers} = useActions();

    useEffect(() => {
        fetchUsers();
    },[]);

    if (loading) {
        return <h1> идет загрузка</h1>
    }

    if (error) {
        return <h1> Error {error}</h1>
    }

    return (
        <div className='team'>
            <Header/>
            <main className='team__main'>
                <ul className='team__list'>
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {/*<Card/>*/}
                    {users.map((user) => <li key={user.id}>{user.first_name}</li>)}
                </ul>
                <NextButton/>
            </main>
        </div>
    );
}

export default Team;

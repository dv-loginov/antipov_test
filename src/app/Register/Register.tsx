import './Register.scss';
import InputError from "../../components/InputError/InputError";

const Register = () => {
    return (
        <main className="register">
            <section className="register__form-warp">
                <h1 className="register__form-name">Регистрация</h1>
                <form className='register__form'>
                    <div className="register__input-wrap">
                        <label className="register__label" htmlFor="user-name">Имя</label>
                        <input
                            type="text"
                            id="user-name"
                            className="register__input"
                            name="userName"
                            placeholder="Имя пользователя"
                            minLength={2}
                            maxLength={30}
                        />
                        <InputError />
                    </div>

                    <div className="register__input-wrap">
                        <label className="register__label" htmlFor="email">Электронная почта</label>
                        <input
                            type="email"
                            id="email"
                            className="register__input"
                            name="email"
                            placeholder="Почта"
                            minLength={2}
                            maxLength={30}
                        />
                        <InputError />
                    </div>

                    <div className="register__input-wrap">
                        <label className="register__label" htmlFor="pass">Пароль</label>
                        <input
                            type="password"
                            id="pass"
                            className="register__input"
                            name="pass"
                            placeholder="Пароль"
                            minLength={2}
                            maxLength={30}
                        />
                        <input type="button" className='register__input-visible'/>
                        <InputError />
                    </div>

                    <div className="register__input-wrap">
                        <label className="register__label" htmlFor="repass">Подтвердите пароль</label>
                        <input
                            type="password"
                            id="repass"
                            className="register__input"
                            name="email"
                            placeholder="Повторить"
                            minLength={2}
                            maxLength={30}
                        />
                        <input type="button" className='register__input-visible'/>
                        <InputError />
                    </div>

                    <input type="submit" className="register__btn"/>
                </form>
            </section>
        </main>
    );
}

export default Register;

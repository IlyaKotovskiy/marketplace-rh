import React from 'react';

const LoginAndRegisterPage = () => {
  return (
    <div className="login-register-page">
      <div className="login-form">
        <h2>Вход</h2>
        <form>
          <input type="text" placeholder="Логин" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Войти</button>
        </form>
      </div>
      <div className="register-form">
        <h2>Регистрация</h2>
        <form>
          <input type="text" placeholder="Логин" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default LoginAndRegisterPage;

import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.header_content}>
        <img className={s.header_logo} src={require("../../images/logo.png")} />
        <form className={s.header_form}>
          <input className={s.header_input} type="text" placeholder="Поиск" />
          <button className={s.button_search} type="submit"></button>
        </form>
        <button className={s.button_bale}></button>
        <button className={s.button_menu}></button>
        </div>
      </div>
    </div>
  )
}

export default Header;

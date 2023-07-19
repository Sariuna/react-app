import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return <div className={s.navbar}>
  <nav>
    <ul className={s.items}>
      <li className={s.item}> <span className={s.item_icon1}></span> <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Моя страница</NavLink></li>
      <li className={s.item}> <span className={s.item_icon2}></span>  <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>Новости</NavLink></li>
      <li className={s.item}> <span className={s.item_icon3}></span> <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Мессенджер</NavLink></li>
      <li className={s.item}> <span className={s.item_icon4}></span> <a>Друзья</a></li>
      <li className={s.item}> <span className={s.item_icon5}></span> <a>Сообщества</a></li>
      <li className={s.item}> <span className={s.item_icon6}></span> <a>Фотографии</a></li>
      <li className={s.item}> <span className={s.item_icon7}></span> <a>Музыка</a></li>
      <li className={s.item}> <span className={s.item_icon8}></span> <a>Видео</a></li>
    </ul>
  </nav>
  </div>
}






export default Navbar;

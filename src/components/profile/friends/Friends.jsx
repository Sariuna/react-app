import React from 'react';
import s from './Friends.module.css';

const Friends = (props) => {
  return   (
    <div className={s.friends}>
      <h4 className={s.friends_title}> Друзья {props.number} </h4>
      <div className={s.friends_items}>
        <div>
          <img className={s.friends_ava} src={require("../../../images/friend.jpeg")} />
          <h5>Itachi</h5>
        </div>
        <div>
          <img className={s.friends_ava} src={require("../../../images/friend2.jpeg")} />
          <h5>Naruto</h5>
        </div>
        <div>
          <img className={s.friends_ava} src={require("../../../images/friend3.webp")} />
          <h5>Saske</h5>
        </div>
        <div>
          <img className={s.friends_ava} src={require("../../../images/friend4.jpeg")} />
          <h5>Kakashi</h5>
        </div>
      </div>
    </div>
  )
}





export default Friends;


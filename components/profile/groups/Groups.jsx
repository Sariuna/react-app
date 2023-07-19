import React from 'react';
import s from './Groups.module.css';

const Groups = (props) => {
  return   (
    <div className={s.groups}>
      <h4 className={s.groups_title}> Группы {props.number} </h4>
      <div className={s.groups_items}>
        <div className={s.groups_item}>
          <img className={s.groups_ava} src={require("../../../images/groups1.jpeg")} />
          <div className={s.groups_description}>
            <h5 className={s.item_title}>Konocha one love!</h5>
            <p> Our village...</p>
          </div>
        </div>
        <div className={s.groups_item}>
          <img className={s.groups_ava} src={require("../../../images/group2.webp")} />
          <div className={s.groups_description}>
            <h5 className={s.item_title}>Akacuki</h5>
            <p> Kill on money</p>
          </div>
        </div>
        <div className={s.groups_item}>
          <img className={s.groups_ava} src={require("../../../images/group3.webp")} />
          <div className={s.groups_description}>
            <h5 className={s.item_title}>Country fire</h5>
            <p> Fireee</p>
          </div>
        </div>
        <div className={s.groups_item}>
          <img className={s.groups_ava} src={require("../../../images/group4.jpeg")} />
          <div className={s.groups_description}>
            <h5 className={s.item_title}>Animals power</h5>
            <p> 1.2.3.4.5...9</p>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Groups;

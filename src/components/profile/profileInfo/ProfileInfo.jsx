
import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img className={s.profile_fon} src={require("../../../images" + props.fon)} />
      </div>
      <div className={s.profile_content}>
        <div className={s.profile_header_ava}>
          <img className={s.profile_ava} src={require("../../../images" + props.ava)} />
        </div>
        <div className={s.profile_description}>
          <div>
            <div>
              <h3 className={s.profile_name}> {props.name} </h3>
            </div>
            <div className={s.profile_info}>
              <span className={s.profile_city}></span>
              <p> {props.city} </p>
              <span className={s.profile_work}></span>
              <p> {props.work} </p>
              <span className={s.profile_more}></span>
              <p>Подробнее</p>
            </div>
          </div>
          <div className={s.profile_actions}>
            <button className={s.profile_btn}> Редактировать профиль</button>
            <button className={s.profile_btn}>Еще <span className={s.profile__btn_more}></span></button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfileInfo;






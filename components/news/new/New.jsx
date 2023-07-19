import React from 'react';
import s from './New.module.css';

const New = (props) => {
  return (
    <div className={s.new}>
      <img className={s.new_ava} src={require("../../../images" + props.avatar)} />
      <div className={s.new_content}>
        <h4 className={s.new_name}>{props.name}</h4>
        <div className={s.new_data}>
          {props.data}
        </div>
        <div>
          {props.message}
          <img className={s.new_img} src={require("../../../images" + props.img)} />
          <div>
            <div className={s.new_likes}>
              <span className={s.new_heart}></span>
              {props.like}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





export default New;
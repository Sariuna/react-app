import React from 'react';
import s from './PostForm.module.css';

const PostForm = (props) => {
  return   (
    <div className={s.PostForm}>
      <form className={s.PostForm_form}>
        <img className={s.PostForm_ava} src={require("../../../../images/ava.webp")} />
        <input className={s.PostForm_input} type="text" placeholder="Что у вас нового?" />
        <div className={s.PostForm_button}>
          <button className={s.button_img} type="submit"></button>
          <button className={s.button_music} type="submit"></button>
          <button className={s.button_video} type="submit"></button>
        </div>
      </form>
    </div>
  )
}





export default PostForm;


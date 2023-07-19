import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.post}>
      <img className={s.post_ava} src={require("../../../../images/ava.webp")} />
      <div className={s.post_content}>
        <h4 className={s.post_name}>{props.name}</h4>
        <div className={s.post_data}>
          {props.data}
        </div>
        <div>
          {props.message}
        </div>
      </div>
    </div>

  )

}





export default Post;


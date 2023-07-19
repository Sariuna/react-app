import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = [
    { id: 1, message: 'Hi, it is my first post', name: "Ivanov Ivan", data: "10 июля 17:15" },
    { id: 2, message: 'Hello, world!! It is my messenger', name:"Ivanov Ivan", data:"10 июля 17:15" },
    { id: 3, message: 'No way!', name: "Ivanov Ivan", data:"10 июля 17:15" },
    { id: 4, message: 'Yooooo', name: "Ivanov Ivan", data:"10 июля 17:15" },
    { id: 5, message: 'Go', name: "Ivanov Ivan", data: "10 июля 17:15" }
  ]

  let postsElements =
    posts.map ( p => <Post message={p.message} name={p.name} data={p.data} id={p.id} />)

  return   (
    <div className={s.MyPosts}>
        { postsElements }
    </div>
  )
}





export default MyPosts;


import React from 'react';
import s from './News.module.css';
import PostForm from '../profile/MyPosts/PostForm/PostForm';
import New from './new/New';

const News = (props) => {

  let news = [
    { img: "/news.jpeg", name: "Joke", avatar: "/ava2.jpeg", data: "17 июля", like: "219" },
    { img: "/news2.jpeg", name: "Joke", avatar: "/ava2.jpeg", data: "17 июля", like: "234" },
    { img: "/news3.jpeg", name: "Joke", avatar: "/ava2.jpeg", data: "17 июля", like: "339" }
  ]

  let newsElements =
    news.map(n => <New img={n.img} name={n.name} avatar={n.avatar} data={n.data} like={n.like} />)

  return <div>
    <PostForm />
    {newsElements}
  </div>
}

export default News;


import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './profileInfo/ProfileInfo';
import PostForm from './MyPosts/PostForm/PostForm';
import Friends from './friends/Friends';
import Groups from './groups/Groups';

const Profile = () => {
  return (
    <div className={s.profile}>
      <div className={s.profile_header}>
        <ProfileInfo fon="/fon.png" ava="/ava.webp" name="Ivanov Inan" city="Irkutsk" work="IT" />
      </div>
      <div className={s.profile_main}>
        <div className={s.profile_post}>
          <PostForm />
          <MyPosts />
        </div>
        <div className={s.profile_friends}>
          <Friends number="4"/>
          <Groups number="12" />
        </div>
      </div>
    </div>
  )
};

export default Profile;


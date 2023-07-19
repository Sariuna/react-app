import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './dialogItem/DialogItem';
import Message from './message/Message';

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Max" },
    { id: 2, name: "Ira" },
    { id: 3, name: "Sara" },
    { id: 4, name: "Olya" },
    { id: 5, name: "Anna" },
    { id: 6, name: "Mike" },
  ]

  let messages = [
    { id: 1, message: "Ywwow" },
    { id: 2, message: "Good luck!" },
    { id: 3, message: "Get up!" },
    { id: 4, message: "I got it" },
    { id: 5, message: "yes" },
    { id: 6, message: "Hello" },
    { id: 7, message: "Okey< xx" }
  ]

  let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

  let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;

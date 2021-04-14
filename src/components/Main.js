import React, { useEffect } from "react";
import { api } from '../utils/Api';
import Card from './Card';

const Main = (props) => {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    api.getUser()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    api.getCards()
      .then((data) => {
        setCards(data);
      })
  })

  return (
    <main className="content">
      <section className="profile page__profile-margin">
        <div className="profile__avatar-container">
          <img src={userAvatar} alt="Фото пользователя" className="profile__avatar" />
          <div className="profile__pencil-container" onClick={props.onEditAvatar}>
            <div className="profile__pencil"></div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__activity">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements page__elements-margin">

        {cards.map((item, i) => (
          <Card card={item} onCardClick={props.onCardClick} key={i} />
        ))}

      </section>
    </main>
  )
}

export default Main;
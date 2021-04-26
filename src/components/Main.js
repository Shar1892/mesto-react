import { useContext } from "react";
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, cards, onCardLike, onCardDelete }) => {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile page__profile-margin">
        <div className="profile__avatar-container">
          <img src={currentUser.avatar} alt="Фото пользователя" className="profile__avatar" />
          <div className="profile__pencil-container" onClick={onEditAvatar}>
            <div className="profile__pencil"></div>
          </div>
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          </div>
          <p className="profile__activity">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>

      <section className="elements page__elements-margin">

        {cards.map((item, i) => (
          <Card card={item} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} key={item._id} />
        ))}

      </section>
    </main>
  )
}

export default Main;

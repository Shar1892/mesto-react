import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


const App = () => {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    setEventListeners();
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    setEventListeners();
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    setEventListeners();
  }

  const handleCardClick = (data) => {
    setSelectedCard(data);
    setEventListeners();
  }

  const setEventListeners = () => {
    document.addEventListener('keydown', handleEscClose);
  }
  
  const handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
    document.removeEventListener('keydown', handleEscClose);
  }

  return (
    <div className="page">
      <Header />

      <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick ={handleCardClick}/>

      <Footer />

      <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <div className="overlay__input-container">
          <input type="text" id="user-name-input" className="overlay__input overlay__input_type_user-name" name="name" minLength="2" maxLength="40" required />
          <span className="overlay__input-error overlay__user-name-input-error"></span>
        </div>
        <div className="overlay__input-container">
          <input type="text" id="user-activity-input" className="overlay__input overlay__input_type_user-activity" name="about" minLength="2" maxLength="200" required />
          <span className="overlay__input-error overlay__user-activity-input-error"></span>
        </div>
        <button type="submit" className="overlay__save-button overlay__save-button_type_profile">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="place" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <div className="overlay__input-container">
          <input type="text" id="place-name-input" className="overlay__input overlay__input_type_place-name" placeholder="Название" name="name" minLength="2" maxLength="30" required />
          <span className="overlay__input-error overlay__place-name-input-error"></span>
        </div>
        <div className="overlay__input-container">
          <input type="url" id="place-link-input" className="overlay__input overlay__input_type_place-link" placeholder="Ссылка на картинку" name="link" required />
          <span className="overlay__input-error overlay__place-link-input-error"></span>
        </div>
        <button type="submit" className="overlay__save-button overlay__save-button_type_place">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <div className="overlay__input-container">
          <input type="url" id="avatar-input" className="overlay__input overlay__input_type_avatar" name="avatar" required />
          <span className="overlay__input-error overlay__avatar-input-error"></span>
        </div>
        <button type="submit" className="overlay__save-button overlay__save-button_type_avatar">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm name="image-remove" title="Вы уверены?">
        <button type="submit" className="overlay__confirm-button overlay__confirm-button_type_image-remove">Да</button>
      </PopupWithForm>

      {selectedCard && <ImagePopup card={selectedCard} onClose={closeAllPopups} />}
      

    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

const App = () => {
	const [currentUser, setCurrentUser] = useState({});

	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

	const [selectedCard, setSelectedCard] = useState(null);

	const [cards, setCards] = useState([]);

	useEffect(() => {
		api
			.getUser()
			.then((userData) => {
				setCurrentUser(userData);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleEditAvatarClick = () => {
		setIsEditAvatarPopupOpen(true);
		setEventListeners();
	};

	const handleEditProfileClick = () => {
		setIsEditProfilePopupOpen(true);
		setEventListeners();
	};

	const handleAddPlaceClick = () => {
		setIsAddPlacePopupOpen(true);
		setEventListeners();
	};

	const handleCardClick = (data) => {
		setSelectedCard(data);
		setEventListeners();
	};

	const setEventListeners = () => {
		document.addEventListener("keydown", handleEscClose);
	};

	const handleEscClose = (evt) => {
		if (evt.key === "Escape") {
			closeAllPopups();
		}
	};

	const closeAllPopups = () => {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setSelectedCard(null);
		document.removeEventListener("keydown", handleEscClose);
	};

	const handleUpdateUser = (data) => {
		api
			.setUserData(data)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdateAvatar = (data) => {
		api
			.setUserAvatar(data)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		api
			.getCards()
			.then((data) => {
				setCards(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleClickLike = (card) => {
		const isLiked = card.likes.some((liker) => liker._id === currentUser._id);
		api
			.changeLikeCardStatus(card._id, isLiked)
			.then((newCard) => {
				setCards((cards) =>
					cards.map((crd) => (crd._id === card._id ? newCard : crd))
				);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleCardDelete = (card) => {
		api
			.removeCard(card._id)
			.then(() => {
				setCards((cards) => cards.filter((crd) => crd._id !== card._id));
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleAddPlaceSubmit = (card) => {
		api
			.createCard(card)
			.then((newCard) => {
				setCards([newCard, ...cards]);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<div className="page">
			<CurrentUserContext.Provider value={currentUser}>
				<Header />

				<Main
					onEditAvatar={handleEditAvatarClick}
					onEditProfile={handleEditProfileClick}
					onAddPlace={handleAddPlaceClick}
					onCardClick={handleCardClick}
					cards={cards}
					onCardLike={handleClickLike}
					onCardDelete={handleCardDelete}
				/>

				<Footer />

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlaceSubmit}
				/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>

				<PopupWithForm name="image-remove" title="???? ???????????????">
					<button
						type="submit"
						className="overlay__confirm-button overlay__confirm-button_type_image-remove"
					>
						????
					</button>
				</PopupWithForm>

				{selectedCard && (
					<ImagePopup card={selectedCard} onClose={closeAllPopups} />
				)}
			</CurrentUserContext.Provider>
		</div>
	);
};

export default App;

import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
	const currentUser = useContext(CurrentUserContext);

	const [name, setName] = useState("");
	const [discription, setDiscription] = useState("");

	const handleChangeName = (evt) => {
		setName(evt.target.value);
	};

	const handleChangeDiscription = (evt) => {
		setDiscription(evt.target.value);
	};

	useEffect(() => {
		setName(currentUser.name);
		setDiscription(currentUser.about);
	}, [currentUser]);

	const handleSubmit = (evt) => {
		evt.preventDefault();

		onUpdateUser({
			name,
			about: discription,
		});
	};

	return (
		<PopupWithForm
			name="profile"
			title="Редактировать профиль"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<div className="overlay__input-container">
				<input
					type="text"
					id="user-name-input"
					className="overlay__input overlay__input_type_user-name"
					name="name"
					value={name || ""}
					onChange={handleChangeName}
					minLength="2"
					maxLength="40"
					required
				/>
				<span className="overlay__input-error overlay__user-name-input-error"></span>
			</div>
			<div className="overlay__input-container">
				<input
					type="text"
					id="user-activity-input"
					className="overlay__input overlay__input_type_user-activity"
					name="about"
					value={discription || ""}
					onChange={handleChangeDiscription}
					minLength="2"
					maxLength="200"
					required
				/>
				<span className="overlay__input-error overlay__user-activity-input-error"></span>
			</div>
			<button
				type="submit"
				className="overlay__save-button overlay__save-button_type_profile"
			>
				Сохранить
			</button>
		</PopupWithForm>
	);
};

export default EditProfilePopup;

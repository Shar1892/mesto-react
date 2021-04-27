import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
	const [name, setName] = useState("");
	const [link, setLink] = useState("");

	const handleChangeName = (evt) => {
		setName(evt.target.value);
	};

	const handleChangeLink = (evt) => {
		setLink(evt.target.value);
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();

		onAddPlace({
			name,
			link,
		});
	};

	return (
		<PopupWithForm
			name="place"
			title="Новое место"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<div className="overlay__input-container">
				<input
					type="text"
					id="place-name-input"
					className="overlay__input overlay__input_type_place-name"
					placeholder="Название"
					name="name"
					value={name}
					onChange={handleChangeName}
					minLength="2"
					maxLength="30"
					required
				/>
				<span className="overlay__input-error overlay__place-name-input-error"></span>
			</div>
			<div className="overlay__input-container">
				<input
					type="url"
					id="place-link-input"
					className="overlay__input overlay__input_type_place-link"
					placeholder="Ссылка на картинку"
					name="link"
					value={link}
					onChange={handleChangeLink}
					required
				/>
				<span className="overlay__input-error overlay__place-link-input-error"></span>
			</div>
			<button
				type="submit"
				className="overlay__save-button overlay__save-button_type_place"
			>
				Сохранить
			</button>
		</PopupWithForm>
	);
};

export default AddPlacePopup;

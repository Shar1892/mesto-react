import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
	const inputAvatar = useRef();

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateAvatar({
			avatar: inputAvatar.current.value,
		});
	}

	return (
		<PopupWithForm
			name="avatar"
			title="Обновить аватар"
			isOpen={isOpen}
			onClose={onClose}
			onSubmit={handleSubmit}
		>
			<div className="overlay__input-container">
				<input
					ref={inputAvatar}
					type="url"
					id="avatar-input"
					className="overlay__input overlay__input_type_avatar"
					name="avatar"
					required
				/>
				<span className="overlay__input-error overlay__avatar-input-error"></span>
			</div>
			<button
				type="submit"
				className="overlay__save-button overlay__save-button_type_avatar"
			>
				Сохранить
			</button>
		</PopupWithForm>
	);
};

export default EditAvatarPopup;

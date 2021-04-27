import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
	const currentUser = useContext(CurrentUserContext);

	const isOwn = card.owner._id === currentUser._id;
	const isLiked = card.likes.some((liker) => liker._id === currentUser._id);

	const handelClick = () => {
		onCardClick(card);
	};

	const handleLikeClick = () => {
		onCardLike(card);
	};

	const handleDeleteClick = () => {
		onCardDelete(card);
	};

	return (
		<div className="element">
			<button
				className={`element__basket ${
					isOwn ? "" : "element__basket_type_hidden"
				}`}
				type="button"
				onClick={handleDeleteClick}
			></button>
			<img
				src={card.link}
				alt={card.name}
				className="element__photo"
				onClick={handelClick}
			/>
			<div className="element__container">
				<h2 className="element__name">{card.name}</h2>
				<div className="element__like-container">
					<button
						className={`element__like ${isLiked ? "element__like_active" : ""}`}
						type="button"
						onClick={handleLikeClick}
					></button>
					<p className="element__like-counter">
						{card.likes ? card.likes.length : 0}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;

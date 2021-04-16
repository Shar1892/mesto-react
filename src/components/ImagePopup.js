const ImagePopup = ({card, onClose}) => {
  return (
    <section
      className="overlay overlay_type_image page__popup_opened"
      onClick={
        (evt) => {
          if (evt.target === evt.currentTarget) {
            onClose();
          }
          if (evt.target.classList.contains('overlay__close')) {
            onClose();
          }
        }
      }
    >
      <div className="overlay__image-contauner">
        <button className="overlay__close" type="reset"></button>
        <img src={card.link} alt={card.name} className="overlay__image" />
        <h2 className="overlay__image-name">{card.name}</h2>
      </div>
    </section>
  )
}

export default ImagePopup;
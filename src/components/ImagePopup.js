const ImagePopup = (props) => {
  return (
    <section
      className={props.card ? "overlay overlay_type_image page__popup_opened" : "overlay overlay_type_image"}
      onClick={
        (evt) => {
          if (evt.target.classList.contains('page__popup_opened')) {

            props.onClose();
          }
          if (evt.target.classList.contains('overlay__close')) {

            props.onClose();
          }
        }
      }
    >
      <div className="overlay__image-contauner">
        <button className="overlay__close" type="reset"></button>
        <img src={props.card.link} alt={props.card.name} className="overlay__image" />
        <h2 className="overlay__image-name">{props.card.name}</h2>
      </div>
    </section>
  )
}

export default ImagePopup;


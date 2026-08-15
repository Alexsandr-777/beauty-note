import "./RoleCard.css";
function RoleCard({ title, description, image, onClick, variant }) {
  return (
    <div className={`roleCardContainer ${variant}`}>
      <div className="roleCardLeft">
        <h2 className="rolecardTitle">{title}</h2>
        <p className="roleCardDescription">{description}</p>
      </div>
      <div className="roleCardRight">
        <img className="imgRoleCard" src={image} alt="" />
        <button className="roleCardButton" onClick={onClick}>
          ➡️
        </button>
      </div>
    </div>
  );
}

export default RoleCard;

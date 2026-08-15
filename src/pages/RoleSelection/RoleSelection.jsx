import BackButton from "../../components/ui/BackButton/BackButton";
import RoleCard from "./RoleCard";
import LoginPrompt from "../../components/LoginPrompt";
import "./RoleSelection.css";
import imageCosmetolog from "../../assets/CosmetologRoleImg.png";
import imageKlient from "../../assets/KlientRoleImg.png";

function RoleSelection() {
  const handleClick = () => {
    console.log("Press Button");
  };
  return (
    <main className="roleSelectionContainer">
      <BackButton onClick={handleClick} />
      <h1 className="roleSelectionTitle">
        Как вы будете использовать приложение?
      </h1>
      <p className="roleSelectionDescription">
        Приложение для работы и личного контроля записей
      </p>
      <RoleCard
        title="Я косметолог"
        description="Клиенты, записи,процедуры и материалы"
        image={imageCosmetolog}
        onClick={handleClick}
        variant="cosmetolog"
      />
      <RoleCard
        title="Я клиент"
        description="Мои записи, история процедур и календарь"
        image={imageKlient}
        onClick={handleClick}
        variant="client"
      />
      <LoginPrompt />
    </main>
  );
}

export default RoleSelection;

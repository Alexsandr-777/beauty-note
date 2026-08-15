import "./LandingPage.css";
import BenefitsLanding from "./BenefitsLanding";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";

function LandingPage() {
  const handleClick = () => {
    console.log("Кнопка нажата");
  };
  return (
    <main className="landingContainer">
      <div className="landing">
        <h1 className="nameLanding">Beauty Note</h1>
        <h1 className="title">Каждая процедура в нужный момент</h1>
        <BenefitsLanding />

        <div className="landingActions">
          <PrimaryButton buttonText="Начать" onClick={handleClick} />
          <span className="loginPrompt">
            Уже есть аккаунт?
            <a className="loginLink" href="#">
              "Войти"
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}

export default LandingPage;

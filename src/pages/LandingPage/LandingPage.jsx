import "./LandingPage.css";
import BenefitsLanding from "./BenefitsLanding";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import LoginPrompt from "../../components/LoginPrompt";

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
          <LoginPrompt />
        </div>
      </div>
    </main>
  );
}

export default LandingPage;

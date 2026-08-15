import "./BenefitsLanding.css";
import { benefitsData } from "./data";

function BenefitsLanding() {
  return (
    <div className="benefitsContainer">
      <ul className="benefitsList">
        {benefitsData.map((benefit) => (
          <li className="benefitItem" key={benefit.id}>
            <span className="benefitIcon">{benefit.icon} </span>
            <span className="benefitText">{benefit.text} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BenefitsLanding;

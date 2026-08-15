import "./PrimaryButton.css";
function PrimaryButton({ buttonText, onClick }) {
  return <button onClick={onClick}>{buttonText}</button>;
}

export default PrimaryButton;

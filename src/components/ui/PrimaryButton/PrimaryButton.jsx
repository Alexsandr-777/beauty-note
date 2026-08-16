import "./PrimaryButton.css";
function PrimaryButton({ buttonText, onClick, type }) {
  return (
    <button onClick={onClick} type={type}>
      {buttonText}
    </button>
  );
}

export default PrimaryButton;

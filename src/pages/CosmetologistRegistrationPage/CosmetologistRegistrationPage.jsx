import { useState } from "react";
import BackButton from "../../components/ui/BackButton/BackButton";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import LoginPrompt from "../../components/LoginPrompt";
import "./CosmetologistRegistrationPage.css";

function CosmetologistRegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    passord: "",
    repeadPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit :", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  return (
    <main className="cosmetologistRegistrationContainer">
      <BackButton />
      <h2 className="cosmetologistRegistrationTitle">
        Создать кабинет косметолога
      </h2>
      <p className="cosmetologistRegistrationDescr">
        Заполните данные чтобы начать
      </p>
      <form onSubmit={handleSubmit} className="cosmetologistRegistrationForm">
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="repeadPassword"
          placeholder="Повторите пароль"
          value={formData.repeadPassword}
          onChange={handleChange}
        />
        <PrimaryButton type="submit" buttonText="Создать аккаунт" />
      </form>

      <LoginPrompt />
    </main>
  );
}

export default CosmetologistRegistrationPage;

import { useState } from "react";
//import styles from "../styles/Sign.module.css";

export const SignUp = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    password: "",
    tipoUsuario: "CLIENTE"
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const signUp = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const status = response.status;
    const data = await response.json();
    if (status === 200) {
      navigate("/productos");
    } else {
      setAlert({ message: data.message, type: "error", show: true });
    }
  };

  return (
    <div className="">
      <div className=""></div>
      <div className="">
        <form className="" onSubmit={signUp}>
          <h1 className="">Registrarse</h1>
          <div className="">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              placeholder="nombre"
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              placeholder="apellido"
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              placeholder="correo"
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              placeholder="contraseña"
              onChange={handleInputChange}
            />
          </div>
          <button className="" type="button">
            Registrarse
          </button>
          <button className="" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
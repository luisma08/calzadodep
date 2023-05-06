import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import styles from "../styles/Sign.module.css";

export const SignIn = () => {
  const [userData, setUserData] = useState({ correo: "", password: "" });
  const [alert, setAlert] = useState({ message: "", type: "", show: false });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const signIn = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const status = response.status;
    const data = await response.json();

    if (status === 200) {
      localStorage.setItem("token", data.content);
      navigate("/tareas");
    } else {
      setAlert({ message: data.message, type: "error", show: true });
    }
  };

  return (
    <div className="">
      <div className=""></div>
      <div className="">
        <form onSubmit={signIn} className="">
          <h1 className="">Ingresar</h1>
          <div className="">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="correo"
              placeholder="Correo"
              onChange={handleInputChange}
            />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <button className="" type="submit">
            Iniciar Sesión
          </button>
          <button
            className=""
            type="button"
            onClick={() => navigate("/registrarse")}
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};
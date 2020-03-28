import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import HeroesImage from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function Logon() {
  const [id, setID] = useState("");
  const history = useHistory();

  async function handleLogon(e) {
    e.preventDefault();
    const data = {
      id
    };

    try {
      const response = await api.post('session', data)
      //console.log(response.data)
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)
      // alert(`Bem vindo ${response.data.name}`)      
      history.push('/profile')
    } catch (error) {
      alert('Erro ao logar.')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={LogoImg} alt="" />
        <form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setID(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Quero cadastrar
          </Link>
        </form>
      </section>

      <img src={HeroesImage} alt="Heroes" />
    </div>
  );
}

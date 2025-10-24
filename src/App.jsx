import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    instagram: "",
    github: "",
    pensamento: "",
    probleminha: "",
    ultimaSerie: "",
    ultimoJogo: "",
    musica: "",
    genero: "",
    habilidadeEspecial: "",
    poderEspecial: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Informações enviadas:", formData);
  };

  return (
    <div className="formulario-neymar">
      <h1>Formulário de Informações</h1>

      {}
      <div className="imagem">
        <p>Foto</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grupo">
          <label>Nome:</label>
          <input
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="grupo">
          <label>Idade:</label>
          <input
            name="idade"
            value={formData.idade}
            onChange={handleChange}
            placeholder="Digite sua idade"
          />
        </div>

        <div className="grupo">
          <label>Telefone:</label>
          <input
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Digite seu telefone"
          />
        </div>

        <div className="grupo">
          <label>Instagram:</label>
          <input
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="@seuinstagram"
          />
        </div>

        <div className="grupo">
          <label>Github:</label>
          <input
            name="github"
            value={formData.github}
            onChange={handleChange}
            placeholder="Seu perfil no GitHub"
          />
        </div>

        <div className="grupo">
          <label>Pensamento:</label>
          <input
            name="pensamento"
            value={formData.pensamento}
            onChange={handleChange}
            placeholder="Escreva um pensamento"
          />
        </div>

        <div className="grupo">
          <label>Probleminha:</label>
          <input
            name="probleminha"
            value={formData.probleminha}
            onChange={handleChange}
            placeholder="Um problema"
          />
        </div>

        <div className="grupo">
          <label>Última Série:</label>
          <input
            name="ultimaSerie"
            value={formData.ultimaSerie}
            onChange={handleChange}
            placeholder="Qual série assistiu por último?"
          />
        </div>

        <div className="grupo">
          <label>Último Jogo:</label>
          <input
            name="ultimoJogo"
            value={formData.ultimoJogo}
            onChange={handleChange}
            placeholder="Qual jogo jogou por último?"
          />
        </div>

        <div className="grupo">
          <label>Música:</label>
          <input
            name="musica"
            value={formData.musica}
            onChange={handleChange}
            placeholder="Música favorita"
          />
        </div>

        <div className="grupo">
          <label>Gênero:</label>
          <input
            name="genero"
            value={formData.genero}
            onChange={handleChange}
            placeholder="Masculino ou feminino"
          />
        </div>

        <div className="grupo">
          <label>Habilidade Especial:</label>
          <input
            name="habilidadeEspecial"
            value={formData.habilidadeEspecial}
            onChange={handleChange}
            placeholder="Habilidade especial"
          />
        </div>

        <div className="grupo">
          <label>Poder Especial:</label>
          <input
            name="poderEspecial"
            value={formData.poderEspecial}
            onChange={handleChange}
            placeholder="Seu poder especial"
          />
        </div>

        <div className="grupo">
          <label>Time que Torce:</label>
          <input
            name="time"
            value={formData.time}
            onChange={handleChange}
            placeholder="Seu time do coração"
          />
        </div>

        <button type="submit">Enviar Informações</button>
      </form>
    </div>
  );
}

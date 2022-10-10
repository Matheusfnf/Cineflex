import React, { useEffect } from "react";
import { Titulo } from "./EscolhaDeFilmeStyle";
import { FilmeContainer } from "./EscolhaDeFilmeStyle";
import axios from "axios";
import { useState } from "react";
import Filme from "../Filme";
import { Link } from "react-router-dom";

export default function EscolhaDeFilme() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promise = axios.get(URL);

    promise.then((res) => {
      console.log(res.data);
      setFilmes(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <>
      <Titulo>
        <h2>Selecione o filme</h2>
      </Titulo>
      <FilmeContainer>
        {filmes.map((img) => (
          <Link style={{textDecoration: 'none'}} key={img.id} to={`/sessoes/${img.id}`}>
            <Filme img={img} />{" "}
          </Link>
        ))}
      </FilmeContainer>
    </>
  );
}

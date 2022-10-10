import React, { useEffect, useState } from "react";

import {
  AssentosStyled,
  Container,
  ContainerDisponivel,
  ContainerIndisponivel,
  ContainerSelecionado,
  Directionul,
  FilmeSelecionado,
  HoraEDia,
  ImagemEtitulo,
  ParagrafoEHora,
  Titulo,
} from "./EscolhaDeAssentostyles";
import { Inputstyled } from "./EscolhaDeAssentostyles";
import { Nomestyled } from "./EscolhaDeAssentostyles";
import { ReservarStyled } from "./EscolhaDeAssentostyles";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function EscolhaDeAssento() {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [id, setId] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [horario, setHorario] = useState(["teste"]);
  const [img, setImg] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  function chooseSeat(seat, e) {
    if (seat.isAvailable) {
      if (e.target.id == "clicado") {
        e.target.id = "";
        const arr = [...id];
        const index = arr.indexOf(seat.name);
        arr.splice(index, 1);

        return setId(arr);
      } else {
        e.target.id = "clicado";
        return setId([...id, seat.name]);
      }
    }

    return alert("Assento indisponível");
  }

  function validaErro() {
    let errors = "";
    if (name.length < 3 || name == undefined) {
      errors = errors + " Preencha os campos corretamente";
    }
    if (cpf.length !== 11) {
      errors = errors + " O CPF precisa ter 11 dígitos;";
    }
    if (!Number(cpf)) {
      errors = errors + " O CPF só pode ter números;";
    }

    if (errors.length > 1) {
      alert(errors);
      return false;
    }

    return true;
  }

  const { ide } = useParams();
  const { hora } = useParams();
  const { dia } = useParams();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${ide}/seats`
      );
      setSeats(response.data);
    })();

    (async () => {
      const resposta = await axios.get(
        `https://mock-api.driven.com.br/api/v5/cineflex/movies/${ide}/showtimes`
      );
      setImg(resposta.data);
    })();
  }, []);

  const handlePost = async () => {
    if (!validaErro()) return;
    try {
      const response = await axios.post(
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
        {
          ids: id,
          name,
          cpf,
        }
      );
      const userObj = {
        nome: name,
        cpf: cpf,
        assento: id,
      };
      setCookie("user", userObj, { path: "/" });
      if (response.status == 200) {
        navigate(`/sucesso/${id}/${img.title}/${hora}`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Titulo>
        <h2>Selecione o(s) assento(s) </h2>
      </Titulo>

      <Directionul>
        {seats?.seats?.map((seat) => {
          return (
            <AssentosStyled
              onClick={(e) => {
                chooseSeat(seat, e);
              }}
              key={seat.id}
              style={{ background: seat.isAvailable ? "#c3cfd9" : "#fbe192" }}
            >
              {seat.name}
            </AssentosStyled>
          );
        })}
      </Directionul>

      <Container>
        <ContainerSelecionado>
          <div></div>
          <p>Selecionado</p>{" "}
        </ContainerSelecionado>
        <ContainerDisponivel>
          <div></div>
          <p>Disponível</p>
        </ContainerDisponivel>
        <ContainerIndisponivel>
          <div></div>
          <p>Indisponível</p>{" "}
        </ContainerIndisponivel>
      </Container>

      <Nomestyled>
        <label htmlFor="cpf">Nome do comprador:</label>
      </Nomestyled>
      <Inputstyled>
        <input
          type="text"
          placeholder="Digite seu nome..."
          name="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Inputstyled>
      <Nomestyled>
        <label htmlFor="cpf">CPF do comprador:</label>
      </Nomestyled>
      <Inputstyled>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          name="cpf"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </Inputstyled>
      <ReservarStyled>
        <button onClick={() => handlePost()}>Reservar assentos</button>
      </ReservarStyled>

      <FilmeSelecionado>
       <ImagemEtitulo> <img src={img?.posterURL} /> <h1> {img?.title} </h1> </ImagemEtitulo>
         <ParagrafoEHora>  <p>{dia}</p>  <p>{hora}</p></ParagrafoEHora>
      </FilmeSelecionado>
    </>
  );
}

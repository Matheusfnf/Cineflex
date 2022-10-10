import React, { useEffect, useState } from "react";
import {
  DiaStyled,
  Titulo,
  HoraStyled,
  HoraContainer,
  FilmeSelecionado,
  FilmeSelecionadoContainer,
} from "./EscolhaDeHorariostyles";
import enola from "../images/enola.png";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function EscolhaDeHorario() {
  const [horario, setHorario] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`;
    const promise = axios.get(URL);

    promise.then((res) => {
      console.log(res.data);
      setHorario(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  return (
    <>
      <Titulo>
        <h2>Selecione o horário</h2>
      </Titulo>
      {horario?.days?.map((day) => {
        return (
          <React.Fragment key={day.id}>
            <DiaStyled>
              {day.weekday} - {day.date}
            </DiaStyled>
            {day.showtimes.map((showtime) => {
              return (
                <HoraStyled key={showtime.id}>
                  <HoraContainer>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/assentos/${id}/${showtime.name}/${day.weekday}`}
                    >
                      {" "}
                      <p className="primeiro-horario">{showtime.name}</p>{" "}
                    </Link>
                  </HoraContainer>
                </HoraStyled>
              );
            })}
            <FilmeSelecionado>
              <img src={horario.posterURL} /> <h1>{horario.title} </h1>
            </FilmeSelecionado>
          </React.Fragment>
        );
      })}
      {/* {Object.values(horario).map((horario, i) => {
        return (
          <>
            <DiaStyled>
              <h3>{`${horario.days[i].weekday}``${horario.days[i].date}`}</h3>
            </DiaStyled>

            <HoraStyled>
              <HoraContainer>
                <p className="primeiro-horario">
                  `${horario.days[i].showtimes.name}`
                </p>
              </HoraContainer>
            </HoraStyled>

            
          </>
        );
      })} */}
    </>
  );
}

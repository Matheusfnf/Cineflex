import React from "react";
import { EscolhaFilme } from "./EscolhaDeFilmeStyle";
import { Titulo } from "./EscolhaDeFilmeStyle";
import { FilmeContainer } from "./EscolhaDeFilmeStyle";

export default function EscolhaDeFilme(){
    return(
        <>
        <Titulo><h2>Selecione o filme</h2></Titulo>
        <FilmeContainer>
        <EscolhaFilme />
        <EscolhaFilme />
        <EscolhaFilme />
        <EscolhaFilme />
        </FilmeContainer>
        </>
    )
}
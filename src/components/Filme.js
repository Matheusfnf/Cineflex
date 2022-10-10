import { EscolhaFilme, FilmeContainer } from "./EscolhaDeFilme/EscolhaDeFilmeStyle";

export default function Filme({img}){
    return  <FilmeContainer > <img src = {img.posterURL} /> </FilmeContainer>

}
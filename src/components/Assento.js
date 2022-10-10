import { FilmeContainer } from "./EscolhaDeFilme/EscolhaDeFilmeStyle";

export default function Assento({ img }) {
  return (
    <FilmeContainer>
      {" "}
      <img src={img.posterURL} />{" "}
    </FilmeContainer>
  );
}

import { Container, Titulo, VoltarHomeStyled } from "./SucessoStyles";
import { Link, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Sucesso() {
  const [cookies] = useCookies(["user"]);

  const { filme } = useParams()
  const { hora } = useParams()
  

  return (
    <>
      <Container>
        <Titulo>
          <h2>Pedido feito com sucesso!</h2>
        </Titulo>
        <h2>Filme e sessão</h2>
        <p>{filme}</p>
        <p>{hora}</p>
        <h2>Ingressos</h2>
        {cookies?.user?.assento.map((assento, index) => {
          return <p key={index}>Assento {String(assento)}</p>;
        })}
        <h2>Comprador</h2>
        <p>Nome: {cookies?.user?.nome} </p>
        <p>CPF: {cookies?.user?.cpf} </p>
      </Container>
      <VoltarHomeStyled>
        <Link style={{ textDecoration: "none" }} to="/">
          <p>Voltar para Home</p>
        </Link>
      </VoltarHomeStyled>
    </>
  );
}

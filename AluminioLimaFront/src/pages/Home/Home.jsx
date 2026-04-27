import { apiGet } from "../../hooks/apiGet"
import { useAuth } from "../../hooks/useAuth"

function Home(){
  const {data, loading, error} = apiGet("/me/");
  const { logout } = useAuth();

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar</p>;

  return(
    <div>
      <h1>Bem-vindo, {data.username}</h1>
      <button onClick={logout}>SAIR</button>
    </div>
  );
}

export default Home;
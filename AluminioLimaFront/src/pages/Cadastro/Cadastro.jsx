import InputText from "../../components/Input/Input"
import Titulo from "../../components/Titulo/Titulo";
import Button from "../../components/Button/Button";
import style from "./Cadastro.module.css"
import { apiPost } from "../../hooks/apiPost";
import { useState } from "react";
function Cadastro(){
  const {send, loading, error} = apiPost();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const data = await send("/cadastrar/", {username, password});
      console.log(data["code"]);
      window.location.href = "/login";
    }catch (err){
      console.log(err);
    }
  }
  console.log
  return (
    <div className={style["containerForm"]}>
      <form onSubmit={handleSubmit} method="post">
        <div className="text-center">
          <Titulo text="Cadastrar"/>

        </div>
        <div className={style["input"]}>
          <InputText label="Nome de Usuário:" onChange={(e) => setUsername(e.target.value)}/>
          <InputText label="password:" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div className="center">
          <Button type="submit" text={loading ? "Carregando" : "Cadastrar "} />
        </div>
        <a href="/login/">Ja tem uma conta? Entre</a>

      </form>
    </div>
  );
}

export default Cadastro;
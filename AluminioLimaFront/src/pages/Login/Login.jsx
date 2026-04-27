  import InputText from "../../components/Input/Input"
  import Titulo from "../../components/Titulo/Titulo";
  import Button from "../../components/Button/Button";
  import style from "./Login.module.css"
  import { apiPost } from "../../hooks/apiPost";
  import { apiGet } from "../../hooks/apiGet";
  import { useState } from "react";
  function Login(){
    const {send, loading, error} = apiPost();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const data = await send("/login/", {username, password});
        localStorage.setItem("token", data.access);
        window.location.href = "/";
      }catch (err){
        console.log(err);
      }
    }


    return (
      <div className={style["containerForm"]}>
        <form onSubmit={handleSubmit} action="/" method="post">
          <div className="text-center">
            <Titulo text="Login"/>

          </div>
          <div className={style["input"]}>
            <InputText label="Nome de Usuário:" onChange={(e) => setUsername(e.target.value)}/>
            <InputText label="password:" onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="center">
            <Button type="submit" text={loading ? "Carregando" : "Cadastrar "} />
          </div>
          <a href="/cadastrar/">Não tem uma conta? Crie uma</a>
        </form>
      </div>
    );
  }

  export default Login;
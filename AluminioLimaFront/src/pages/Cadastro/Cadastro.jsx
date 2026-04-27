  import InputText from "../../components/Input/Input"
  import Titulo from "../../components/Titulo/Titulo";
  import Button from "../../components/Button/Button";
  import style from "./Cadastro.module.css"
  import { apiPost } from "../../hooks/apiPost";
  import { useState } from "react";
  function Login(){
    const {send, loading, error} = apiPost();
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const data = await send("/cadastrar/", {usuario, senha});
        console.log(data["code"]);
      }catch (err){
        console.log(err);
      }
    }

    return (
      <div className={style["containerForm"]}>
        <form onSubmit={handleSubmit} method="post">
          <div className="text-center">
            <Titulo text="Cadastrar"/>

          </div>
          <div className={style["input"]}>
            <InputText label="Nome de Usuário:" onChange={(e) => setUsuario(e.target.value)}/>
            <InputText label="Senha:" onChange={(e) => setSenha(e.target.value)}/>
          </div>

          <div className="center">
            <Button type="submit" text={loading ? "Carregando" : "Cadastrar "} />
          </div>
        </form>
      </div>
    );
  }

  export default Login;
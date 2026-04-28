  import InputText from "../../components/Input/Input"
  import Titulo from "../../components/Titulo/Titulo";
  import Button from "../../components/Button/Button";
  import style from "./Login.module.css"
  import { apiPost } from "../../hooks/apiPost";
  import { apiGet } from "../../hooks/apiGet";
  import { useState } from "react";
  import { useEffect } from "react";


  const finishLogin = (data) => {
    localStorage.setItem("token", data.access);
    localStorage.setItem("refresh", data.refresh);
    window.location.href = "/";
  };
  function Login(){
    const {send, loading, error} = apiPost();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        const data = await send("/login/", {username, password});
        finishLogin(data);
      }catch (err){
        console.log(err);
      }
    }

    useEffect(() => {
      if (!window.google || window.googleInitialized) return;

      window.googleInitialized = true;

      window.google.accounts.id.initialize({
        client_id: "498588662137-q887ccvfoaa1c3viit8eqb62t1e46bbh.apps.googleusercontent.com",
        callback: handleCredentialResponse
      });

      window.google.accounts.id.renderButton(
        document.getElementById("google-btn"),
        { theme: "outline", size: "middle" }
      );
    }, []);

    const handleCredentialResponse = async (response) => {
      try{
        const id_token = response.credential;

        await send("/google-login/", {
          token: id_token
        });
        // finishLogin(response);
      }catch(err){
        console.log(err)
      }
    };
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
          <div id="google-btn"></div>
          <a href="/cadastrar/">Não tem uma conta? Crie uma</a>
        </form>
        <script src="https://accounts.google.com/gsi/client" async defer></script>
      </div>
    );
  }

  export default Login;
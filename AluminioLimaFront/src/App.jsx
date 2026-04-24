import { useEffect } from "react";
import api from "./services/api.js";

function App() {
  useEffect(() => {
    api.get("/teste/")
      .then(response => {
        console.log("Resposta da API:", response.data);
      })
      .catch(error => {
        console.error("Erro:", error);
      });
  }, []);

  return <h1>Testando API...</h1>;
}

export default App;
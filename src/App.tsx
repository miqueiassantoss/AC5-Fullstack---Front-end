import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  createText as createTextService,
  getText as getTextService,
} from "./services";
interface response {
  texto: string;
}
function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState({} as response);

  const GetText = async () => {
    try {
      const data = await getTextService();
      setResponse(data);
    } catch (erro) {
      alert(erro);
    }
  };

  const CreateText = (event: React.FormEvent) => {
    event.preventDefault();
    const Data = {
      texto: text,
    };
    try {
      createTextService(Data);
    } catch (erro) {
      alert(erro);
    }
    GetText();
  };

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          CreateText(e);
        }}
      >
        <label htmlFor="">Texto:</label>
        <textarea onChange={(e) => setText(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      <div className="">
        <h1>Retorno</h1>
        {response ? <h2 className="response">{response.texto}</h2> : null}
      </div>
    </div>
  );
}

export default App;

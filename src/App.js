import React, { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

import styled from "@emotion/styled";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

function App() {
  const [resumen, guardarResumen] = useState({});
  const [cargando, guardarCargando] = useState(false);
  const { datos, cotizacion } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguro" />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />
        {cargando ? <Spinner></Spinner> : null}
        {datos ? <Resumen datos={datos} /> : null}
        {cotizacion && cotizacion !== 0 && !cargando ? (
          <Resultado cotizacion={cotizacion} />
        ) : (
          <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
        )}
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;

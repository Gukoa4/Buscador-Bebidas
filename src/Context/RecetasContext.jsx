import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [busqueda, buscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [consultar, setConsultar] = useState(false);

  //llamando a la api
  useEffect(() => {
    const { nombre, categoria } = busqueda;

    if (consultar) {
      const obtenerReceta = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const respuesta = await axios.get(url);
        setRecetas(respuesta.data.drinks);
      };
      obtenerReceta();
    }
  }, [busqueda]);

  return (
    <RecetasContext.Provider
      value={{
        buscarRecetas,
        setConsultar,
      }}
    >
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;

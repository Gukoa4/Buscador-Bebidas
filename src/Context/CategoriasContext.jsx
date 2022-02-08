import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

//crear el Context

export const CategoriasContext = createContext();

//Provider

const CategoriasProvider = (props) => {
  const [categorias, setCategorias] = useState([]);

  //lamado api
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const categorias = await axios(url);
      setCategorias(categorias.data.drinks);
    
    
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;

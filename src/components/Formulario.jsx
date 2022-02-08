import React, { useContext, useState } from "react";
import { CategoriasContext } from "../Context/CategoriasContext";
import {RecetasContext} from "../Context/RecetasContext"

const Formulario = () => {
    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    });
    const { categorias } = useContext(CategoriasContext);
    const { buscarRecetas, setConsultar } = useContext(RecetasContext)

    //funcion leer contenido
    const obtenerDatosReceta = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value 
        })
    }
  return (
    <form 
        className="col-12"
        onSubmit={e =>{
            e.preventDefault();
            buscarRecetas(busqueda);
            setConsultar(true);
        }}
        >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoria o Ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select 
          className="form-control" 
          name="categoria" 
          onChange={obtenerDatosReceta}>
            <option value="">--Selecciona Categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            value="Buscar Bebidas"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./reservaLibro.module.css";
import axios from "axios";

const Libro = ({ libro, refreshData }) => {
  const [libroId, setlibroId] = useState(libro.libro_id);
  const [nombreLibro, setNombreLibro] = useState(libro.nombre_libro);
  const [nombreAutor, setNombreAutor] = useState(libro.nombre_autor);
  const [cantidadDisponible, setCantidadDisponible] = useState(libro.cantidad_disponible);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3008/reservarlibro/${libroId}`, {
        nombre_autor: nombreAutor,
        nombre_libro: nombreLibro,
        cantidad_disponible: cantidadDisponible,

      });
      refreshData();
      // Redirect or show success message upon successful update
    } catch (error) {
      console.error("Error updating libro:", error);
    }
  };

  return (
    <div className={styles.Libro} data-testid="Libro">
      Libro: {libro.nombre_libro} - {libro.nombre_autor} - {libro.cantidad_disponible}
      <button onClick={() => deleteLibro(libro.libro_id)}>Eliminar</button>
      <button onClick={() => setEdit(!edit)}>Edit</button>
      <div style={{ display: edit ? "block" : "none" }}>
        <hr />
        <form onSubmit={handleSubmit}>
          <label>
            Nombre del Libro:
            <input
              type="text"
              value={nombreLibro}
              onChange={(e) => setNombreLibro(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Autor:
            <input
              type="text"
              value={nombreAutor}
              onChange={(e) => setNombreAutor(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Cantidad Disponible:
            <input
              type="text"
              value={cantidadDisponible}
              onChange={(e) => setCantidadDisponible(e.target.value)}
              required
            />
          </label>
        </form>{" "}
        <hr />
      </div>
    </div>
  );
};

Libro.propTypes = {};

Libro.defaultProps = {};

export default Libro;
import React, { Component } from "react"

export default class NoData extends Component {
  render() {
    return (
        <React.Fragment>
          <div className="info">
            <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
            <ul>
              <li>Revisá la ortografía de la palabra.</li>
              <li>Utilizá palabras más genéricas o menos palabras.</li>
            </ul>
          </div>
        </React.Fragment>
    );
  }
}
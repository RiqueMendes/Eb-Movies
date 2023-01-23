import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import movies from "./MovieList";
import "../App.css";

function MoviesCountry() {
  movies.sort(function (a, b) {
    return a.country < b.country ? -1 : a.country > b.country ? 1 : 0;
  });
  return movies.map((c) => (
    <div className="moviesContainer" key={c.id}>
      <div>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img className="image" src={c.image} alt="Foto do filme" />
          <Card.Body>
            <Card.Title className="movieTitle">{c.name}</Card.Title>
            <hr/>
            <p className="movieYear"> Ano: {c.year}</p>
            <p className="movieDir"> Dirigido por : {c.diretor}</p>
            <p>
              
              {c.country} <img className="icon" src={c.icon} alt="Icone" />
            </p>

            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
       
      </div>
    </div>
  ));
}

export default MoviesCountry;

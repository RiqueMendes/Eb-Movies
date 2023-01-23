import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "../App.css";
import movies from "./MovieList";

function MoviesYear() {
  movies.sort(function (a, b) {
    return a.year < b.year ? -1 : a.year > b.year ? 1 : 0;
  });
  return movies.map((y) => (
    <div className="moviesContainer" key={y.id}>
      <div>
        <Card className="card" style={{ width: "18rem" }}>
          <Card.Img className="image" src={y.image} alt="Foto do filme" />
          <Card.Body>
            <Card.Title className="movieTitle">{y.name}</Card.Title>
            <hr />
            <p className="movieYear"> Ano: {y.year}</p>
            <p className="movieDir"> Dirigido por : {y.diretor}</p>
            <p>
              {y.country} <img className="icon" src={y.icon} alt="Icone" />
            </p>

            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  ));
}

export default MoviesYear;

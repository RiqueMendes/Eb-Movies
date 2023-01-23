import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'
import movies from './MovieList'
import '../App.css';

function MoviesAlp(){
    movies.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
    return(
        movies.map((a) => (
            <div className="moviesContainer" key={a.id}>
            <div>
              <Card className="card" style={{ width: "18rem" }}>
                <Card.Img className="image" src={a.image} alt="Foto do filme" />
                <Card.Body>
                  <Card.Title className="movieTitle">{a.name}</Card.Title>
                  <hr/>
                  <p className="movieYear" > Ano: {a.year}</p>
                  <p className="movieDir"> Dirigido por : {a.diretor}</p>
                  <p> {a.country} <img className="icon" src ={a.icon} alt='Icone' /> </p>
                 
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))
    )
}


export default MoviesAlp;
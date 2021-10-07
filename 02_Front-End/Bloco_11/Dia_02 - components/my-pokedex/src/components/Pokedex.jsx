import { Component } from "react";
import pokemons from "../data";
import "../css/pokedex.css"


class Pokedex extends Component {
  render() {
    return (
      <section>
        {pokemons.map(({name, type, averageWeight, image: link }) => (
          <div className="card-name">
            <div className="datas-poke">
            <h2>{`${name}`}</h2>
            <p>{`${type}`}</p>
            <span>{`Average Weigth: ${averageWeight.value} ${averageWeight.measurementUnit}`}</span>
            </div>
            <img src={`${link}`} alt={`${name}`} />
          </div>
        ))}
      </section>
    );
  }
}

export default Pokedex;
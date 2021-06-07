import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import styles from './pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <main>
        <h1 className={ styles.title }>My Pokedex</h1>
        <section className={ styles.pokedex }>
          { pokemons.map((pokemon) => <Pokemon key={pokemon.id} poke={pokemon} />) }
        </section>
      </main>
    );
  }
}

export default Pokedex;

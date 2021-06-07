import React from 'react';
import styles from './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, moreInfo } = this.props.poke;

    return (
      <section className={ styles.pokemonCard }>
        <img className={ styles.pokemonImage } src={ image } alt={ name } />
        <h1 className={ styles.pokemonName }>{ name }</h1>
        <h2 className={ styles.pokemonType }>{ type }</h2>
        <p className={ styles.pokemonWeight }>
          { `Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}` }
        </p>
        <a href={ moreInfo } target="_blank" rel="nofollow noreferrer">?</a>
      </section>
    );
  }
}

export default Pokemon;
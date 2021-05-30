import React from 'react'
import { Link } from 'react-router-dom'

class Info extends React.Component {
    constructor(props)  {
        super(props);

        this.id = parseInt(props.match.params.id);

        this.state = {
            pokemon: {
                'id': -1,
                'name': '',
                'image': '',
                'height': 0,
                'weight': 0,
                'abilities': '',
                'types': []


            }
        }

        this.pokemons = {

            1: {
                'id': 1,
                'name': 'Bulbasaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
                'height': 0.7,
                'weight': 6.9,
                'abilities': 'Overgrow',

                'types': ['Grass','Poison']


            },

            2: {
                'id': 2,
                'name': 'Ivysaur',
                'image': 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
                'height': 0.7,
                'weight': 6.9,
                'abilities': 'Overgrow',

                'types': ['Grass','Poison']


            }

        }





    }


    criarListaTipos() {
        return this.state.pokemon.types.map((type) => {
            return <span className='type' key={type}>{type}</span>
        });

    }

    render() {
        const pokemon = this.state.pokemon;
        return (
            <section className='info'>
                <div className='info-header'>
                    {pokemon.className}
                </div>
                <div className='info-body'>
                    <div className='info-block'>
                        <img src={pokemon.image} alt={pokemon.name} />
                    </div>
                    <div className='info-block'>
                        <p><strong>Height:</strong> {`${pokemon.height}m`}</p>
                        <p><strong>Weight:</strong> {`${pokemon.weight}kg`}</p>
                        <p><strong>Abilities:</strong> {pokemon.abilities}</p>
                        <strong>Types:</strong>

                        <div className='info-category'>
                            {this.criarListaTipos()}
                        </div>
                    </div>
                </div>
                <div className='info-footer'>
                    <Link to='/'>Voltar</Link>
                </div>

            </section>

        );
    }


    componentDidMount() {
        let pokemon = this.pokemons[this.id];
        if (pokemon) {
            this.setState({
                pokemon: pokemon
            })
        }
    }

}


export default Info
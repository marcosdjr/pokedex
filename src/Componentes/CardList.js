import React from 'react'
import Card from './Card.js'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            pokemons: []
        };
    }


    criarCardsPokemon() {
        return this.state.pokemons.map((pokemon) => {
            return <Card pokemon={pokemon} key={pokemon.id} />
        });
    }




    render() {
        const isLoaded = this.state.isLoaded;

        if (!isLoaded) {
            return (
                <div className='card-list'>
                    Carregando...
                </div>
            )
        } else {

            return (
                <div>
                    <div className='card-list'>
                        {this.criarCardsPokemon()}
                    </div>
                </div>
            )
        }
    }

    componentDidMount() {
        //HTTP GET
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(resultado => resultado.json())
        .then(resultadoJson => {
            this.setState({
                isLoaded: true,
                pokemons: resultadoJson.results
            })
        })

        
    }

}
export default CardList
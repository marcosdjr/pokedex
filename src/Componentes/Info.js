import React from 'react'
import { Link } from 'react-router-dom'

class Info extends React.Component {
    constructor(props) {
        super(props);

        this.id = parseInt(props.match.params.id);

        this.state = {
            isLoaded: false,
            pokemon: {}
        }
    }


    criarListaTipos() {
        const pokemon = this.state.pokemon;
        return pokemon.types.map((tipo) => {
            const typeName = tipo.type.name;
            return (
                <span className={`type' ${typeName}`} key={pokemon.id + '-' + typeName}>
                    {typeName}
                </span>
            )
        });

    }

    criarListaHabilidades() {
        const pokemon = this.state.pokemon;
        return pokemon.abilities.map(habilidade => {
            const nomeHabilidade = habilidade.ability.name;
            return (
                <span key={pokemon.id + '-' + nomeHabilidade} className='habilidade'>{nomeHabilidade}</span>
            )
        });
    }


    render() {
        const { isLoaded, pokemon } = this.state;
        if (!isLoaded) {
            return(
                <section className='info'>
                    Carregando...
                </section>
            )
        } else {
            const imageId = `000${pokemon.id}`.slice(-3);
            const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imageId}.png`
            return (
                <section className='info'>
                    <div className='info-header'>
                        {pokemon.name}
                    </div>
                    <div className='info-body'>
                        <div className='info-block'>
                            <img src={imageSrc} alt={pokemon.name} />
                        </div>
                        <div className='info-block'>
                            <p><strong>Height:</strong> {`${pokemon.height}m`}</p>
                            <p><strong>Weight:</strong> {`${pokemon.weight}kg`}</p>
                            <p><strong>Abilities:</strong></p>
                            {this.criarListaHabilidades()}
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
    }


    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
            .then(resultado => resultado.json())
            .then(resultadoJson => {
                this.setState({
                    isLoaded: true,
                    pokemon: resultadoJson
                });
            })

    }

}


export default Info
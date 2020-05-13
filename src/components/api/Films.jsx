import React, { Component } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDisplay from '../CardDisplay';

class Films extends Component {
    state = {
        films: null
    }

    componentDidMount() {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(res => this.setState({films: res}))
    }

    render() {
        return (
            <CardGroup>
                {this.state.films ? this.state.films.map(film =>
                    <CardDisplay
                        key={film.id}
                        title={film.title}
                        description={film.description}              
                    />
                ) : null}
            </CardGroup>
        );
    }
}

export default Films;
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Logo from './Logo';
import Films from './api/Films';
import People from './api/People';
import Locations from './api/Locations';
import Species from './api/Species';
import Vehicles from './api/Vehicles';


class App extends Component {
    state = {
        isInitialLoad: true,
        endpointToLoad: null,
        buttons: ['Films', 'People', 'Locations', 'Species', 'Vehicles'],
        buttonPanel: []
    }

    componentDidMount() {
        const buttons = this.state.buttons.map((btn, i) => 
            <Col key={i} >
                <Button variant='info' onClick={() => this.handleButtonClick(btn)}>
                    Render All {btn}
                </Button>
            </Col>
        );

        this.setState({buttonPanel: buttons});
    }

    handleButtonClick = (endpoint) => {
        let endpointComponent;
        
        switch(endpoint) {
            case 'Films': endpointComponent = <Films />; break;
            case 'People': endpointComponent = <People />; break;
            case 'Locations': endpointComponent = <Locations />; break;
            case 'Species': endpointComponent = <Species />; break;
            case 'Vehicles': endpointComponent = <Vehicles />; break;
            default: return;
        }

        this.setState({
            isInitialLoad: false,
            endpointToLoad: endpointComponent
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.state.isInitialLoad ? <Logo /> : ''}
                </Row>
                <Row>
                    {this.state.isInitialLoad ? <> {this.state.buttonPanel} </>: ''}
                </Row>
                <Row>
                    {this.state.endpointToLoad ?  <Films /> : ''}
                </Row>
            </Container>
        );
    }
}

export default App;
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import WeatherCards from './WeatherCards';

class App extends Component {
    state = {
        API_KEY: "e4891fdb6e899264dd4a148373e7fbe6", // An absolute cardinal sin in production, I know
        showTodayOnly: true
    }

    handleToggleForecast = () => {
        this.setState({showTodayOnly: !this.state.showTodayOnly});
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Button
                            variant="warning"
                            className="my-4"
                            onClick={this.handleToggleForecast}
                        >
                            {this.state.showTodayOnly ? 'Show 30 day forecast' : 'See current conditions'}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <WeatherCards props={this.state} />
                </Row>
            </Container>
        );
    }
}

export default App;
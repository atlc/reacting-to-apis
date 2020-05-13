import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CardDisplay extends Component {
    render() {
        return (
            <Col md={4}>
                <Card>
                    <img src="../assets/logo.png" alt='The Studio Ghibli logo' />
                    <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href={`https://www.imdb.com/find?q=${this.props.title}`}>
                            See more info in an IMDB search!
                        </Button>
                        <small className="text-muted">Fin</small>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

export default CardDisplay;
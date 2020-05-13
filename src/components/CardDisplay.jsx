import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class CardDisplay extends Component {
    render() {
        return (
            <Col sm={2} md={3} lg={4}>
                <Card className='text-center' style={{marginTop: "5px", marginBottom: "15px"}}>
                    <img src={require('../assets/logo.png')} style={{maxWidth: '90vw'}} alt='The Studio Ghibli logo' />
                    <hr />
                    <Card.Body>
                    <Card.Title className='font-weight-bold'>{this.props.title}</Card.Title>
                    <hr />
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button href={`https://www.imdb.com/find?q=${this.props.title}`}>
                            See more info in an IMDB search!
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

export default CardDisplay;
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
export default class Slide extends Component {
    render() {
        return (
            [
                'Primary',
                'Secondary',
                'Success',
                'Danger',
                'Warning',
                'Info',
                'Light',
                'Dark',
            ].map((variant, idx) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="mb-2 c"
                >
                    <Card.Header>Header</Card.Header>
                    <Card.Body>
                        <Card.Title>{variant} Card Title </Card.Title>
                        <Card.Text>
                            <h1>hello</h1>

                        </Card.Text>
                    </Card.Body>
                </Card>
            ))
        )
    }
}

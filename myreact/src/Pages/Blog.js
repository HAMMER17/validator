import React, { Component } from 'react'
import Figure from 'react-bootstrap/Figure'
export default class Blog extends Component {
    render() {
        return (
            <Figure className="d-flex b">
                <Figure.Image
                    width={271}
                    height={280}
                    alt="171x180"
                    src="https://img2.freepng.ru/20180201/hae/kisspng-the-boss-baby-amazon-com-infant-dreamworks-the-boss-baby-transparent-png-5a73e48e7cad38.0974600115175445905107.jpg"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
                <Figure.Image
                    width={271}
                    height={280}
                    alt="171x180"
                    src="https://img2.freepng.ru/20180201/hae/kisspng-the-boss-baby-amazon-com-infant-dreamworks-the-boss-baby-transparent-png-5a73e48e7cad38.0974600115175445905107.jpg"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
                <Figure.Image
                    width={271}
                    height={280}
                    alt="171x180"
                    src="https://img2.freepng.ru/20180201/hae/kisspng-the-boss-baby-amazon-com-infant-dreamworks-the-boss-baby-transparent-png-5a73e48e7cad38.0974600115175445905107.jpg"
                />
                <Figure.Caption>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                </Figure.Caption>
            </Figure>
        )
    }
}

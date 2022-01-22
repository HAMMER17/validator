import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel >
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 a"
                            src="https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936__480.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100 a"
                            src="https://png.pngtree.com/background/20210711/original/pngtree-scary-graveyard-in-the-woods---halloween-background-picture-image_1154763.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 a"
                            src="https://media.istockphoto.com/photos/pumpkins-in-graveyard-in-the-spooky-night-halloween-backdrop-picture-id1269139174?k=20&m=1269139174&s=170667a&w=0&h=sylD6CSVZ3Z6xRx7mMDg1SJO9axv-sgz6cYEGfkx5zQ="
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

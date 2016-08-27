import React, {Component} from 'react';
import actions from '../redux/actions';
import { Carousel } from 'react-bootstrap';


var img = require('../assets/carousel.jpg');

class ControlledCarousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 1,
            direction: null
        }
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return (
            <div className='carouselContainer'>
                <Carousel activeIndex={this.state.index}
                    direction={this.state.direction}
                    onSelect={this.handleSelect.bind(this)}>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={img}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={img}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={img}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img width={900} height={500} alt="900x500" src={img}/>
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

export default ControlledCarousel;
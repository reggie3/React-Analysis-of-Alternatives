import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import actions from '../redux/actions';

class CarouselControls extends Component {
    constructor(...args) {
        super(...args);

        this.state = {};
    }

    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Graphs</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>{
                        this.props.graphNames.map((graphName, index)=>{
                            return <NavItem key={index} href="#">{graphName}</NavItem>
                        })
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default CarouselControls;
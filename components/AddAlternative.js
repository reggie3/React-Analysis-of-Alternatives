import React, {Component} from 'react';
import actions from '../redux/actions';
import { Button, Form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class AddAlternative extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: "",
            description: "",
            criteriaScores: {}
        }
    }

    handleChange(event) {
        switch (event.target.name) {
            case "name":
                this.setState({
                    name: event.target.value
                })
                break;
            case "description":
                this.setState({
                    description: event.target.value
                })
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(actions.
            addAlternative(
                this.state,
                this.props.alternatives, 
                this.props.criteria
            )
        );
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit.bind(this) }>

                    <FormGroup>
                        <ControlLabel>Add New Alternative</ControlLabel>
                        <FormControl type="text" onChange={this.handleChange.bind(this) }
                            name="name"
                            placeholder ="Insert alternative name here"
                            value = {this.state.name}
                            />
                    </FormGroup>
                    <FormGroup>
                        <FormControl componentClass="textArea" 
                            onChange={this.handleChange.bind(this) }
                            placeholder ="Describe this alternative"
                            name="description"
                            value = {this.state.description}
                            rows = '2'
                            />
                    </FormGroup>

                    <Button type='submit' text='submit' bsStyle='primary'>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddAlternative;
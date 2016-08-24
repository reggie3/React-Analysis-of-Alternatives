import React, {Component} from 'react';
import AlternativeBlock from "./AlternativeBlock";
import CriteriaBlock from "./CriteriaBlock";
import AnalysisTable from "./AnalysisTable";
import actions from '../redux/actions';



// Connects a React component to a Redux store.
import { connect } from 'react-redux';
class App extends Component {

    componentWillMount(){
        console.log("init");
        this.props.dispatch(actions.completeScoreGrid(this.props.alternatives, this.props.criteria));
    }

    render() {
        return (
            <div>
                <div id='analysisTable'>
                    <AnalysisTable state={this.props}/>
                </div>
                <div className='infoBlock'>
                    <AlternativeBlock
                        alternatives = {this.props.alternatives}
                        criteria={this.props.criteria}
                        scores={this.props.scores}
                        dispatch={this.props.dispatch}
                        />
                    <CriteriaBlock
                        alternatives = {this.props.alternatives}
                        criteria={this.props.criteria}
                        dispatch={this.props.dispatch}
                        scores={this.props.scores}
                        />
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return state;
}

// subscribe to Redux store updates.
export default connect(mapStateToProps)(App);
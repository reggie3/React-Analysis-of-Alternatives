import React, {Component} from 'react';
import d3 from 'd3';

class ClusteredBarChart extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            barData: [],
            chartTitle: this.props.graphName
        }
    }
    componentWillMount() {
        this.transformData(this.props.criteria, this.props.alternatives,
            this.props.scores);
    }

    componentWillReceiveProps(nextProps) {
        this.transformData(nextProps.criteria, nextProps.alternatives,
            nextProps.scores);
    }

    /*************
     * transformData
     * create an array data structure with a series of objects
     * each object corresponds to an alternative is consists of name-value pairs for the
     * alternative and each criteria's score
     */
    transformData(criteria, alternatives, scores) {
        let newBarData = [];

        alternatives.forEach((alternative) => {
            let scoreData = { alternative: alternative.name };
            criteria.forEach((criterion) => {
                scoreData[criterion.name] = scores[alternative.id][criterion.id];
            });
            newBarData = newBarData.concat(scoreData);
        });
       
        this.setState({
            barData: newBarData,
        });
    }

    render() {
        return(
        <svg width={this.props.width}
            height={this.props.height} >
            {this.props.children}
        </svg>
        )
    }
}

export default ClusteredBarChart;

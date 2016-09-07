import rd3 from 'rd3';
import React, {Component} from 'react';
//import ClusteredBarChart from './ClusteredBarChart';

class ChartWeightedScores extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            barData: []
        }
    }
    componentWillMount(){
        this.transformData(this.props.criteria, this.props.graphName);
    }

    componentWillReceiveProps(nextProps) {
        this.transformData(nextProps.criteria, nextProps.graphName);
    }

    transformData(criteria, title) {
        let newBarData = [{
            name: title,
            values: undefined
        }]
        let valueArray = criteria.map((criterion)=>{
            return {"x": criterion.name, y:criterion.weight};
        });
        newBarData[0].values = valueArray;
        this.setState({
            barData: newBarData,
        });
    }

    render() {
        return (
            <ClusteredBarChart
                data={this.state.barData}
                width={500}
                height={300}
                title={this.props.graphName}
                xAxisLabel="Criteria"
                yAxisLabel="Weight"/>
        )
    }
}

export default ChartWeightedScores;
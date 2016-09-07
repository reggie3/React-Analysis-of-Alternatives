import rd3 from 'rd3';
import React, {Component} from 'react';
import {VictoryBar, VictoryChart} from 'victory';

class ChartCriteriaWeights extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            barData: undefined
        }
    }
    componentWillMount() {
        this.transformData(this.props.criteria);
    }

    componentWillReceiveProps(nextProps) {
        this.transformData(nextProps.criteria);
    }

    transformData(criteria) {
        let newBarData = criteria.map((criterion, index) => {
            return { name: criterion.name, weight: criterion.weight };
        });

        this.setState({
            barData: newBarData
        });
    }

    render() {
        return (
            <div>
                <h3 className="chartTitle">{this.props.graphName}</h3>
                <VictoryChart

                    padding={{
                        top: 25,
                        bottom: 40,
                        left: 40,
                        right: 40
                    }}
                    domainPadding={{ x: 20 }}
                    colorScale={"qualitative"}
                    >

                    <VictoryBar


                        padding={{ top: 0, right: 75, bottom: 15, left: 75 }}
                        style={{
                            data: { fill: "blue", width: 20 },
                            labels: { fontSize: 20 }
                        }}
                        padding={75}
                        data={this.state.barData}
                        x={"name"}
                        y={"weight"}
                        />
                </VictoryChart>
            </div>
        )
    }
}

export default ChartCriteriaWeights;
//`<XAxis />` has the following properties,
// - xScale: the scale of the x-axis
// - height: the height of the scatter plot
// - width: the width of the scatter plot
// - axisLabel: the name of the axis
// - `<YAxis />` has the following properties,
// - yScale: the scale of y-axis
// - height: the height of the scatter plot
// - axisLabel: the name of the axis
// - **`<Points />`**: it is defined in the module points.js. The radius of each `<circle />` is 5 and the color is `steelblue`, and the `<Points />` has the following properties,
// - data: the data items
// - xScale: the scale for the x coordinate
// - yScale: the scale for the y coordinate


import * as d3 from 'd3';

function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;

    if (xScale) {
        const axis = typeof xScale.domain()[0] === 'number' 
            ? d3.axisBottom(xScale)  // Linear scale for scatter plot
            : d3.axisBottom(xScale).ticks(data.length); // Discrete scale for bar chart

        return (
            <g transform={`translate(0, ${height})`}>
                <g ref={node => d3.select(node).call(axis)} />
                <text
                    style={{ textAnchor: 'middle', fontSize: '15px' }}
                    x={width / 2}
                    y={40}
                >
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default XAxis;




import * as d3 from 'd3';

function YAxis(props) {
    const { yScale, height, axisLabel } = props;

    if (yScale) {
        const axis = d3.axisLeft(yScale);

        return (
            <g>
                <g ref={node => d3.select(node).call(axis)} />
                <text
                    style={{ textAnchor: 'end', fontSize: '15px' }}
                    transform={`translate(-30, ${height / 2})rotate(-90)`}
                >
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default YAxis;
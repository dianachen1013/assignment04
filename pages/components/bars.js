function Bars(props) {
    const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

    const getColor = (station) => (station === selectedStation ? 'red' : 'steelblue');

    return (
        <g>
            {data.map((d, i) => (
                <rect
                    key={i}
                    x={xScale(d.startStation)}
                    y={yScale(d.start)}
                    width={xScale.bandwidth()}
                    height={height - yScale(d.start)}
                    fill={getColor(d.startStation)}
                    onMouseEnter={() => setSelectedStation(d.startStation)}
                    onMouseOut={() => setSelectedStation(null)}
                />
            ))}
        </g>
    );
}

export default Bars;

function Points(props) {
    const { data, xScale, yScale, selectedStation, setSelectedStation, setTooltipX, setTooltipY } = props;

    const getColor = (station) => (station === selectedStation ? 'red' : 'steelblue');
    const getRadius = (station) => (station === selectedStation ? 10 : 5);

    const handleMouseEnter = (event, station) => {
        setSelectedStation(station);
        setTooltipX(event.pageX);
        setTooltipY(event.pageY);
    };

    const handleMouseOut = () => {
        setSelectedStation(null);
        setTooltipX(null);
        setTooltipY(null);
    };

    return (
        <g>
            {selectedStation && (
                <rect x={0} y={0} width="100%" height="100%" fill="yellow" opacity="0.3" />
            )}
            {data.map((d, i) => (
                <circle
                    key={i}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={getRadius(d.startStation)}
                    fill={getColor(d.startStation)}
                    onMouseEnter={(event) => handleMouseEnter(event, d.startStation)}
                    onMouseOut={handleMouseOut}
                />
            ))}
            {selectedStation && (
                <circle
                    cx={xScale(data.find(d => d.startStation === selectedStation).tripdurationS)}
                    cy={yScale(data.find(d => d.startStation === selectedStation).tripdurationE)}
                    r={10}
                    fill="red"
                    stroke="black"
                />
            )}
        </g>
    );
}

export default Points;

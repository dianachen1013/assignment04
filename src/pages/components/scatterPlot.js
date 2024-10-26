import Points from './points';
import XAxis from './xAxis';
import YAxis from './yAxis';

function ScatterPlot(props) {
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY } = props;

    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points
                data={data}
                xScale={xScale}
                yScale={yScale}
                selectedStation={selectedStation}
                setSelectedStation={setSelectedStation}
                setTooltipX={setTooltipX}
                setTooltipY={setTooltipY}
            />
            <YAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
        </g>
    );
}

export default ScatterPlot;

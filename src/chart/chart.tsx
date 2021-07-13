import React, { useRef, useState } from "react";
import { Line } from 'react-chartjs-2';

const Chart: React.FC = () => {
    const chartRef = useRef<Line>(null);
    const [tooltipPosition, setPositionAndData] = useState<any>({ left: 0, top: 0, showTooltip: false });
    let a = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: "VC",
            lineTension: 0,
            fill: false,
            data: [1, 3, 3, 4, 5, 6],
            borderWidth: 1,
            order: 1,
            pointHitRadius: 7,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointHoverBorderColor: "#000000",
            borderColor: "rgb(135, 25, 17)"
        }, {
            label: "VP",
            lineTension: 0,
            fill: false,
            data: [2, 8, 4, 5, 2, 4],
            borderWidth: 1,
            order: 2,
            pointHitRadius: 7,
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBorderWidth: 2,
            pointHoverBorderColor: "#000000",
            borderColor: "rgb(11, 215, 117)"

        }]
    };
    const hideTooltip = () => {
        setPositionAndData({
            ...tooltipPosition,
            showTooltip: false
        });
    };
    const changeTooltipPosition = (payload: any) => {
        const { left, top } = payload;
        setPositionAndData({ left: left + 5, top: top - 15, showTooltip: true });
    }
    const { left, top } = tooltipPosition;
    return (
        <>
            <Line data={a} width={100} height={50} options={{
                scales: {
                    yAxes: [{
                        ticks: {
                            suggestedMin: -1,
                            suggestedMax: 10
                        }
                    }]
                },
                hover: {
                    mode: "x",
                    intersect: false,
                },
                tooltips: {
                    enabled: false,
                    mode: "x",
                    intersect: false,
                    custom: (tooltipModal: any) => {
                        if (tooltipModal.opacity === 0) {
                            hideTooltip();
                            return;
                        }
                        const position = chartRef.current?.chartInstance.chart.canvas.getBoundingClientRect();
                        const left = position.left + tooltipModal.caretX;
                        const top = position.top + tooltipModal.caretY;
                        changeTooltipPosition({ left, top });
                    }
                }
            }} ref={chartRef} />

            {tooltipPosition.showTooltip ? (
                <div
                    style={{
                        position: 'fixed',
                        border: '1px solid rgba(0,0,0,0.2)',
                        color: 'white',
                        backgroundColor: 'rebeccapurple',
                        top: top,
                        left: left,
                    }}
                >
                    <div>Tooltip</div>
                </div>
            ) : (
                    null
                )}
        </>
    )
}

export default Chart;
import React from 'react';
import { Line } from 'react-chartjs-2';
import utils from '../services/utils/index';

const MessageChart = props => {

    let { data } = props;

    const chartData = (canvas) => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(500, 0, 100, 0);
        gradient.addColorStop(0, "#FDC830");
        gradient.addColorStop(1, "#F37335");
        return {
            labels: data.date,
            datasets: [
                {
                    label: 'Number of messages last 10 days',
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: gradient,
                    borderColor: gradient,
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: gradient,
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 2,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: gradient,
                    pointHoverBorderColor: gradient,
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: data.data
                }
            ],

        }
    }
    return (
        <div>
            <Line height={utils.isMobile() ? 200 : 100} data={chartData} />
        </div>
    )
}

export default MessageChart;
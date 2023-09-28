import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export default function ApexAreaChart() {
  
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);
  
  useEffect(() => {
    fetch("https://api.llama.fi/summary/fees/lyra?dataType=dailyFees")
      .then((response) => response.json())
      .then((responseData) => {
        const formattedData = responseData.totalDataChart.map((item) => ({
          x: new Date(item[0] * 1000).toLocaleString(),
          y: item[1],
        }));

        setSeries([{ data: formattedData }]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setOptions({
      chart: {
        id: "area-chart",
        type: "area",
        height: 400,
        zoom: {
          autoScaleYaxis: true
        }
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100]
        }
      },
      
      yaxis: {
        title: {
          text: "Value",
        },
      },
      dataLabels: {
        enabled: false,
      },
    });
  }, []);

  return (
    <div className="apex-area-chart">
      <Chart options={options} series={series} type="area" height={400} />
    </div>
  );
}

import './App.css';
import Chart from './components/Chart';

function App() {
  return (
    <div className="App">
      <h2>Chart</h2>
      <Chart />
    </div>
  );
}

export default App;





// import React, { useEffect, useState } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Brush
// } from "recharts";

// export default function Chart() {
//   const [data, setData] = useState([]);
    
//   useEffect(() => {
//     fetch("https://api.llama.fi/summary/fees/lyra?dataType=dailyFees")
//       .then((response) => response.json())
//       .then((responseData) => {
//         const formattedData = responseData.totalDataChart.map((item) => ({
//           name: formatDate(item[0]),
//           $: item[1],
//         }));
//         setData(formattedData);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000);
//     const monthNames = [
//       "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//       "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
//     ];
//     const month = monthNames[date.getMonth()];
//     const day = date.getDate();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     return `${month} ${day} ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
//   };

//   return (
//     <div style={{ width: "100%", height: 400 }}>
//       <ResponsiveContainer>
//         <AreaChart
//           data={data}
//           margin={{
//             top: 10,
//             right: 30,
//             left: 0,
//             bottom: 0
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Area type="monotone" dataKey="$" stroke="#EA526F" fill="#F391A3" />
//           <Brush dataKey="name" height={30} stroke="#EA526F" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// }

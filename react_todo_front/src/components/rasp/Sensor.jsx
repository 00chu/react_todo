import axios from "axios";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const Sensor = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8888/rasps");
        setSensorData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
    console.log(sensorData);

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  if (sensorData.length === 0) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        측정된 데이터가 존재하지 않습니다💤
      </h1>
    );
  }

  const chartData = sensorData.slice(-30).map((i) => i);

  return (
    <div
      style={{
        maxWidth: 1000,
        margin: "0 auto",
        padding: 20,
      }}
    >
      <h1 style={{ textAlign: "center", color: "purple" }}>
        IoT 전력 모니터링
      </h1>
      <div
        style={{
          backgroundColor: "plum",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "1px solid purple",
        }}
      >
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3  "></CartesianGrid>
            <Tooltip></Tooltip>
            <Legend />
            <Line
              dataKey="voltage"
              stroke="purple"
              type="monotone"
              name="전압(V)"
              dot={false}
            ></Line>
            <Line
              dataKey="power"
              stroke="white"
              type="monotone"
              name="파워"
              dot={false}
            ></Line>
            <Line
              dataKey="frequency"
              stroke="yellow"
              type="monotone"
              name="주파수(Hz)"
              dot={false}
            ></Line>
            <Line
              dataKey="current"
              stroke="blue"
              type="monotone"
              name="전류(A)"
              dot={false}
            ></Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <hr />
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
          backgroundColor: "plum",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "purple" }}>
            {[
              "전압(VO)",
              "전류(A)",
              "전력(W)",
              "에너지",
              "주파수(Hz)",
              "역률",
              "탄소배출량",
              "시간",
            ].map((h) => {
              return (
                <th
                  key={h}
                  style={{
                    padding: "10px 12px",
                    textAlign: "left",
                    borderBottom: "2px solid purple",
                    color: "white",
                  }}
                >
                  {h}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {sensorData.slice(0, 15).map((item, index) => {
            console.log(item);
            return (
              <tr key={index} style={{ borderBottom: "1px solid purple" }}>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.voltage}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.current}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.power}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.energy}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.frequency}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.powerFactor}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.cemission}
                </td>
                <td style={{ color: "white", padding: "8px 12px" }}>
                  {item.timeStamp}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Sensor;

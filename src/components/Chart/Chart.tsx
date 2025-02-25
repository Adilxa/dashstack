import { observer } from "mobx-react";
import chartStore from "../../store/ChartStore";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useState } from "react";

const Chart = observer(() => {
    const [checkedMouth, setCheckedMouth] = useState(0);
    return (
        <div style={{ width: "100%", height: 400 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <h1>Sales Details</h1>
                <select onChange={(e: any) => setCheckedMouth(e.target.value)}>
                    {
                        chartStore.data.map((el, i) =>
                            <option value={i}>{el.month}</option>)
                    }
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={chartStore.data[checkedMouth].weeks}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dates" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
});

export default Chart;

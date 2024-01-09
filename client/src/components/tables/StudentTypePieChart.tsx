import { axiosPrivate } from "@/api/axios";
import { COLORS, renderCustomizedLabel } from "@/utils/PieChartUtils";
import { useState, useEffect } from "react";
import { LuLoader2 } from "react-icons/lu";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const StudentTypePieChart = () => {
  return (
    <div
      className="w-1/2 h-[300px] shadow-2xl rounded-md bg-white border border-red-50 
flex flex-col justify-between pt-4"
    >
      <h1 className="text-red-500 font-bold text-center">
        Types of Student's Enrolled
      </h1>
      <Tables />
    </div>
  );
};
export default StudentTypePieChart;

const Tables = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        const res = await axiosPrivate.get("/students/type_counts");
        setData(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchCounts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-full ">
        <LuLoader2 size="1.5rem" className="animate-spin" />
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          fontSize={12}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

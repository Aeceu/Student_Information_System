import { useEffect, useState } from "react";
import { axiosPrivate } from "@/api/axios";
import { LuLoader2 } from "react-icons/lu";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  Rectangle,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";

const StudentsCountsBarChart = () => {
  return (
    <div
      className="w-1/2 h-[300px] shadow-2xl rounded-md bg-white border border-red-50 
    flex flex-col justify-between pt-4"
    >
      <h1 className="text-red-500 font-bold text-center">
        Number of Student's Enrolled
      </h1>
      <Tables />
    </div>
  );
};
export default StudentsCountsBarChart;

const Tables = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        const res = await axiosPrivate.get("/students/counts");
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
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Legend fontSize={12} />
        <Bar
          fontSize={12}
          dataKey="total"
          fill="rgb(239 68 68)"
          activeBar={<Rectangle fill="pink" stroke="rgb(239 68 68)" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainern, Legend, ResponsiveContainer } from "recharts";
import { useStore } from "../store";

export default function DeptChart() {
    const salesData = useStore((state) => state.salesData);
    const departments = useStore((state) => state.departments);
    const managerTheme = useStore((state) => state.managerTheme);

    return (
        <div style={{ height: 300, backgroundColor: managerTheme === 'light' ? '#fff' : '#333', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            <h3>Sales Performance</h3>
            <ResponsiveContainer width="100%" height="100%">
                <Linechart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={managerTheme === 'professional' ? '#ccc' : '#444'} />
                    <XAxis dataKey="time" stroke={managerTheme === 'professional' ? '#333' : '#ccc'} />
                    <YAxis stroke={managerTheme === 'professional' ? '#333' : '#ccc'} />
                    <Tooltip
                        contentStyle={{ backgroundColor: managerTheme === 'professional' ? '#fff' : '#333', border: 'none' }}
                    />
                    <Legend />

                    // Only render lines for departments that are currently visible
                    {departments.produce && <Line type="monotone" dataKey="produce" stroke="#4caf50" strokeWidth={3} />}
                    {departments.dairy && <Line type="monotone" dataKey="dairy" stroke="#2196f3" strokeWidth={3} />}
                    {departments.bakery && <Line type="monotone" dataKey="bakery" stroke="#ff9800" strokeWidth={3} />}
                    {departments.frozen && <Line type="monotone" dataKey="frozen" stroke="#00bcd4" strokeWidth={3} />}
                </Linechart>
            </ResponsiveContainer>
        </div>
    );
}
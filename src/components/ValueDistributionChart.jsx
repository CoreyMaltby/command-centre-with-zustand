import { PieChart, Pie, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useStore } from '../store';

export default function ValueDistributionChart() {
    const distributionData = useStore((state) => state.distributionData);
    const departments = useStore((state) => state.departments);
    const managerTheme = useStore((state) => state.managerTheme);

    // Filter data based on which departments are currently visible
    const filteredData = distributionData.filter(item =>
        departments[item.name.toLowerCase()]
    );

    return (
        <div style={{ backgroundColor: managerTheme === 'light' ? '#fff' : '#333', padding: '20px', borderRadius: '8px', flex: 1 }}>
            <h3 style={{ marginBottom: '10px' }}>Department Value Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={filteredData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                        label={{ fill: managerTheme === 'light' ? '#000' : '#fff' }}
                        fill="#8884d8"
                        colors={filteredData.map(entry => entry.color)}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: managerTheme === 'light' ? '#fff' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            color: managerTheme === 'light' ? '#000' : '#fff'
                        }}
                    />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

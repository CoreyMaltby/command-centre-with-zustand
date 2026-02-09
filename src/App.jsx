import { useStore } from './store';
import CommandSidebar from './components/CommandSidebar'
import DeptChart from './components/DeptChart';
import ValueDistributionChart from './components/ValueDistributionChart';

function App() {
    const managerTheme = useStore((state) => state.managerTheme);
    const departments = useStore((state) => state.departments);
    const reportRange = useStore((state) => state.reportRange);

    const dashboardStyle = {
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: managerTheme === 'light' ? '#fff' : '#333',
        color: managerTheme === 'light' ? '#000' : '#fff',
        transition: ' all 0.3s ease',
    };

    return (
        <div style={dashboardStyle}>
            <CommandSidebar />
            <main style={{ flex: 1, padding: '30px' }}>
                <header style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}>
                    <h1>Manager Dashboard</h1>
                    <p>Live Monitoring: <strong>{reportRange}</strong></p>
                </header>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div style={{ flex: 2, minWidth: '400px' }}>
                        <DeptChart />
                        </div>
                        <div style={{ flex: 1, minWidth: '300px', marginTop: '20px' }}>
                            <ValueDistributionChart />
                        </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {departments.produce && <DeptTile name="Produce" color="#4caf50" status="On Schedule" />}
                    {departments.dairy && <DeptTile name="Dairy" color="#2196f3" status="Restock Required" />}
                    {departments.bakery && <DeptTile name="Bakery" color="#ff9800" status="Oven Active" />}
                    {departments.frozen && <DeptTile name="Frozen" color="#00bcd4" status="Temps Stable" />}
                </div>
            </main>
        </div>
    )
}

function DeptTile({ name, color, status }) {
    return (
        <div style={{ padding: '20px', borderLeft: `10px solid ${color}`, backgroundColor: 'rgba(128,128,128,0.1)', borderRadius: '4px' }}>
            <h3 style={{ marginTop: 0 }}>{name} Dept</h3>
            <p>Status: <span style={{ fontWeight: 'bold' }}>{status}</span></p>
            <small>Data synchronized via Zustand Persist Store.</small>
        </div>
    );
}

export default App

import { useStore } from '../store';

export default function CommandSidebar() {
    const { departments, toggleDepartment, managerTheme, toggleManagerTheme, reportRange, setReportRange } = useStore();

    // Sidebar styles
    const sidebarStyle = {
        padding: '20px',
        borderRight: '1px solid #ddd',
        minWidth: '250px',
        backgroundColor: managerTheme === 'light' ? '#f8f9fa' : '#2c2c2c',
        color: managerTheme === 'light' ? '#000' : '#fff',
        transition: 'all 0.3s ease',
    };

    return (
        <aside style={sidebarStyle}>
            <h3>Command Center</h3>

            <div style={{ marginBottom: '20px' }}>
                <label>Shift Mode: </label>
                <button onClick={toggleManagerTheme}>
                    {managerTheme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>

            <div style={{ marginTop: '20px' }}>
                <h4>Department Panels</h4>
                {Object.keys(departments).map(dept => (
                    <label key={dept} style={{ display: 'block', padding: '5px 0', cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            checked={departments[dept]}
                            onChange={() => toggleDepartment(dept)}
                        />
                        {dept.charAt(0).toUpperCase() + dept.slice(1)}
                    </label>
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
                <h4>Analytics Range</h4>
                <select value={reportRange} onChange={(e) => setReportRange(e.target.value)} style={{
                    width: '100%', padding: '5px', backgroundColor: managerTheme === 'professional' ? '#fff' : '#444',
                    color: managerTheme === 'professional' ? '#000' : '#fff'
                }}>
                    <option value="Today">Current Shift</option>
                    <option value="7d">Weekly Audit</option>
                    <option value="30d">Monthly Forecast</option>
                </select>
            </div>
        </aside>
    );
}
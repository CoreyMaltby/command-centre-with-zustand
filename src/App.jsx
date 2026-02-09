import { useState } from 'react'
import CommandSidebar from './components/CommandSidebar'

function App() {
    return (
        <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <CommandSidebar />
            <main style={{ flex: 1, padding: '20px' }}>
                <h1>Welcome to the Manager's Dashboard</h1>
                <p>Use the Command Center on the left to customize your view and access department analytics.</p>
            </main>
        </div>
    )
}

export default App

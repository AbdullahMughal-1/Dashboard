// DashBoard.jsx
import React from 'react';
import Sidebar from '../SideBar';
import Dashboard1 from '../Dashboard/Dashboard1';


export default function DashBoard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <Dashboard1 />
            </div>
        </div>
    );
}

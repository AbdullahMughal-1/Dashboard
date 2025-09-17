// DashBoard.jsx
import React from 'react';
import Sidebar from '../SideBar';
import Dashboard1 from '../Dashboard/DashBoard1';
import DashboardHeader from '../DashBoardHeader';


export default function DashBoard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar stays fixed and non-scrollable */}
            <Sidebar />

            {/* Main content scrolls independently */}
            <div className="flex-1 overflow-y-auto md:ml">
                <DashboardHeader />
                <Dashboard1 />
            </div>
        </div>
    );
}

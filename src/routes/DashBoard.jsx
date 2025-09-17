// DashBoard.jsx
import React from 'react';
import Sidebar from '../SideBar';
import Dashboard1 from '../Dashboard/DashBoard1';
import DashBoardHeader from '../DashBoardHeader.';


export default function DashBoard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashBoardHeader />
                <Dashboard1 />
            </div>
        </div>
    );
}

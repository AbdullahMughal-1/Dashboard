import React from 'react'
import Sidebar from '../SideBar'
import DashboardHeader from '../DashBoardHeader';
import ResultsTable from '../Result/ResultTable';

export default function Results() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            {/* Sidebar stays fixed and non-scrollable */}
            <Sidebar />

            {/* Main content scrolls independently */}
            <div className="flex-1 overflow-y-auto md:ml">
                <DashboardHeader />
                <ResultsTable />

            </div>
        </div>
    )
}

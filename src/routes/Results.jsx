import React from 'react'
import Sidebar from '../SideBar'
import ResultsTable from '../Result/ResultTable';
import DashboardHeader from '../DashBoardHeader';

export default function Results() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashboardHeader />
                <ResultsTable />

            </div>
        </div>
    )
}

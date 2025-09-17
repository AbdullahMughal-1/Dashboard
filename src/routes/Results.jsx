import React from 'react'
import Sidebar from '../SideBar'
import ResultsTable from '../Result/ResultTable';
import DashBoardHeader from '../DashBoardHeader.';

export default function Results() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashBoardHeader />
                <ResultsTable />

            </div>
        </div>
    )
}

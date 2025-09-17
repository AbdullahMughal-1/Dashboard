import React from 'react'
import Sidebar from '../SideBar'
import DashboardHeader from '../DashBoardHeader';
import InvoicesTable from '../Invoices/InvoicesTable';

export default function Invoices() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashboardHeader />
                <InvoicesTable />

            </div>
        </div>
    )
}

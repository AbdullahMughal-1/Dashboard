import React from 'react'
import Sidebar from '../SideBar'
import InvoicesTable from '../Invoices/InvoicesTable';
import DashBoardHeader from '../DashBoardHeader.';

export default function Invoices() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashBoardHeader />
                <InvoicesTable />

            </div>
        </div>
    )
}

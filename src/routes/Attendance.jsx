import React from 'react'
import Sidebar from '../SideBar'
import DashboardHeader from '../DashBoardHeader';
import AttendanceOverview from '../Attendence/AttendanceOverview';


export default function Attendance() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashboardHeader />
                <AttendanceOverview />

            </div>
        </div>
    )
}

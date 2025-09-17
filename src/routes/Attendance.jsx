import React from 'react'
import Sidebar from '../SideBar'
import AttendanceOverview from '../Attendence/AttendanceOverview';
import DashBoardHeader from '../DashBoardHeader.';


export default function Attendance() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashBoardHeader />
                <AttendanceOverview />

            </div>
        </div>
    )
}

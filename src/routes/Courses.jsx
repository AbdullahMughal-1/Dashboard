import React from 'react'
import Sidebar from '../SideBar'
import CourseDashboard from '../Courses/CourseDashboard';
import DashboardHeader from '../DashBoardHeader';

export default function Courses() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashboardHeader />
                <CourseDashboard />

            </div>
        </div>
    )
}

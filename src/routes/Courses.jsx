import React from 'react'
import Sidebar from '../SideBar'
import CourseDashboard from '../Courses/CourseDashboard';

export default function Courses() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <CourseDashboard />

            </div>
        </div>
    )
}

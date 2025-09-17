import React from 'react'
import Sidebar from '../SideBar'
import DashboardHeader from '../DashBoardHeader'; import Exam1 from '../exam/exam1';
import DashBoardHeader from '../DashBoardHeader.';



export default function DateSheet() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <DashBoardHeader />
                <Exam1 />



            </div>
        </div>
    )
}

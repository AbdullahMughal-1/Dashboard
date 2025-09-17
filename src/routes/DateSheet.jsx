import React from 'react'
import Sidebar from '../SideBar'
import Exam1 from '../exam/Exam1';



export default function DateSheet() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar />

            <div className="flex-1 overflow-y-auto md:ml">
                <Exam1 />



            </div>
        </div>
    )
}

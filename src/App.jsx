import { Routes, Route } from 'react-router-dom';

import Login from './loginBoard/Login';
import Courses from './routes/Courses';
import Results from './routes/Results';
import DateSheet from './routes/DateSheet';
import Invoices from './routes/Invoices';
import Attendance from './routes/Attendance';
import DashBoard from "./routes/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/results" element={<Results />} />
      <Route path="/datesheet" element={<DateSheet />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/attendance" element={<Attendance />} />


    </Routes>
  );
}

export default App;

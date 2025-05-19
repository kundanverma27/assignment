import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaEnvelopeOpenText, FaBriefcase, FaUserFriends, FaFileAlt, FaUsersCog, FaCalendarCheck, FaChartLine, FaMoneyCheckAlt, FaSignOutAlt, FaChevronDown, FaFilter, FaFileExport } from 'react-icons/fa';

function EmployeeManagementPage() {
  return (
    <div className="flex min-h-screen bg-blue-50">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col min-h-screen">
        <div className="flex flex-col items-center py-8">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-16 h-16 rounded-full mb-3 border-4 border-yellow-400" />
          <div className="text-center">
            <div className="font-bold text-lg">KRIS Admin</div>
            <div className="text-blue-200 text-sm">Admin</div>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1 px-4">
            <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 rounded-lg bg-yellow-400 text-blue-900 font-bold' : 'flex items-center px-4 py-2 rounded-lg hover:bg-blue-800'}><FaTachometerAlt className="mr-3" />Dashboard</NavLink></li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaEnvelopeOpenText className="mr-3" />Messages</li>
            <li className="text-blue-200 text-xs mt-4 mb-1 px-2">Recruitment</li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaBriefcase className="mr-3" />Jobs</li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaUserFriends className="mr-3" />Candidates</li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaFileAlt className="mr-3" />Resumes</li>
            <li className="text-blue-200 text-xs mt-4 mb-1 px-2">Organization</li>
            <li><NavLink to="/employee-management" className={({ isActive }) => isActive ? 'flex items-center px-4 py-2 rounded-lg bg-yellow-400 text-blue-900 font-bold' : 'flex items-center px-4 py-2 rounded-lg hover:bg-blue-800'}><FaUsersCog className="mr-3" />Employee Management</NavLink></li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaCalendarCheck className="mr-3" />Leave Management</li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaChartLine className="mr-3" />Performance Management</li>
            <li className="text-blue-200 text-xs mt-4 mb-1 px-2">KRIS Pay</li>
            <li className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-800"><FaMoneyCheckAlt className="mr-3" />Payroll Management</li>
          </ul>
        </nav>
        <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg mx-4 my-6 py-2"><FaSignOutAlt className="mr-2" />Log Out</button>
        <div className="w-full flex justify-center pb-4"><img src="https://svgshare.com/i/12uA.svg" alt="pattern" className="w-24 h-10 object-contain opacity-90" /></div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex items-center mb-8">
          <div className="flex-1 flex items-center bg-blue-100 rounded-xl px-6 py-4 shadow">
            <div className="flex items-center bg-white rounded-lg px-2 py-1 mr-4">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold flex items-center">All Candidates <FaChevronDown className="ml-2" /></button>
              <input className="ml-2 px-3 py-2 rounded-lg border-none outline-none text-base bg-transparent" placeholder="Search..." />
            </div>
            <div className="flex items-center ml-auto space-x-4">
              <div className="relative w-11 h-11 flex items-center justify-center bg-blue-900 rounded-full text-white text-xl"><FaFilter /></div>
              <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold"><FaFileExport className="mr-2" />Export</button>
            </div>
          </div>
        </header>
        <div className="text-blue-900 font-semibold mb-4">Dashboard / Employee Management</div>
        <section className="bg-white rounded-xl p-6 shadow">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-blue-900">Employee Management</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-blue-100">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Name(s)</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Dept</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Job Title</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Start Date</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Category</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Gender</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-blue-900 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                {[
                  { name: 'John Steven Doe', dept: 'Design', title: 'UI UX Designer', date: '28/04/2022', category: 'Full time', gender: 'Male' },
                  { name: 'Barry Jhayson', dept: 'IT', title: 'Backend Engineer', date: '28/04/2022', category: 'Remote', gender: 'Male' },
                  { name: 'Tiwa Cavage', dept: 'Design', title: 'UI UX Designer', date: '28/04/2022', category: 'Full time', gender: 'Female' },
                  { name: 'James IDK', dept: 'Design', title: 'UI UX Designer', date: '28/04/2022', category: 'Full time', gender: 'Male' },
                  { name: 'Vanessa Chidi', dept: 'Design', title: 'UI UX Designer', date: '28/04/2022', category: 'Full time', gender: 'Female' },
                  { name: 'Don Gorgon', dept: 'Design', title: 'UI UX Designer', date: '28/04/2022', category: 'Full time', gender: 'Male' },
                  { name: 'Sarah Wilson', dept: 'Design', title: 'UI UX Designer', date: '28/04/2022', category: 'Full time', gender: 'Female' },
                ].map((emp, idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-4 py-2 whitespace-nowrap font-medium text-blue-900">{emp.name}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{emp.dept}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{emp.title}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{emp.date}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{emp.category}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{emp.gender}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <div className="relative inline-block text-left">
                        <button className="bg-blue-900 text-white px-4 py-1 rounded-lg font-semibold">Actions</button>
                        {/* Dropdown (for demo, always visible) */}
                        <div className="absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                          <div className="py-1">
                            <button className="block w-full text-left px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">View Profile</button>
                            <button className="block w-full text-left px-4 py-2 text-sm text-blue-900 hover:bg-blue-50">Edit Profile</button>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default EmployeeManagementPage; 
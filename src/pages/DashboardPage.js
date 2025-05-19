import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaBell, FaWrench, FaEnvelope, FaChevronDown, FaSearch, FaTachometerAlt, FaEnvelopeOpenText, FaBriefcase, FaUserFriends, FaFileAlt, FaUsersCog, FaCalendarCheck, FaChartLine, FaMoneyCheckAlt, FaSignOutAlt } from 'react-icons/fa';

function DashboardPage() {
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
          <button className="text-blue-900 text-2xl mr-4"><FaBars /></button>
          <div className="flex-1 flex items-center bg-blue-100 rounded-xl px-6 py-4 shadow">
            <div className="flex items-center bg-white rounded-lg px-2 py-1 mr-4">
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold flex items-center">All Candidates <FaChevronDown className="ml-2" /></button>
              <input className="ml-2 px-3 py-2 rounded-lg border-none outline-none text-base bg-transparent" placeholder="Search..." />
              <button className="ml-2 text-blue-900"><FaSearch /></button>
            </div>
            <div className="flex items-center ml-auto space-x-4">
              <div className="relative w-11 h-11 flex items-center justify-center bg-blue-900 rounded-full text-white text-xl"><FaBell /><span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white rounded-full px-1.5">2</span></div>
              <div className="relative w-11 h-11 flex items-center justify-center bg-yellow-400 rounded-full text-blue-900 text-xl"><FaWrench /><span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white rounded-full px-1.5">1</span></div>
              <div className="relative w-11 h-11 flex items-center justify-center bg-green-700 rounded-full text-white text-xl"><FaEnvelope /><span className="absolute -top-1 -right-1 bg-red-600 text-xs text-white rounded-full px-1.5">3</span></div>
            </div>
          </div>
        </header>
        {/* Widgets */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="flex items-center bg-yellow-400 rounded-xl p-6 shadow text-blue-900 font-bold text-xl"><FaEnvelopeOpenText className="text-3xl mr-4" />138 Messages</div>
          <div className="flex items-center bg-blue-900 rounded-xl p-6 shadow text-white font-bold text-xl"><FaBriefcase className="text-3xl mr-4" />50 Jobs</div>
          <div className="flex items-center bg-green-700 rounded-xl p-6 shadow text-white font-bold text-xl"><FaUserFriends className="text-3xl mr-4" />100 Candidates</div>
        </div>
        {/* Sections */}
        <div className="grid grid-cols-2 gap-8">
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold text-blue-900 mb-4">Applied Jobs</h3>
            <div className="space-y-3">
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://svgshare.com/i/12vA.svg" alt="job" className="w-8 h-8 mr-3" />Sales Executive <span className="ml-auto text-xs text-gray-400">20mins ago</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://svgshare.com/i/12wA.svg" alt="job" className="w-8 h-8 mr-3" />User Experience Designer <span className="ml-auto text-xs text-gray-400">10mins ago</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://svgshare.com/i/12xA.svg" alt="job" className="w-8 h-8 mr-3" />Product Manager <span className="ml-auto text-xs text-gray-400">5mins ago</span></div>
            </div>
          </section>
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold text-blue-900 mb-4">Employees</h3>
            <div className="space-y-3">
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/men/31.jpg" alt="emp" className="w-8 h-8 rounded-full mr-3" />John Doe <span className="ml-auto text-xs text-green-700 font-bold">View</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/women/32.jpg" alt="emp" className="w-8 h-8 rounded-full mr-3" />Ginna Loe <span className="ml-auto text-xs text-green-700 font-bold">View</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/men/33.jpg" alt="emp" className="w-8 h-8 rounded-full mr-3" />John Dore <span className="ml-auto text-xs text-green-700 font-bold">View</span></div>
            </div>
          </section>
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold text-blue-900 mb-4">Candidates</h3>
            <div className="space-y-3">
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/men/34.jpg" alt="cand" className="w-8 h-8 rounded-full mr-3" />John Doe <span className="ml-auto text-xs text-green-700 font-bold">80</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/women/35.jpg" alt="cand" className="w-8 h-8 rounded-full mr-3" />Ginna Loe <span className="ml-auto text-xs text-green-700 font-bold">50</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/men/36.jpg" alt="cand" className="w-8 h-8 rounded-full mr-3" />James Foe <span className="ml-auto text-xs text-red-600 font-bold">30</span></div>
            </div>
          </section>
          <section className="bg-white rounded-xl p-6 shadow">
            <h3 className="font-bold text-blue-900 mb-4">April Payrolls</h3>
            <div className="space-y-3">
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/men/34.jpg" alt="pay" className="w-8 h-8 rounded-full mr-3" />John Doe <span className="ml-auto text-xs text-green-700 font-bold">Paid</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/women/35.jpg" alt="pay" className="w-8 h-8 rounded-full mr-3" />Ginna Loe <span className="ml-auto text-xs text-yellow-500 font-bold">Processing</span></div>
              <div className="flex items-center bg-blue-50 rounded-lg p-4 shadow-sm font-semibold text-blue-900"><img src="https://randomuser.me/api/portraits/men/36.jpg" alt="pay" className="w-8 h-8 rounded-full mr-3" />James Foe <span className="ml-auto text-xs text-yellow-500 font-bold">Processing</span></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage; 
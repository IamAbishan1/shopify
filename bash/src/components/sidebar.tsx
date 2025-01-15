import  { useState } from 'react';

export function AppSidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
    return (
      <div className="flex h-screen">
        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? 'w-64' : 'w-16'
          } bg-gray-800 text-white h-full transition-all duration-300 ease-in-out`}
        >
          <div className="flex justify-between items-center p-4">
            <h2 className={`text-xl ${sidebarOpen ? 'block' : 'hidden'}`}>Sidebar</h2>
            <button onClick={toggleSidebar} className="text-white">
              {sidebarOpen ? 'Close' : 'Open'}
            </button>
          </div>
  
          {/* Sidebar links or content */}
          <div className={`px-4 py-2 space-y-4 ${sidebarOpen ? 'block' : 'hidden'}`}>
            <a href="#home" className="block">Home</a>
            <a href="#services" className="block">Services</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        </div>
     </div>

  )
}


import React, { useEffect, useState } from 'react';
import MainNav from './MainNav'; // استيراد MainNav
import Sidebar from './SideNav'; // استيراد Sidebar
import { useNavigate } from 'react-router-dom';
// import './Home.css'; 
function Home() {
  const navigate = useNavigate();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
      console.log('Checking isLoggedIn:', localStorage.getItem('isLoggedIn'));
        if (localStorage.getItem('isLoggedIn') !== 'true') { // تغيير هنا
            navigate('/Login');
        }
    }, [navigate]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/Login');
    };

  return (
    <div className="home-container">
      <MainNav toggleSidebar={toggleSidebar} /> {/* تمرير دالة toggleSidebar إلى MainNav */}
      <div className="content-container">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <h1>Welcome to your Dashboard!</h1>
          <p>This is where your main content goes.</p>
        </div>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
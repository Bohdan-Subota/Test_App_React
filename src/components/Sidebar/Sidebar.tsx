import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import LogoutModal from '../LogoutModal/LogoutModal';
import './Sidebar.scss';

const Sidebar = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    console.log('Logging out...');
    setIsLogoutModalOpen(false);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__logo">
          <h1>Logo</h1>
        </div>
        <div className="sidebar__profile">
          <div className="sidebar__profile-main">
            <div className="sidebar__avatar">
              <img src="https://picsum.photos/40/40" alt="User avatar" />
            </div>
            <div className="sidebar__user-info">
              <h3 className="sidebar__username">Bohdan-Subota</h3>
              <p className="sidebar__email">test@gmail.com</p>
            </div>
          </div>
          <button className="sidebar__settings">
            <IoSettingsOutline size={20} />
          </button>
        </div>
        <nav className="sidebar__nav">
          <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/resources">Resources</Link></li>
          </ul>
        </nav>
      </div>
      
      <div className="sidebar__footer">
        <button 
          className="sidebar__logout" 
          onClick={() => setIsLogoutModalOpen(true)}
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </button>
      </div>
      
      <LogoutModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </aside>
  );
};

export default Sidebar;
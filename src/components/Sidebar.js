import React from 'react';

import logo from '../images/logo.png';

function Sidebar(props) {
  return (
    <div id="sidebar" className={`${props.visibility} sticky-top shadow-sm mb-5 bg-white rounded`}>
      <div className="sidebar-header border-bottom w-100 mw-100">
        <a href="#" className="mw-100">
          <img src={logo} alt="" className="sidebar-logo mw-100" />
        </a>
        <button className="sidebar-toggler border-0 bg-white float-right mw-100" onClick={() => props.toggleSidebar()}>
          <a href="#"><span className="material-icons text-secondary mw-100">keyboard_arrow_left</span></a>
        </button>
      </div>
      <div className="sidebar-navitems w-100 mw-100">
        <button className="btn btn-outline-success my-2 my-sm-0 w-100 mw-100">Login</button>
      </div>
    </div>
  );
}
export default Sidebar;

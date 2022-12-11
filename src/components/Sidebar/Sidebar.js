import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import SidebarHashes from './SidebarHashes';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img src="https://wallpaperaccess.com/full/349649.jpg" 
        alt="" 
        />
        <Avatar className='sidebar__avatar'/>
        <h2>Naman Hiran</h2>
        <h4>ganondorf980@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">
            1,290
          </p>
        </div>
        <div className="sidebar__stat">
        <p>Views on Posts</p>
          <p className="sidebar__statnumber">
            2,230
          </p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        <SidebarHashes topic="reactjs"/>
        <SidebarHashes topic="competitiveprogramming"/>
        <SidebarHashes topic="programming"/>
        <SidebarHashes topic="design"/>
        <SidebarHashes topic="javascript"/>
        <SidebarHashes topic="softwareengineering"/>
      </div>
    </div>
  )
}

export default Sidebar

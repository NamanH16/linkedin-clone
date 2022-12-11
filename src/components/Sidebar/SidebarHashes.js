import React from 'react'
import "./Sidebar.css"

const SidebarHashes = ({topic}) => {
  return (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )
}

export default SidebarHashes
import React from 'react'
import './Header.css'
import HeaderOption from "../HeaderOption/HeaderOption"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { BusinessCenter, Chat, Notifications } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <div className="header__left">
          <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" 
          alt="" 
          />
          
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>  {/* Icon here is a component and title is a argument */}
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenter} title="Jobs"/>
          <HeaderOption Icon={Chat} title="Messaging"/>
          <HeaderOption Icon={Notifications} title="Notifications"/>
          <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQFXUuvlAhKxfQ/profile-displayphoto-shrink_100_100/0/1627642929589?e=1676505600&v=beta&t=j24WdUamd85ddPxo3_rMUlcqtLU60IMChl-Y2irKXec" 
          title="Me"/>
      </div>
    </div>
  )
}

export default Header
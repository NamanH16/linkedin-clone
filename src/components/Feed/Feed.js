import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css"
import InputOption from '../InputOption/InputOption';
import { CalendarMonth, Newspaper, Photo, Subscriptions } from '@mui/icons-material';

function Feed() {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" name="" id="" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={Photo} title="Photo" color="#70B5F9"/>
                <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                <InputOption Icon={CalendarMonth} title="Event" color="#C0CBCD"/>
                <InputOption Icon={Newspaper} title="Write article" color="#7FC15E"/>
            </div>
        </div>
    </div>
  )
}

export default Feed
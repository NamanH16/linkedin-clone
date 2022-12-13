import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css"
import InputOption from "./InputOption/InputOption"
import Post from '../Post/Post';
import { CalendarMonth, Newspaper, Photo, Subscriptions } from '@mui/icons-material';

function Feed() {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) =>{
    e.preventDefault();   // whenever we used to submit the page used to reload, in order to stop that this is written
  }

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" name="" id="" />
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={Photo} title="Photo" color="#70B5F9"/>
                <InputOption Icon={Subscriptions} title="Video" color="#E7A33E"/>
                <InputOption Icon={CalendarMonth} title="Event" color="#C0CBCD"/>
                <InputOption Icon={Newspaper} title="Write article" color="#7FC15E"/>
            </div>
        </div>
    {posts.map((post)=>(
        <Post />
    ))}   
        <Post name='Naman Hiran' description='Full Stack Developer' message='Why AI is the future' photoUrl="https://media-exp1.licdn.com/dms/image/C5603AQFXUuvlAhKxfQ/profile-displayphoto-shrink_100_100/0/1627642929589?e=1676505600&v=beta&t=j24WdUamd85ddPxo3_rMUlcqtLU60IMChl-Y2irKXec"/>
    </div>
  )
}

export default Feed
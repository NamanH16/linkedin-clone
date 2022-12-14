import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import "./Feed.css"
import InputOption from "./InputOption/InputOption"
import Post from '../Post/Post';
import { CalendarMonth, Newspaper, Photo, Subscriptions } from '@mui/icons-material';
import {db} from "../firebase"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
        setPosts(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
    );
}, []);

  const sendPost = (e) =>{
    e.preventDefault();   // whenever we used to submit the page used to reload, in order to stop that this is written

    db.collection("posts").add({
      name:"Naman Hiran",
      description:"This is a test",
      message: input,
      photoUrl:"",
      timestamp:new Date().getTime()
    });
  };

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
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
    {posts.map(({id, data:{name, description, message, photoUrl} })=>(
        <Post 
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
    ))}   
    </div>
  );
}

export default Feed
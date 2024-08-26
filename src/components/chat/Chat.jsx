 import React, { useState } from 'react';
 import './chat.scss';
 
 const Chat = () => {
    const [chat,setChat]= useState(true)

   return (
     <div className="chat">
        <div className="mesagges">
            <h1>Messages</h1>
            <div className="message">
                <img src="/logo.png" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor ...
                </p>
            </div>
            <div className="message">
                <img src="/logo.png" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor ...
                </p>
            </div>
            <div className="message">
                <img src="/logo.png" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor ...
                </p>
            </div>
            <div className="message">
                <img src="/logo.png" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor ...
                </p>
            </div>
            <div className="message">
                <img src="/logo.png" alt="" />
                <span>John Doe</span>
                <p>
                    Lorem ipsum dolor ...
                </p>
            </div>
        </div>
        {chat &&(<div className="chatbox">
            <div className="top">
                <div className="user">
                    <img src="/logo.png" alt="" />
                    John doe
                </div>
                <span className="close" onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage ">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage ">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage own">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
                <div className="chatMessage ">
                    <p>Lorem Message ...</p>
                    <span>1 hour later</span>
                </div>
            </div>
            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>)}
        
     </div>
   )
 }
 
 export default Chat
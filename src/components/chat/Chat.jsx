 import React from 'react';
 import './chat.scss';
 
 const Chat = () => {
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
        <div className="chatbox">Box</div>
        <h1>Changes in chat</h1>
     </div>
   )
 }
 
 export default Chat
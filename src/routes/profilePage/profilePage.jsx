import React from 'react'
import './profilePage.scss'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'

const ProfilePage = () => {
  return (
    <div className="profilePage">
  <div className="details">
    <div className="wrapper">
      <div className="title">
        <h1>User Information</h1>
        <button>Update Profile</button>
      </div>
      <div className="info">
        <span>
          Avatar:
          <img src="/logo.png" alt="" />
        </span>
        <span>Username:<b>Ram</b></span>
        <span>E-mail:<b>ajha15704@gmail.com</b></span>
      </div>
      <div className="title">
        <h1>My list</h1>
        <button>Create New Post</button>
      </div>
      <div className="title">
        <h1>Saved List</h1>
        {/* <button>Update Profile</button> */}
      </div>
      <List/>
    </div>
  </div>
  <div className="chatContainer">
    <div className="wrapper">
      <Chat/>
    </div>
  </div>
    </div>
  )
}

export default ProfilePage